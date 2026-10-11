import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { BnbCoinIcon, UsdtCoinIcon, BtcCoinIcon, EthCoinIcon, SolCoinIcon } from './Icons';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCoin: (coin: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCoin,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const coins = [
    { symbol: 'USDT', name: 'TetherUS', icon: <UsdtCoinIcon size={24} />, price: '$1.00', change: '0.00%' },
    { symbol: 'BNB', name: 'BNB', icon: <BnbCoinIcon size={24} />, price: '$748.14', change: '-0.24%' },
    { symbol: 'BTC', name: 'Bitcoin', icon: <BtcCoinIcon size={24} />, price: '$94,235.10', change: '+3.45%' },
    { symbol: 'ETH', name: 'Ethereum', icon: <EthCoinIcon size={24} />, price: '$3,412.50', change: '+2.18%' },
    { symbol: 'SOL', name: 'Solana', icon: <SolCoinIcon size={24} />, price: '$218.40', change: '+6.82%' },
  ];

  const filtered = coins.filter(
    (c) =>
      c.symbol.toLowerCase().includes(query.toLowerCase()) ||
      c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/75 backdrop-blur-xs select-none">
      <div className="w-full max-w-lg bg-[#1E2329] border border-[#2B313A] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-[#2B313A]">
          <Search size={18} className="text-[#848E9C] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search coin, pair, or contract..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white placeholder-[#848E9C] outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#848E9C] hover:text-white rounded hover:bg-[#2B313A]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#848E9C]">
              No coins found matching "{query}"
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((coin) => (
                <button
                  key={coin.symbol}
                  onClick={() => {
                    onSelectCoin(coin.symbol);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#2B313A] transition text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {coin.icon}
                    <div>
                      <div className="font-semibold text-white text-xs">{coin.symbol}</div>
                      <div className="text-[11px] text-[#848E9C]">{coin.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-white">{coin.price}</div>
                    <div
                      className={`text-[11px] font-medium ${
                        coin.change.startsWith('+') ? 'text-[#0ECB81]' : 'text-[#F6465D]'
                      }`}
                    >
                      {coin.change}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
