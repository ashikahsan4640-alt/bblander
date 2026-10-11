import React, { useState } from 'react';
import {
  Search,
  Wallet,
  MessageSquare,
  Download,
  Globe,
  Moon,
  ChevronDown,
  User,
  ArrowDownToLine,
  Menu,
  X,
  Check,
} from 'lucide-react';
import { BinanceLogo } from './Icons';

interface NavbarProps {
  onOpenDeposit: () => void;
  onOpenSearch: () => void;
  onToggleSidebarMobile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDeposit,
  onOpenSearch,
  onToggleSidebarMobile,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navLinks = [
    { name: 'Buy Crypto', hasDropdown: false },
    { name: 'Markets', hasDropdown: false },
    { name: 'Trade', hasDropdown: true },
    { name: 'Futures', hasDropdown: true },
    { name: 'Earn', hasDropdown: true },
    { name: 'Square', hasDropdown: true },
    { name: 'Institutional', hasDropdown: true },
    { name: 'AI', hasDropdown: true },
    { name: 'More', hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#181A20] border-b border-[#2B313A] select-none text-[14px]">
      <div className="flex items-center justify-between px-4 lg:px-6 h-16">
        {/* Left Section: Mobile Menu + Binance Logo + Nav links */}
        <div className="flex items-center gap-6 lg:gap-8">
          <button
            onClick={onToggleSidebarMobile}
            className="lg:hidden p-1.5 text-[#848E9C] hover:text-white rounded-md hover:bg-[#2B313A]"
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={20} />
          </button>

          <a href="#" className="flex items-center">
            <BinanceLogo className="h-6" showText={true} />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-5 text-[#EAECEF] font-normal">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 py-4 text-[#EAECEF] hover:text-[#FCD535] transition-colors whitespace-nowrap cursor-pointer">
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown size={12} className="text-[#848E9C] group-hover:text-[#FCD535]" />
                  )}
                </button>

                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-48 bg-[#1E2329] border border-[#2B313A] rounded-lg shadow-2xl py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2.5 text-xs text-[#EAECEF] hover:bg-[#2B313A] hover:text-[#FCD535] transition-colors"
                    >
                      Spot Trading
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2.5 text-xs text-[#EAECEF] hover:bg-[#2B313A] hover:text-[#FCD535] transition-colors"
                    >
                      Margin Trading
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2.5 text-xs text-[#EAECEF] hover:bg-[#2B313A] hover:text-[#FCD535] transition-colors"
                    >
                      Convert & OTC
                    </a>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Section: Action tools, Deposit button, Profile */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#848E9C] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-[#2B313A]/60"
            title="Search markets"
          >
            <Search size={18} />
          </button>

          {/* Yellow Deposit CTA Button */}
          <button
            onClick={onOpenDeposit}
            className="flex items-center gap-1.5 bg-[#FCD535] hover:bg-[#F0B90B] text-[#181A20] font-semibold text-xs sm:text-[13px] px-3.5 py-1.5 sm:py-2 rounded-md transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <ArrowDownToLine size={15} strokeWidth={2.5} />
            <span>Deposit</span>
          </button>

          {/* User Profile Icon */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="p-2 text-[#848E9C] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-[#2B313A]/60"
              title="Account"
            >
              <User size={18} />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-[#1E2329] border border-[#2B313A] rounded-xl shadow-2xl py-2 z-50">
                <div className="px-4 py-3 border-b border-[#2B313A]">
                  <p className="text-xs text-[#848E9C]">Signed in as</p>
                  <p className="text-sm font-semibold text-white truncate">ashikahsan4640</p>
                  <span className="inline-block mt-1 text-[11px] text-[#FCD535] bg-[#FCD535]/10 px-2 py-0.5 rounded font-medium">
                    Regular User (VIP 0)
                  </span>
                </div>
                <div className="py-1 text-xs">
                  <a href="#" className="block px-4 py-2 hover:bg-[#2B313A] text-[#EAECEF]">Security</a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#2B313A] text-[#EAECEF]">Identification</a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#2B313A] text-[#EAECEF]">API Management</a>
                </div>
              </div>
            )}
          </div>

          {/* Wallet Icon */}
          <button
            className="p-2 text-[#848E9C] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-[#2B313A]/60 hidden sm:flex"
            title="Wallet"
          >
            <Wallet size={18} />
          </button>

          {/* Notifications/Chat Message with Yellow dot */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-[#848E9C] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-[#2B313A]/60 relative"
              title="Notifications"
            >
              <MessageSquare size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FCD535] rounded-full ring-2 ring-[#181A20]" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-[#1E2329] border border-[#2B313A] rounded-xl shadow-2xl p-3 z-50">
                <div className="flex items-center justify-between pb-2 border-b border-[#2B313A]">
                  <span className="text-xs font-semibold text-white">Notifications</span>
                  <span className="text-[11px] text-[#FCD535] cursor-pointer hover:underline">Mark all read</span>
                </div>
                <div className="py-2 space-y-2 text-xs">
                  <div className="p-2 bg-[#2B313A]/40 rounded hover:bg-[#2B313A] transition">
                    <p className="text-white font-medium">Account Security Update</p>
                    <p className="text-[#848E9C] text-[11px] mt-0.5">2FA is enabled and protected.</p>
                  </div>
                  <div className="p-2 bg-[#2B313A]/40 rounded hover:bg-[#2B313A] transition">
                    <p className="text-white font-medium">Deposit Successful</p>
                    <p className="text-[#848E9C] text-[11px] mt-0.5">USDT deposit processed.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Download Icon */}
          <button
            className="p-2 text-[#848E9C] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-[#2B313A]/60 hidden sm:flex"
            title="Download Binance App"
          >
            <Download size={18} />
          </button>

          {/* Globe/Language Icon */}
          <button
            className="p-2 text-[#848E9C] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-[#2B313A]/60 hidden md:flex"
            title="English / USD"
          >
            <Globe size={18} />
          </button>

          {/* Theme Toggle (Moon) */}
          <button
            className="p-2 text-[#848E9C] hover:text-white transition-colors cursor-pointer rounded-full hover:bg-[#2B313A]/60 hidden md:flex"
            title="Dark Theme"
          >
            <Moon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};
