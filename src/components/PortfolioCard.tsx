import React, { useState } from 'react';
import { Eye, EyeOff, Info, Sparkles, ChevronDown } from 'lucide-react';

interface PortfolioCardProps {
  onOpenDeposit: () => void;
  onOpenWithdraw: () => void;
  onOpenCashIn: () => void;
  onOpenMarketAi: () => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  onOpenDeposit,
  onOpenWithdraw,
  onOpenCashIn,
  onOpenMarketAi,
}) => {
  const [showBalance, setShowBalance] = useState(true);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USDT');

  // The requested value: 1188524 USDT and 14,50,00,000 Taka
  const rawValue = '1188524';
  const formattedValue = '1,188,524';
  const approxFiat = '≈ ৳14,50,00,000';

  return (
    <div className="relative w-full bg-[#1E2329]/50 border border-[#2B313A] rounded-2xl p-6 sm:p-7 select-none overflow-hidden transition-all">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        {/* Left: Value, Fiat & PnL */}
        <div className="space-y-2">
          {/* Title & Hide Toggle */}
          <div className="flex items-center gap-2 text-[#848E9C] text-sm font-normal">
            <span>Est. Total Value</span>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="text-[#848E9C] hover:text-[#EAECEF] transition-colors p-0.5 cursor-pointer"
              title={showBalance ? 'Hide balance' : 'Show balance'}
            >
              {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>

          {/* Primary Amount: 1188524 USDT */}
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#EAECEF] tracking-tight">
              {showBalance ? formattedValue : '******'}
            </span>

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 text-sm sm:text-base font-semibold text-[#848E9C] hover:text-[#EAECEF] transition-colors cursor-pointer"
              >
                <span>{selectedCurrency}</span>
                <ChevronDown size={14} className="text-[#848E9C]" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute left-0 mt-2 w-28 bg-[#1E2329] border border-[#2B313A] rounded-lg shadow-xl py-1 z-30">
                  {['USDT', 'USD', 'BTC', 'EUR'].map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setSelectedCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-[#EAECEF] hover:bg-[#2B313A] hover:text-[#FCD535]"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Approximate Fiat */}
          <p className="text-xs sm:text-sm text-[#848E9C]">
            {showBalance ? approxFiat : '≈ ৳******'}
          </p>

          {/* Today's PnL */}
          <div className="flex items-center gap-1.5 text-xs pt-1">
            <span className="text-[#848E9C]">Today's PnL</span>
            <div className="relative group cursor-pointer">
              <Info size={13} className="text-[#848E9C]" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-[#181A20] border border-[#2B313A] text-[11px] text-[#848E9C] p-2 rounded w-48 shadow-lg pointer-events-none z-20">
                Calculated based on UTC+0 00:00 balance and market price movements.
              </div>
            </div>
            <span className="text-[#F6465D] font-medium ml-1">
              {showBalance ? '- $0.00(0.12%)' : '******'}
            </span>
          </div>
        </div>

        {/* Right: Action Buttons & Sparkline Chart */}
        <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* AI Assistant Button: "How's the market today?" */}
            <button
              onClick={onOpenMarketAi}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#3d4251] bg-[#1E2329] hover:bg-[#2B313A] hover:border-[#4e5567] text-xs sm:text-[13px] text-[#EAECEF] transition-all cursor-pointer shadow-sm group"
            >
              <Sparkles size={14} className="text-[#8C8DFE] group-hover:scale-110 transition-transform" />
              <span className="font-medium">How's the market today?</span>
            </button>

            {/* Deposit */}
            <button
              onClick={onOpenDeposit}
              className="px-4 py-1.5 rounded-lg bg-[#2B313A] hover:bg-[#363D47] text-xs sm:text-[13px] font-medium text-[#EAECEF] transition-colors cursor-pointer"
            >
              Deposit
            </button>

            {/* Withdraw */}
            <button
              onClick={onOpenWithdraw}
              className="px-4 py-1.5 rounded-lg bg-[#2B313A] hover:bg-[#363D47] text-xs sm:text-[13px] font-medium text-[#EAECEF] transition-colors cursor-pointer"
            >
              Withdraw
            </button>

            {/* Cash In */}
            <button
              onClick={onOpenCashIn}
              className="px-4 py-1.5 rounded-lg bg-[#2B313A] hover:bg-[#363D47] text-xs sm:text-[13px] font-medium text-[#EAECEF] transition-colors cursor-pointer"
            >
              Cash In
            </button>
          </div>

          {/* Sparkline Trend Chart (matching the exact yellow curve in the screenshot) */}
          <div className="w-full sm:w-64 h-14 flex items-end justify-end mt-2 lg:mt-0">
            <svg
              className="w-full max-w-[260px] h-12 overflow-visible"
              viewBox="0 0 240 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Baseline subtle reference */}
              <path
                d="M 0 45 L 180 45 L 195 10 L 205 45 L 240 45"
                stroke="#FCD535"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Soft glow filter underneath */}
              <path
                d="M 0 45 L 180 45 L 195 10 L 205 45 L 240 45"
                stroke="#FCD535"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
