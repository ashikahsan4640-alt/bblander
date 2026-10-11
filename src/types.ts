export interface CryptoAsset {
  symbol: string;
  name: string;
  iconBg: string;
  iconSymbol: string;
  amount: string;
  fiatValue: string;
  price: string;
  costPrice: string;
  change24h: number; // percentage
  volume24h?: string;
  isHot?: boolean;
  isNew?: boolean;
  isFavorite?: boolean;
}

export interface UserProfileData {
  username: string;
  uid: string;
  avatarUrl: string;
  vipLevel: string;
  following: number;
  followers: number;
  estTotalValueUsdt: number;
  estTotalValueFormatted: string;
  approxUsd: string;
  todaysPnl: string;
  todaysPnlPercent: string;
  todaysPnlIsPositive: boolean;
}
