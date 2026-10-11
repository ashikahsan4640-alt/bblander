import React, { useState } from 'react';
import { ChevronRight, ArrowUpDown, Info } from 'lucide-react';
import { BnbCoinIcon, UsdtCoinIcon, BtcCoinIcon, EthCoinIcon, SolCoinIcon } from './Icons';

interface MarketsTableProps {
  onTradeCoin: (symbol: string) => void;
}

export const MarketsTable: React.FC<MarketsTableProps> = ({ onTradeCoin }) => {
  const [activeTab, setActiveTab] = useState<'Holding' | 'Hot' | 'New Listing' | 'Favorite' | 'Top Gainers' | '24h Volume'>('Holding');
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const tabs: Array<'Holding' | 'Hot' | 'New Listing' | 'Favorite' | 'Top Gainers' | '24h Volume'> = [
    'Holding',
    'Hot',
    'New Listing',
    'Favorite',
    'Top Gainers',
    '24h Volume',
  ];

  // Holding data matching the 1,188,524 USDT portfolio!
  const holdingAssets = [
    {
      symbol: 'BNB',
      name: 'BNB',
      icon: <BnbCoinIcon size={28} />,
      amount: '158.42000000',
      fiatAmount: '৳1,44,57,000',
      assetPrice: '$748.14',
      costPrice: '$0.00',
      change: -0.24,
      volume: '$1.42B',
    },
    {
      symbol: 'USDT',
      name: 'TetherUS',
      icon: <UsdtCoinIcon size={28} />,
      amount: '1,070,024.00',
      fiatAmount: '৳13,05,43,000',
      assetPrice: '$0.99895',
      costPrice: '$0.00',
      change: -0.01,
      volume: '$48.6B',
    },
  ];

  const marketCoins = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: <BtcCoinIcon size={28} />,
      amount: '--',
      fiatAmount: '--',
      assetPrice: '$94,235.10',
      costPrice: '$0.00',
      change: +3.45,
      volume: '$38.2B',
      isHot: true,
      isTopGainer: true,
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      icon: <EthCoinIcon size={28} />,
      amount: '--',
      fiatAmount: '--',
      assetPrice: '$3,412.50',
      costPrice: '$0.00',
      change: +2.18,
      volume: '$22.8B',
      isHot: true,
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      icon: <SolCoinIcon size={28} />,
      amount: '--',
      fiatAmount: '--',
      assetPrice: '$218.40',
      costPrice: '$0.00',
      change: +6.82,
      volume: '$9.4B',
      isHot: true,
      isTopGainer: true,
    },
    {
      symbol: 'BNB',
      name: 'BNB',
      icon: <BnbCoinIcon size={28} />,
      amount: '--',
      fiatAmount: '--',
      assetPrice: '$748.14',
      costPrice: '$0.00',
      change: -0.24,
      volume: '$1.42B',
      isHot: true,
    },
  ];

  const currentDisplayList = activeTab === 'Holding' ? holdingAssets : marketCoins;

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="w-full bg-[#1E2329]/50 border border-[#2B313A] rounded-2xl p-5 sm:p-6 select-none mt-6">
      {/* Header: Markets title & More > */}
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-lg font-bold text-white tracking-tight">Markets</h2>
        <a
          href="#"
          className="flex items-center gap-0.5 text-xs text-[#848E9C] hover:text-[#FCD535] transition-colors"
        >
          <span>More</span>
          <ChevronRight size={14} />
        </a>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 sm:gap-8 border-b border-[#2B313A]/80 overflow-x-auto no-scrollbar text-[13px] sm:text-sm font-medium">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 whitespace-nowrap transition-colors cursor-pointer ${
                isActive ? 'text-white font-semibold' : 'text-[#848E9C] hover:text-[#EAECEF]'
              }`}
            >
              <span>{tab}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FCD535] rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-2">
        <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
          <thead>
            <tr className="text-[#848E9C] border-b border-transparent">
              {/* Coin */}
              <th className="py-3.5 font-normal">
                <button
                  onClick={() => handleSort('coin')}
                  className="flex items-center gap-1 hover:text-[#EAECEF] cursor-pointer"
                >
                  <span>Coin</span>
                  <ArrowUpDown size={11} />
                </button>
              </th>

              {/* Amount */}
              <th className="py-3.5 font-normal text-right">
                <button
                  onClick={() => handleSort('amount')}
                  className="flex items-center gap-1 justify-end ml-auto hover:text-[#EAECEF] cursor-pointer"
                >
                  <span>Amount</span>
                  <ArrowUpDown size={11} />
                </button>
              </th>

              {/* Asset Price / Cost Price */}
              <th className="py-3.5 font-normal text-right">
                <div className="flex items-center justify-end gap-1">
                  <span>Asset Price / Cost Price</span>
                  <Info size={11} className="text-[#848E9C]" />
                </div>
              </th>

              {/* Change */}
              <th className="py-3.5 font-normal text-right">
                <button
                  onClick={() => handleSort('change')}
                  className="flex items-center gap-1 justify-end ml-auto hover:text-[#EAECEF] cursor-pointer"
                >
                  <span>Change</span>
                  <ArrowUpDown size={11} />
                </button>
              </th>

              {/* Trade */}
              <th className="py-3.5 font-normal text-right pr-2">
                <span>Trade</span>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#2B313A]/30">
            {currentDisplayList.map((asset) => {
              const isNegative = asset.change < 0;
              return (
                <tr
                  key={asset.symbol}
                  className="hover:bg-[#2B313A]/25 transition-colors group"
                >
                  {/* Coin icon & symbol */}
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      {asset.icon}
                      <div>
                        <div className="font-semibold text-white group-hover:text-[#FCD535] transition-colors">
                          {asset.symbol}
                        </div>
                        <div className="text-[11px] text-[#848E9C]">{asset.name}</div>
                      </div>
                    </div>
                  </td>

                  {/* Amount & fiat */}
                  <td className="py-4 text-right">
                    <div className="font-medium text-[#EAECEF]">{asset.amount}</div>
                    <div className="text-[11px] text-[#848E9C]">{asset.fiatAmount}</div>
                  </td>

                  {/* Asset price / cost price */}
                  <td className="py-4 text-right">
                    <div className="font-medium text-[#EAECEF]">{asset.assetPrice}</div>
                    <div className="text-[11px] text-[#848E9C]">{asset.costPrice}</div>
                  </td>

                  {/* 24h Change */}
                  <td className="py-4 text-right">
                    <span
                      className={`font-medium ${
                        isNegative ? 'text-[#F6465D]' : 'text-[#0ECB81]'
                      }`}
                    >
                      {isNegative ? '' : '+'}
                      {asset.change.toFixed(2)}%
                    </span>
                  </td>

                  {/* Trade Action */}
                  <td className="py-4 text-right pr-2">
                    <button
                      onClick={() => onTradeCoin(asset.symbol)}
                      className="text-white hover:text-[#FCD535] underline underline-offset-4 decoration-transparent hover:decoration-[#FCD535] font-medium transition-colors cursor-pointer text-xs"
                    >
                      Trade
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
