import React from 'react';

export const BinanceLogo: React.FC<{ className?: string; showText?: boolean }> = ({
  className = 'h-6',
  showText = true,
}) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Binance Yellow Diamond Icon */}
      <svg
        viewBox="0 0 126 126"
        className="h-6 w-6 text-[#FCD535] fill-current shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M63 0L37.2 25.8l13.7 13.7L63 27.4l12.1 12.1 13.7-13.7L63 0z" />
        <path d="M25.8 37.2L0 63l25.8 25.8 13.7-13.7L27.4 63l12.1-12.1-13.7-13.7z" />
        <path d="M100.2 37.2l-13.7 13.7L98.6 63l-12.1 12.1 13.7 13.7L126 63l-25.8-25.8z" />
        <path d="M63 43.8L43.8 63 63 82.2 82.2 63 63 43.8z" />
        <path d="M37.2 100.2L63 126l25.8-25.8-13.7-13.7L63 98.6l-12.1-12.1-13.7 13.7z" />
      </svg>
      {showText && (
        <span className="font-bold tracking-tight text-lg text-[#FCD535] uppercase font-sans">
          BINANCE
        </span>
      )}
    </div>
  );
};

export const BnbCoinIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
    <path
      d="M16 6.5L12.5 10L14.3 11.8L16 10.1L17.7 11.8L19.5 10L16 6.5ZM10 12.5L6.5 16L10 19.5L11.8 17.7L10.1 16L11.8 14.3L10 12.5ZM22 12.5L20.2 14.3L21.9 16L20.2 17.7L22 19.5L25.5 16L22 12.5ZM16 13.4L13.4 16L16 18.6L18.6 16L16 13.4ZM12.5 22L16 25.5L19.5 22L17.7 20.2L16 21.9L14.3 20.2L12.5 22Z"
      fill="white"
    />
  </svg>
);

export const UsdtCoinIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="16" cy="16" r="16" fill="#009393" />
    <path
      d="M17.6 14.4V11.8H22.7V9H9.3V11.8H14.4V14.4C10.4 14.6 7.4 15.6 7.4 16.8C7.4 18 10.4 19 14.4 19.2V25H17.6V19.2C21.6 19 24.6 18 24.6 16.8C24.6 15.6 21.6 14.6 17.6 14.4ZM16 18.2C12.9 18.2 10.3 17.5 10.3 16.8C10.3 16.1 12.9 15.4 16 15.4C19.1 15.4 21.7 16.1 21.7 16.8C21.7 17.5 19.1 18.2 16 18.2Z"
      fill="white"
    />
  </svg>
);

export const BtcCoinIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="16" cy="16" r="16" fill="#F7931A" />
    <path
      d="M21.5 13.8C21.9 12.2 20.7 11.2 19 10.6L19.6 8.2L18.1 7.8L17.5 10.2C17.1 10.1 16.7 10 16.3 9.9L16.9 7.5L15.4 7.1L14.8 9.5C14.5 9.4 14.2 9.4 13.9 9.3L13.9 9.2L11.8 8.7L11.4 10.3C11.4 10.3 12.5 10.6 12.5 10.6C13.1 10.8 13.2 11.1 13.2 11.4L12.5 14.2C12.5 14.2 12.6 14.2 12.7 14.3L12.5 14.2L11.5 18.2C11.4 18.5 11.2 18.7 10.7 18.6C10.7 18.6 9.6 18.3 9.6 18.3L8.9 20.1L10.9 20.6C11.3 20.7 11.6 20.8 12 20.9L11.4 23.3L12.9 23.7L13.5 21.3C13.9 21.4 14.3 21.5 14.7 21.6L14.1 24L15.6 24.4L16.2 22C18.8 22.5 20.8 22.3 21.5 19.9C22.1 18 21.4 16.9 20.1 16.3C21 15.8 21.7 14.9 21.5 13.8ZM18.9 18.8C18.4 20.8 14.9 19.7 13.7 19.4L14.7 15.4C15.9 15.7 19.4 16.7 18.9 18.8ZM19.3 13.4C18.9 15.2 16 14.3 15 14L15.9 10.4C16.9 10.6 19.8 11.5 19.3 13.4Z"
      fill="white"
    />
  </svg>
);

export const EthCoinIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="16" cy="16" r="16" fill="#627EEA" />
    <path d="M16 4L9 16.5L16 20.5L23 16.5L16 4Z" fill="white" fillOpacity="0.8" />
    <path d="M16 4V20.5L23 16.5L16 4Z" fill="white" />
    <path d="M16 21.8L9 17.8L16 28L23 17.8L16 21.8Z" fill="white" fillOpacity="0.8" />
    <path d="M16 21.8V28L23 17.8L16 21.8Z" fill="white" />
  </svg>
);

export const SolCoinIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <circle cx="16" cy="16" r="16" fill="#141414" />
    <path
      d="M8.5 21.8L11.3 19H23.5L20.7 21.8H8.5ZM8.5 10.2L11.3 7.4H23.5L20.7 10.2H8.5ZM20.7 16L17.9 13.2H8.5L11.3 16H20.7Z"
      fill="url(#sol_grad)"
    />
    <defs>
      <linearGradient id="sol_grad" x1="8.5" y1="7.4" x2="23.5" y2="21.8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
    </defs>
  </svg>
);
