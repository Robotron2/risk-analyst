import { useState, useCallback } from 'react';
import { useWriteContract, useWaitForTransactionReceipt, useAccount, useChainId } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../config/contract';
import { validateOnchainPayload } from '../services/api';

export type LogOnChainStatus =
  | 'idle'
  | 'validating'
  | 'awaiting_wallet'
  | 'confirming'
  | 'success'
  | 'error';

export interface LogOnChainError {
  type: 'validation' | 'wallet_rejected' | 'wrong_network' | 'contract_revert' | 'unknown';
  message: string;
}

export function useLogOnChain() {
  const [status, setStatus] = useState<LogOnChainStatus>('idle');
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
  const [error, setError] = useState<LogOnChainError | null>(null);

  const { isConnected } = useAccount();
  const chainId = useChainId();
  const { writeContractAsync } = useWriteContract();

  // Watch for tx receipt when we have a hash
  const { data: receipt } = useWaitForTransactionReceipt({
    hash: txHash ?? undefined,
  });

  // Update status when receipt arrives
  if (receipt && status === 'confirming') {
    setStatus('success');
  }

  const logOnChain = useCallback(
    async (tokenAddress: string, riskScore: number, riskLevel: string) => {
      setError(null);
      setTxHash(null);

      // Check wallet connection
      if (!isConnected) {
        setError({ type: 'wallet_rejected', message: 'Please connect your wallet first.' });
        setStatus('error');
        return;
      }

      // Check network (HashKey Chain Testnet = 133)
      if (chainId !== 133) {
        setError({
          type: 'wrong_network',
          message: 'Please switch to HashKey Chain Testnet (Chain ID: 133).',
        });
        setStatus('error');
        return;
      }

      // Step 1: Validate with backend
      setStatus('validating');
      try {
        await validateOnchainPayload({ tokenAddress, riskScore, riskLevel });
      } catch (err: any) {
        setError({
          type: 'validation',
          message: err?.response?.data?.message || 'Backend validation failed.',
        });
        setStatus('error');
        return;
      }

      // Step 2: Sign transaction via wallet
      setStatus('awaiting_wallet');
      try {
        const hash = await writeContractAsync({
          address: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          functionName: 'logAnalysis',
          args: [tokenAddress as `0x${string}`, riskScore, riskLevel],
        } as any);

        setTxHash(hash);
        setStatus('confirming');
      } catch (err: any) {
        const message = err?.message || 'Transaction failed.';

        // Classify the error
        if (
          message.includes('User rejected') ||
          message.includes('user rejected') ||
          message.includes('User denied')
        ) {
          setError({ type: 'wallet_rejected', message: 'Transaction was rejected by the wallet.' });
        } else if (message.includes('revert') || message.includes('execution reverted')) {
          setError({ type: 'contract_revert', message: 'Smart contract rejected the transaction.' });
        } else {
          setError({ type: 'unknown', message });
        }
        setStatus('error');
      }
    },
    [isConnected, chainId, writeContractAsync]
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setTxHash(null);
    setError(null);
  }, []);

  return {
    status,
    txHash,
    receipt,
    error,
    logOnChain,
    reset,
  };
}
