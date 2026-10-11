import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { UserProfile } from './components/UserProfile';
import { PortfolioCard } from './components/PortfolioCard';
import { MarketsTable } from './components/MarketsTable';
import { DepositModal } from './components/DepositModal';
import { WithdrawModal } from './components/WithdrawModal';
import { MarketAiModal } from './components/MarketAiModal';
import { SearchModal } from './components/SearchModal';
import { LinkSocialModal } from './components/LinkSocialModal';
import { QuickTradeModal } from './components/QuickTradeModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Dashboard');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Modals state
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [isMarketAiOpen, setIsMarketAiOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLinkSocialOpen, setIsLinkSocialOpen] = useState(false);
  const [tradingCoin, setTradingCoin] = useState<string | null>(null);

  // User USDT Balance
  const totalUsdtBalance = 1188524;

  return (
    <div className="min-h-screen bg-[#181A20] text-[#EAECEF] flex flex-col font-sans">
      {/* Top Binance Header Navbar */}
      <Navbar
        onOpenDeposit={() => setIsDepositOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebarMobile={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      />

      {/* Main Layout: Left Sidebar + Main Content Area */}
      <div className="flex-1 flex max-w-[1920px] w-full mx-auto">
        {/* Left Sidebar */}
        <Sidebar
          currentTab={currentTab}
          onSelectTab={setCurrentTab}
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        {/* Main Dashboard Content */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-10 py-6 sm:py-8 space-y-6 overflow-x-hidden">
          {currentTab === 'Dashboard' ? (
            <div className="max-w-[1240px] space-y-6">
              {/* User Profile Header (ashikahsan4640, UID, VIP Level, Followers) */}
              <UserProfile onLinkSocial={() => setIsLinkSocialOpen(true)} />

              {/* Est. Total Value Card (1,188,524 USDT) */}
              <PortfolioCard
                onOpenDeposit={() => setIsDepositOpen(true)}
                onOpenWithdraw={() => setIsWithdrawOpen(true)}
                onOpenCashIn={() => setIsDepositOpen(true)}
                onOpenMarketAi={() => setIsMarketAiOpen(true)}
              />

              {/* Markets Table (Holding, Hot, New Listing, etc.) */}
              <MarketsTable onTradeCoin={(sym) => setTradingCoin(sym)} />
            </div>
          ) : (
            /* Fallback sleek view when clicking other sidebar tabs */
            <div className="max-w-[1240px] bg-[#1E2329]/50 border border-[#2B313A] rounded-2xl p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">{currentTab}</h2>
                <button
                  onClick={() => setCurrentTab('Dashboard')}
                  className="px-3.5 py-1.5 rounded-lg bg-[#2B313A] hover:bg-[#363D47] text-xs font-medium text-white transition"
                >
                  Back to Dashboard
                </button>
              </div>
              <p className="text-sm text-[#848E9C]">
                Explore and manage your {currentTab.toLowerCase()} overview on Binance.
              </p>
              <div className="p-6 bg-[#181A20] rounded-xl border border-[#2B313A] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#848E9C]">Estimated Valuation</span>
                  <p className="text-2xl font-bold text-white mt-1">1,188,524 USDT</p>
                </div>
                <button
                  onClick={() => setIsDepositOpen(true)}
                  className="bg-[#FCD535] hover:bg-[#F0B90B] text-[#181A20] font-semibold text-xs px-4 py-2 rounded-lg transition"
                >
                  Deposit
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Interactive Modals */}
      <DepositModal
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
      />

      <WithdrawModal
        isOpen={isWithdrawOpen}
        onClose={() => setIsWithdrawOpen(false)}
        availableUsdt={totalUsdtBalance}
      />

      <MarketAiModal
        isOpen={isMarketAiOpen}
        onClose={() => setIsMarketAiOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCoin={(coin) => setTradingCoin(coin)}
      />

      <LinkSocialModal
        isOpen={isLinkSocialOpen}
        onClose={() => setIsLinkSocialOpen(false)}
      />

      <QuickTradeModal
        coinSymbol={tradingCoin}
        onClose={() => setTradingCoin(null)}
        userUsdtBalance={totalUsdtBalance}
      />
    </div>
  );
}
