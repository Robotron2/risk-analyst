import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Report, HistoryEntry } from '../types';
import { mockReports, mockHistory } from '../data/mockData';

interface ReportContextType {
  reports: Report[];
  history: HistoryEntry[];
  currentReport: Report | null;
  setCurrentReport: (report: Report | null) => void;
  getReportById: (id: string) => Report | undefined;
  addReport: (report: Report) => void;
  addHistoryEntry: (entry: HistoryEntry) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (v: boolean) => void;
}

const ReportContext = createContext<ReportContextType>({
  reports: [],
  history: [],
  currentReport: null,
  setCurrentReport: () => {},
  getReportById: () => undefined,
  addReport: () => {},
  addHistoryEntry: () => {},
  isAnalyzing: false,
  setIsAnalyzing: () => {},
});

export function ReportProvider({ children }: { children: ReactNode }) {
  const [reports, setReports] = useState<Report[]>(mockReports);
  const [history, setHistory] = useState<HistoryEntry[]>(mockHistory);
  const [currentReport, setCurrentReport] = useState<Report | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const getReportById = (id: string) => reports.find((r) => r.id === id);

  const addReport = (report: Report) => {
    setReports((prev) => [report, ...prev]);
  };

  const addHistoryEntry = (entry: HistoryEntry) => {
    setHistory((prev) => [entry, ...prev]);
  };

  return (
    <ReportContext.Provider
      value={{
        reports,
        history,
        currentReport,
        setCurrentReport,
        getReportById,
        addReport,
        addHistoryEntry,
        isAnalyzing,
        setIsAnalyzing,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
}

export const useReports = () => useContext(ReportContext);
