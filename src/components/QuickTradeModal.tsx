import React, { useState } from 'react';
import { X, ArrowRightLeft, Check } from 'lucide-react';

interface QuickTradeModalProps {
  coinSymbol: string | null;
  onClose: () => void;
  userUsdtBalance: number;
}

export const QuickTradeModal: React.FC<QuickTradeModalProps> = ({
  coinSymbol,
  onClose,
  userUsdtBalance,
}) => {
  const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');
  const [amount, setAmount] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!coinSymbol) return null;

  const getPrice = (sym: string) => {
    switch (sym) {
      case 'BNB':
        return 748.14;
      case 'BTC':
        return 94235.10;
      case 'ETH':
        return 3412.50;
      case 'SOL':
        return 218.40;
      default:
        return 1.0;
    }
  };

  const currentPrice = getPrice(coinSymbol);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-none">
      <div className="w-full max-w-md bg-[#1E2329] border border-[#2B313A] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between p-5 border-b border-[#2B313A]">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-white">Spot Trade {coinSymbol}/USDT</h3>
            <span className="text-xs text-[#0ECB81] font-semibold">${currentPrice.toLocaleString()}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#848E9C] hover:text-white rounded-lg hover:bg-[#2B313A] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Buy / Sell Tabs */}
        <div className="grid grid-cols-2 p-2 bg-[#181A20] m-5 mb-0 rounded-xl">
          <button
            type="button"
            onClick={() => setSide('BUY')}
            className={`py-2 rounded-lg text-xs font-semibold transition ${
              side === 'BUY'
                ? 'bg-[#0ECB81] text-white'
                : 'text-[#848E9C] hover:text-white'
            }`}
          >
            Buy {coinSymbol}
          </button>
          <button
            type="button"
            onClick={() => setSide('SELL')}
            className={`py-2 rounded-lg text-xs font-semibold transition ${
              side === 'SELL'
                ? 'bg-[#F6465D] text-white'
                : 'text-[#848E9C] hover:text-white'
            }`}
          >
            Sell {coinSymbol}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[#848E9C] font-medium">Order Price</label>
              <span className="text-[#848E9C]">Market</span>
            </div>
            <div className="bg-[#181A20] border border-[#2B313A] rounded-lg px-3 py-2 text-white font-mono">
              ${currentPrice} USDT
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[#848E9C] font-medium">Amount</label>
              <span className="text-[#848E9C]">
                Available:{' '}
                <span className="text-[#FCD535] font-semibold">
                  {userUsdtBalance.toLocaleString()} USDT
                </span>
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder={`Amount in ${coinSymbol}`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full bg-[#181A20] border border-[#2B313A] rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#FCD535]"
              />
            </div>
          </div>

          <div className="flex gap-2">
            {[25, 50, 75, 100].map((pct) => (
              <button
                type="button"
                key={pct}
                onClick={() => {
                  const calculated = (userUsdtBalance * (pct / 100)) / currentPrice;
                  setAmount(calculated.toFixed(4));
                }}
                className="flex-1 py-1 rounded bg-[#2B313A] hover:bg-[#363D47] text-[11px] text-[#848E9C] hover:text-white"
              >
                {pct}%
              </button>
            ))}
          </div>

          <button
            type="submit"
            className={`w-full py-2.5 rounded-lg text-white font-semibold text-xs transition cursor-pointer ${
              side === 'BUY'
                ? 'bg-[#0ECB81] hover:bg-[#0ECB81]/90'
                : 'bg-[#F6465D] hover:bg-[#F6465D]/90'
            }`}
          >
            {orderPlaced
              ? 'Order Filled Successfully!'
              : `${side === 'BUY' ? 'Buy' : 'Sell'} ${coinSymbol}`}
          </button>
        </form>
      </div>
    </div>
  );
};
