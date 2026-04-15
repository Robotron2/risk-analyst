import { useState } from 'react';
import { Copy, ExternalLink, CheckCircle, Clock, Shield, Fuel } from 'lucide-react';
import Modal from './ui/Modal';
import type { OnChainData } from '../types';

interface OnChainModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: OnChainData | null;
  tokenName?: string;
  riskScore?: number;
}

export default function OnChainModal({ isOpen, onClose, data, tokenName, riskScore }: OnChainModalProps) {
  const [copied, setCopied] = useState(false);

  if (!data) return null;

  const copyHash = () => {
    navigator.clipboard.writeText(data.txHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const explorerUrl = data.network === 'Hashkey Chain'
    ? `https://hashkey.blockscout.com/tx/${data.txHash}`
    : `https://hashkey.blockscout.com/tx/${data.txHash}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="On-Chain Certification">
      <div className="space-y-5">
        {/* Asset Identity */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-1">Asset Identity</p>
            <p className="text-lg font-bold text-[var(--color-text)]">{tokenName || 'Unknown Token'}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[var(--color-primary-bg)] flex items-center justify-center">
            <Shield className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
        </div>

        {/* Score + Date */}
        <div className="flex gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-1">Risk Score</p>
            <p className="text-2xl font-bold text-[var(--color-text)]">
              {riskScore ?? '--'}
              <span className="text-xs text-[var(--color-text-muted)] ml-1">/100</span>
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[var(--color-text-muted)] mb-1">Certified</p>
            <p className="text-sm text-[var(--color-text)]">
              {new Date(data.timestamp).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">
              {new Date(data.timestamp).toLocaleTimeString()}
            </p>
          </div>
        </div>

        {/* Certification Details Notice */}
        <div className="p-3 rounded-xl bg-[var(--color-primary-bg)] border border-[var(--color-primary)]/20">
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-[var(--color-primary)]">Certification Details</p>
              <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
                Generating an on-chain certificate creates an immutable ledger entry of this risk assessment. This process requires a one-time network gas fee and cannot be reversed.
              </p>
            </div>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="space-y-3">
          {/* Tx Hash */}
          <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
            <span className="text-xs text-[var(--color-text-muted)]">Transaction Hash</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[var(--color-text)]">
                {data.txHash.slice(0, 8)}...{data.txHash.slice(-6)}
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

          {/* Network */}
          <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
            <span className="text-xs text-[var(--color-text-muted)]">Network</span>
            <span className="text-xs font-medium text-[var(--color-text)]">{data.network}</span>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
            <span className="text-xs text-[var(--color-text-muted)]">Status</span>
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
              data.status === 'confirmed' ? 'text-[var(--color-risk-low)]' : 'text-[var(--color-risk-medium)]'
            }`}>
              {data.status === 'confirmed' ? (
                <CheckCircle className="w-3.5 h-3.5" />
              ) : (
                <Clock className="w-3.5 h-3.5" />
              )}
              {data.status === 'confirmed' ? 'Confirmed' : 'Pending'}
            </span>
          </div>

          {/* Gas Used */}
          <div className="flex items-center justify-between py-2">
            <span className="text-xs text-[var(--color-text-muted)]">Gas Used</span>
            <span className="inline-flex items-center gap-1 text-xs text-[var(--color-text)]">
              <Fuel className="w-3 h-3 text-[var(--color-text-muted)]" />
              {data.gasUsed}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            Log to Blockchain
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
