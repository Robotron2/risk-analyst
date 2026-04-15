import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { socket } from '../lib/socket';
import { analyzeToken as apiAnalyze, getReportByAddress } from '../services/api';

// ---- Types ----
export type AnalysisStatus = 'idle' | 'processing' | 'completed' | 'failed';

export interface AnalysisResult {
  risk_score: number;
  risk_level: 'Low' | 'Medium' | 'High';
  summary: string;
  compliance_flags: string[];
  institutional_recommendation: string;
}

interface AnalysisContextType {
  status: AnalysisStatus;
  currentToken: string | null;
  analysisData: AnalysisResult | null;
  error: string | null;
  startAnalysis: (tokenAddress: string, network: string) => Promise<void>;
  resetAnalysis: () => void;
  fetchFallbackReport: (tokenAddress: string) => Promise<void>;
}

const AnalysisContext = createContext<AnalysisContextType>({
  status: 'idle',
  currentToken: null,
  analysisData: null,
  error: null,
  startAnalysis: async () => {},
  resetAnalysis: () => {},
  fetchFallbackReport: async () => {},
});

// ---- Provider ----
export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AnalysisStatus>('idle');
  const [currentToken, setCurrentToken] = useState<string | null>(null);
  const [analysisData, setAnalysisData] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const processedRef = useRef<Set<string>>(new Set());

  // ---- Socket listeners ----
  useEffect(() => {
    const handleComplete = (payload: { tokenAddress: string; data: AnalysisResult }) => {
      // Duplicate guard
      if (processedRef.current.has(payload.tokenAddress)) return;
      processedRef.current.add(payload.tokenAddress);

      setCurrentToken((cur) => {
        if (cur === payload.tokenAddress) {
          setAnalysisData(payload.data);
          setStatus('completed');
          setError(null);
        }
        return cur;
      });
    };

    const handleFailed = (payload: { tokenAddress: string }) => {
      setCurrentToken((cur) => {
        if (cur === payload.tokenAddress) {
          setError('Analysis failed. Please try again.');
          setStatus('failed');
        }
        return cur;
      });
    };

    socket.on('analysis_complete', handleComplete);
    socket.on('analysis_failed', handleFailed);

    return () => {
      socket.off('analysis_complete', handleComplete);
      socket.off('analysis_failed', handleFailed);
    };
  }, []);

  // ---- Join room whenever currentToken changes ----
  useEffect(() => {
    if (currentToken) {
      socket.emit('join', currentToken);
    }
  }, [currentToken]);

  // ---- Actions ----
  const startAnalysis = useCallback(async (tokenAddress: string, network: string) => {
    // Reset state
    processedRef.current.delete(tokenAddress);
    setCurrentToken(tokenAddress);
    setAnalysisData(null);
    setError(null);
    setStatus('processing');

    // Join the room first
    socket.emit('join', tokenAddress);

    try {
      await apiAnalyze(tokenAddress, network);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Failed to initiate analysis. Backend may be offline.');
      setStatus('failed');
    }
  }, []);

  const resetAnalysis = useCallback(() => {
    setStatus('idle');
    setCurrentToken(null);
    setAnalysisData(null);
    setError(null);
  }, []);

  const fetchFallbackReport = useCallback(async (tokenAddress: string) => {
    try {
      const data = await getReportByAddress(tokenAddress);
      if (data) {
        setAnalysisData(data);
        setStatus('completed');
      }
    } catch {
      // Silently fail — report may not exist yet
    }
  }, []);

  return (
    <AnalysisContext.Provider
      value={{
        status,
        currentToken,
        analysisData,
        error,
        startAnalysis,
        resetAnalysis,
        fetchFallbackReport,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export const useAnalysis = () => useContext(AnalysisContext);
