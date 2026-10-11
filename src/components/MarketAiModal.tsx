import React from 'react';
import { X, Sparkles, TrendingUp, Compass, Flame, ShieldAlert } from 'lucide-react';

interface MarketAiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarketAiModal: React.FC<MarketAiModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-none">
      <div className="w-full max-w-lg bg-[#1E2329] border border-[#2B313A] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#2B313A]">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#8C8DFE]/20 text-[#8C8DFE]">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">How's the market today?</h3>
              <p className="text-[11px] text-[#848E9C]">Real-time AI Market Sentiment & Intelligence</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#848E9C] hover:text-white rounded-lg hover:bg-[#2B313A] transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs">
          {/* Key Indicators */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-3 bg-[#181A20] rounded-xl border border-[#2B313A]">
              <span className="text-[#848E9C] text-[11px]">Fear & Greed</span>
              <p className="text-sm font-bold text-[#0ECB81] mt-0.5">76 / 100</p>
              <span className="text-[10px] text-[#0ECB81]">Greed</span>
            </div>

            <div className="p-3 bg-[#181A20] rounded-xl border border-[#2B313A]">
              <span className="text-[#848E9C] text-[11px]">BTC Dominance</span>
              <p className="text-sm font-bold text-white mt-0.5">58.4%</p>
              <span className="text-[10px] text-[#0ECB81]">+0.32% 24h</span>
            </div>

            <div className="p-3 bg-[#181A20] rounded-xl border border-[#2B313A]">
              <span className="text-[#848E9C] text-[11px]">Total Market Cap</span>
              <p className="text-sm font-bold text-white mt-0.5">$3.28T</p>
              <span className="text-[10px] text-[#0ECB81]">+2.15%</span>
            </div>
          </div>

          {/* AI Executive Briefing */}
          <div className="p-3.5 bg-[#181A20] rounded-xl border border-[#2B313A] space-y-2">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <TrendingUp size={14} className="text-[#FCD535]" />
              <span>Executive Market Summary</span>
            </div>
            <p className="text-[#848E9C] leading-relaxed">
              Crypto markets remain strongly bullish today. Bitcoin is consolidating firmly above $94,000 with record spot ETF inflows. Layer 1 ecosystems including Solana and BNB Chain are experiencing high DEX volumes and user activity.
            </p>
          </div>

          {/* Top Trends */}
          <div className="space-y-2">
            <span className="text-[#848E9C] font-medium">Trending Hot Themes</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-[#2B313A] text-white text-[11px] font-medium flex items-center gap-1">
                <Flame size={12} className="text-orange-400" />
                Layer 1 Runners
              </span>
              <span className="px-2.5 py-1 rounded bg-[#2B313A] text-white text-[11px] font-medium flex items-center gap-1">
                <Sparkles size={12} className="text-purple-400" />
                AI Agents & Infrastructure
              </span>
              <span className="px-2.5 py-1 rounded bg-[#2B313A] text-white text-[11px] font-medium flex items-center gap-1">
                <Compass size={12} className="text-blue-400" />
                RWA & Institutional Yield
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#181A20] border-t border-[#2B313A] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#FCD535] hover:bg-[#F0B90B] text-[#181A20] font-semibold rounded-lg text-xs cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
