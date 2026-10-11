import React from 'react';
import {
  LayoutDashboard,
  Wallet,
  FileText,
  Gift,
  UserPlus,
  User,
  Users,
  Settings,
  ChevronDown,
  X,
} from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  mobileOpen,
  onCloseMobile,
}) => {
  const sidebarItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: LayoutDashboard, hasDropdown: false },
    { id: 'Assets', label: 'Assets', icon: Wallet, hasDropdown: true },
    { id: 'Orders', label: 'Orders', icon: FileText, hasDropdown: true },
    { id: 'Rewards Hub', label: 'Rewards Hub', icon: Gift, hasDropdown: false },
    { id: 'Referral', label: 'Referral', icon: UserPlus, hasDropdown: false },
    { id: 'Account', label: 'Account', icon: User, hasDropdown: true },
    { id: 'Sub Accounts', label: 'Sub Accounts', icon: Users, hasDropdown: false },
    { id: 'Settings', label: 'Settings', icon: Settings, hasDropdown: false },
  ];

  const content = (
    <div className="w-56 shrink-0 flex flex-col py-4 px-3 select-none">
      <div className="space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                onCloseMobile();
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px] font-medium transition-colors cursor-pointer group ${
                isActive
                  ? 'bg-[#2B313A] text-white'
                  : 'text-[#848E9C] hover:text-[#EAECEF] hover:bg-[#2B313A]/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  size={18}
                  className={`shrink-0 transition-colors ${
                    isActive ? 'text-white' : 'text-[#848E9C] group-hover:text-[#EAECEF]'
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </div>
              {item.hasDropdown && (
                <ChevronDown
                  size={14}
                  className={`shrink-0 text-[#848E9C] transition-transform ${
                    isActive ? 'text-white' : ''
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-56 shrink-0 min-h-[calc(100vh-64px)] border-r border-[#2B313A]/60 bg-[#181A20]">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="fixed top-0 bottom-0 left-0 w-64 bg-[#181A20] border-r border-[#2B313A] shadow-2xl z-50 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#2B313A]">
              <span className="font-semibold text-sm text-white">Menu</span>
              <button
                onClick={onCloseMobile}
                className="p-1 text-[#848E9C] hover:text-white rounded"
              >
                <X size={18} />
              </button>
            </div>
            <div className="overflow-y-auto flex-1">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};
