import React, { useState } from 'react';
import { X, Copy, Check, QrCode, AlertCircle } from 'lucide-react';

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DepositModal: React.FC<DepositModalProps> = ({ isOpen, onClose }) => {
  const [selectedCoin, setSelectedCoin] = useState('USDT');
  const [selectedNetwork, setSelectedNetwork] = useState('TRX (Tron TRC20)');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const depositAddress = 'TFx4k58a9M3vK99N2LqZ8jVwQ4pG8hR1s7';

  const handleCopy = () => {
    navigator.clipboard?.writeText(depositAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs select-none">
      <div className="w-full max-w-md bg-[#1E2329] border border-[#2B313A] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#2B313A]">
          <h3 className="text-base font-semibold text-white">Deposit Crypto</h3>
          <button
            onClick={onClose}
            className="p-1 text-[#848E9C] hover:text-white rounded-lg hover:bg-[#2B313A] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 text-xs">
          {/* Select Coin */}
          <div>
            <label className="block text-[#848E9C] mb-1 font-medium">Select Coin</label>
            <select
              value={selectedCoin}
              onChange={(e) => setSelectedCoin(e.target.value)}
              className="w-full bg-[#181A20] border border-[#2B313A] rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#FCD535]"
            >
              <option value="USDT">USDT - Tether USD</option>
              <option value="BNB">BNB - Build and Build</option>
              <option value="BTC">BTC - Bitcoin</option>
              <option value="ETH">ETH - Ethereum</option>
            </select>
          </div>

          {/* Select Network */}
          <div>
            <label className="block text-[#848E9C] mb-1 font-medium">Deposit Network</label>
            <select
              value={selectedNetwork}
              onChange={(e) => setSelectedNetwork(e.target.value)}
              className="w-full bg-[#181A20] border border-[#2B313A] rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#FCD535]"
            >
              <option value="TRX (Tron TRC20)">TRON (TRC20)</option>
              <option value="BSC (BNB Smart Chain BEP20)">BNB Smart Chain (BEP20)</option>
              <option value="ETH (Ethereum ERC20)">Ethereum (ERC20)</option>
              <option value="SOL (Solana)">Solana (SPL)</option>
            </select>
          </div>

          {/* QR Code Simulation & Address */}
          <div className="p-4 bg-[#181A20] rounded-xl border border-[#2B313A] flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-white p-2 rounded-lg flex items-center justify-center mb-3 shadow">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
                {/* SVG QR Code Pattern */}
                <rect x="5" y="5" width="25" height="25" fill="black" />
                <rect x="9" y="9" width="17" height="17" fill="white" />
                <rect x="13" y="13" width="9" height="9" fill="black" />

                <rect x="70" y="5" width="25" height="25" fill="black" />
                <rect x="74" y="9" width="17" height="17" fill="white" />
                <rect x="78" y="13" width="9" height="9" fill="black" />

                <rect x="5" y="70" width="25" height="25" fill="black" />
                <rect x="9" y="74" width="17" height="17" fill="white" />
                <rect x="13" y="78" width="9" height="9" fill="black" />

                <rect x="35" y="10" width="6" height="6" />
                <rect x="45" y="15" width="8" height="8" />
                <rect x="55" y="10" width="6" height="6" />
                <rect x="35" y="35" width="30" height="30" fill="#F0B90B" />
                <rect x="40" y="40" width="20" height="20" fill="black" />
                <rect x="10" y="45" width="12" height="12" />
                <rect x="75" y="40" width="15" height="15" />
                <rect x="40" y="75" width="15" height="15" />
                <rect x="70" y="75" width="20" height="20" />
              </svg>
            </div>

            <p className="text-[11px] text-[#848E9C] mb-1">Deposit Address ({selectedCoin})</p>
            <div className="w-full flex items-center justify-between bg-[#2B313A]/50 border border-[#2B313A] rounded-lg px-3 py-2 text-white font-mono text-[11px]">
              <span className="truncate mr-2">{depositAddress}</span>
              <button
                onClick={handleCopy}
                className="text-[#FCD535] hover:text-white shrink-0 cursor-pointer"
                title="Copy Address"
              >
                {copied ? <Check size={14} className="text-[#0ECB81]" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2 text-[11px] text-[#848E9C] bg-[#181A20]/60 p-2.5 rounded-lg border border-[#2B313A]">
            <AlertCircle size={14} className="text-[#FCD535] shrink-0 mt-0.5" />
            <span>Send only {selectedCoin} to this address. 12 network block confirmations required.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
