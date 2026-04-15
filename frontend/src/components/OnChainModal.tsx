import { useEffect } from 'react';
import {
  Copy,
  ExternalLink,
  CheckCircle,
  Shield,
  Loader2,
  AlertTriangle,
  XCircle,
  Wallet,
} from 'lucide-react';
import Modal from './ui/Modal';
import { useLogOnChain, type LogOnChainStatus } from '../hooks/useLogOnChain';
import { useAccount } from 'wagmi';
import { useState } from 'react';

interface OnChainModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokenAddress: string;
  tokenName?: string;
  riskScore: number;
  riskLevel: string;
}

export default function OnChainModal({
  isOpen,
  onClose,
  tokenAddress,
  tokenName,
  riskScore,
  riskLevel,
}: OnChainModalProps) {
  const [copied, setCopied] = useState(false);
  const { isConnected } = useAccount();
  const { status, txHash, error, logOnChain, reset } = useLogOnChain();

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const handleLogOnChain = () => {
    logOnChain(tokenAddress, riskScore, riskLevel);
  };

  const copyHash = () => {
    if (txHash) {
      navigator.clipboard.writeText(txHash);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const explorerUrl = txHash
    ? `https://hashkey.blockscout.com/tx/${txHash}`
    : '#';

  const getStatusConfig = (
    s: LogOnChainStatus
  ): { icon: typeof Shield; label: string; color: string; bg: string } => {
    switch (s) {
      case 'validating':
        return { icon: Loader2, label: 'Validating payload...', color: 'var(--color-primary)', bg: 'var(--color-primary-bg)' };
      case 'awaiting_wallet':
        return { icon: Wallet, label: 'Waiting for wallet confirmation...', color: 'var(--color-risk-medium)', bg: 'var(--color-risk-medium-bg)' };
      case 'confirming':
        return { icon: Loader2, label: 'Confirming on-chain...', color: 'var(--color-primary)', bg: 'var(--color-primary-bg)' };
      case 'success':
        return { icon: CheckCircle, label: 'Logged on-chain successfully!', color: 'var(--color-risk-low)', bg: 'var(--color-risk-low-bg)' };
      case 'error':
        return { icon: XCircle, label: error?.message || 'Transaction failed', color: 'var(--color-risk-high)', bg: 'var(--color-risk-high-bg)' };
      default:
        return { icon: Shield, label: 'Ready to log on-chain', color: 'var(--color-primary)', bg: 'var(--color-primary-bg)' };
    }
  };

  const statusConfig = getStatusConfig(status);
  const StatusIcon = statusConfig.icon;
  const isProcessing = ['validating', 'awaiting_wallet', 'confirming'].includes(status);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="On-Chain Certification">
      <div className="space-y-5">
        {/* Asset Identity */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
              Asset Identity
            </p>
            <p className="text-lg font-bold text-[var(--color-text)]">
              {tokenName || 'Unknown Token'}
            </p>
            <p className="text-[11px] font-mono text-[var(--color-text-muted)] mt-0.5">
              {tokenAddress.slice(0, 10)}...{tokenAddress.slice(-8)}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[var(--color-primary-bg)] flex items-center justify-center">
            <Shield className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
        </div>

        {/* Score + Risk Level */}
        <div className="flex gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
              Risk Score
            </p>
            <p className="text-2xl font-bold text-[var(--color-text)]">
              {riskScore}
              <span className="text-xs text-[var(--color-text-muted)] ml-1">/100</span>
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
              Risk Level
            </p>
            <p className="text-sm font-semibold text-[var(--color-text)]">{riskLevel}</p>
          </div>
        </div>

        {/* Certification Notice */}
        <div className="p-3 rounded-xl bg-[var(--color-primary-bg)] border border-[var(--color-primary)]/20">
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-[var(--color-primary)]">
                Certification Details
              </p>
              <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
                Generating an on-chain certificate creates an immutable ledger entry of this risk
                assessment. This process requires a one-time network gas fee and cannot be reversed.
              </p>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        {status !== 'idle' && (
          <div
            className="flex items-center gap-3 p-3 rounded-xl border transition-all"
            style={{
              backgroundColor: statusConfig.bg,
              borderColor: `${statusConfig.color}33`,
            }}
          >
            <StatusIcon
              className={`w-5 h-5 flex-shrink-0 ${isProcessing ? 'animate-spin' : ''}`}
              style={{ color: statusConfig.color }}
            />
            <span className="text-sm font-medium" style={{ color: statusConfig.color }}>
              {statusConfig.label}
            </span>
          </div>
        )}

        {/* Success: TX Details */}
        {status === 'success' && txHash && (
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
              <span className="text-xs text-[var(--color-text-muted)]">Transaction Hash</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[var(--color-text)]">
                  {txHash.slice(0, 8)}...{txHash.slice(-6)}
                </span>
                <button
                  onClick={copyHash}
                  className="p-1 rounded hover:bg-[var(--color-border)] transition-colors"
                >
                  {copied ? (
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-risk-low)]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
              <span className="text-xs text-[var(--color-text-muted)]">Network</span>
              <span className="text-xs font-medium text-[var(--color-text)]">HashKey Chain</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-xs text-[var(--color-text-muted)]">Status</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-risk-low)]">
                <CheckCircle className="w-3.5 h-3.5" />
                Confirmed
              </span>
            </div>
          </div>
        )}

        {/* Error with wallet rejection: suggest retry */}
        {status === 'error' && error?.type === 'wrong_network' && (
          <div className="p-3 rounded-xl bg-[var(--color-risk-high-bg)] border border-[var(--color-risk-high)]/20">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-[var(--color-risk-high)] mt-0.5 flex-shrink-0" />
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Please switch your wallet to <strong>HashKey Chain Testnet</strong> (Chain ID: 133)
                and try again.
              </p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-2">
          {status === 'success' && txHash ? (
            <>
              <a
                href={explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                View on Explorer
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors"
              >
                Close
              </button>
            </>
          ) : (
            <>
              <button
                onClick={status === 'error' ? () => { reset(); handleLogOnChain(); } : handleLogOnChain}
                disabled={isProcessing || !isConnected}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {status === 'validating'
                      ? 'Validating...'
                      : status === 'awaiting_wallet'
                      ? 'Confirm in Wallet...'
                      : 'Confirming...'}
                  </>
                ) : status === 'error' ? (
                  <>
                    <Shield className="w-4 h-4" />
                    Retry
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    Log to Blockchain
                  </>
                )}
              </button>
              {!isConnected && (
                <p className="text-[11px] text-center text-[var(--color-risk-high)]">
                  Connect your wallet to log on-chain
                </p>
              )}
              <button
                onClick={onClose}
                disabled={isProcessing}
                className="w-full py-2.5 rounded-xl text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
