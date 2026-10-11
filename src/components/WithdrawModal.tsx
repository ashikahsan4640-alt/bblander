import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableUsdt: number;
}

export const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  onClose,
  availableUsdt,
}) => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('TRX (Tron TRC20)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleMax = () => {
    setAmount(availableUsdt.toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs select-none">
      <div className="w-full max-w-md bg-[#1E2329] border border-[#2B313A] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#2B313A]">
          <h3 className="text-base font-semibold text-white">Withdraw Crypto</h3>
          <button
            onClick={onClose}
            className="p-1 text-[#848E9C] hover:text-white rounded-lg hover:bg-[#2B313A] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          {/* Destination Address */}
          <div>
            <label className="block text-[#848E9C] mb-1 font-medium">Send to Address</label>
            <input
              type="text"
              placeholder="Paste recipient address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full bg-[#181A20] border border-[#2B313A] rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#FCD535]"
            />
          </div>

          {/* Network */}
          <div>
            <label className="block text-[#848E9C] mb-1 font-medium">Network</label>
            <select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              className="w-full bg-[#181A20] border border-[#2B313A] rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#FCD535]"
            >
              <option value="TRX (Tron TRC20)">Tron (TRC20) - Fee: 1 USDT</option>
              <option value="BSC (BEP20)">BNB Smart Chain (BEP20) - Fee: 0.2 USDT</option>
              <option value="ETH (ERC20)">Ethereum (ERC20) - Fee: 4.5 USDT</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[#848E9C] font-medium">Withdrawal Amount</label>
              <span className="text-[#848E9C]">
                Available:{' '}
                <span className="text-[#FCD535] font-semibold">
                  {availableUsdt.toLocaleString()} USDT
                </span>
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder="Minimum 10"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full bg-[#181A20] border border-[#2B313A] rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#FCD535] pr-16"
              />
              <button
                type="button"
                onClick={handleMax}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-[#FCD535] hover:underline cursor-pointer"
              >
                MAX
              </button>
            </div>
          </div>

          <div className="p-3 bg-[#181A20] rounded-lg border border-[#2B313A] flex justify-between items-center text-xs">
            <span className="text-[#848E9C]">Network Fee</span>
            <span className="text-white font-medium">1 USDT</span>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-2.5 rounded-lg bg-[#FCD535] hover:bg-[#F0B90B] text-[#181A20] font-semibold text-xs transition cursor-pointer disabled:opacity-50"
          >
            {submitted ? 'Processing Withdrawal...' : 'Confirm Withdrawal'}
          </button>
        </form>
      </div>
    </div>
  );
};
