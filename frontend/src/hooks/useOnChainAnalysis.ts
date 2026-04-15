import { useReadContract } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../config/contract';

export interface OnChainAnalysis {
  token: string;
  riskScore: number;
  riskLevel: string;
  timestamp: bigint;
  reporter: string;
}

export function useOnChainAnalysis(tokenAddress: string | undefined) {
  const { data, isLoading, isError, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getLatestAnalysis',
    args: tokenAddress ? [tokenAddress as `0x${string}`] : undefined,
    query: {
      enabled: !!tokenAddress && /^0x[a-fA-F0-9]{40}$/.test(tokenAddress),
    },
  });

  const analysis: OnChainAnalysis | null =
    data && (data as any).token !== '0x0000000000000000000000000000000000000000'
      ? {
          token: (data as any).token,
          riskScore: Number((data as any).riskScore),
          riskLevel: (data as any).riskLevel,
          timestamp: (data as any).timestamp,
          reporter: (data as any).reporter,
        }
      : null;

  return {
    analysis,
    isLoading,
    isError,
    refetch,
  };
}
