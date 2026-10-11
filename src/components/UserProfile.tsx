import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, ChevronRight, Camera, Upload } from 'lucide-react';
import defaultAvatar from '../assets/avatar.jpg';

interface UserProfileProps {
  onLinkSocial: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ onLinkSocial }) => {
  const [copied, setCopied] = useState(false);
  const [avatar, setAvatar] = useState<string>(defaultAvatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('user_custom_avatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  const copyUid = () => {
    navigator.clipboard?.writeText('442078808');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const resultStr = event.target.result as string;
          setAvatar(resultStr);
          localStorage.setItem('user_custom_avatar', resultStr);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="flex flex-wrap items-center justify-between gap-6 py-2 select-none">
      {/* Hidden native file input for 100% exact original photo upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Left: User Avatar + Name + Link Social Account */}
      <div className="flex items-center gap-4">
        {/* User circular avatar with 1-click photo upload trigger */}
        <div
          onClick={triggerUpload}
          className="relative group cursor-pointer"
          title="Click to set your exact photo (WhatsApp Image)"
        >
          <img
            src={avatar}
            alt="ashikahsan4640"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#2B313A] group-hover:border-[#FCD535] transition-all shadow-md"
          />

          {/* Camera overlay on hover */}
          <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <Camera size={18} className="text-[#FCD535]" />
          </div>

          {/* Small camera badge at bottom right */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2B313A] border border-[#181A20] rounded-full flex items-center justify-center group-hover:bg-[#FCD535] transition-colors">
            <Camera size={11} className="text-[#848E9C] group-hover:text-black" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold text-white tracking-normal font-sans">
              ashikahsan4640
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onLinkSocial}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2B313A]/90 hover:bg-[#2B313A] text-xs font-normal text-[#EAECEF] hover:text-[#FCD535] transition-colors cursor-pointer"
            >
              <span className="w-4 h-4 rounded-full bg-[#181A20] flex items-center justify-center text-[10px] text-[#848E9C]">
                @
              </span>
              <span>Link Social Account</span>
              <ChevronRight size={12} className="text-[#848E9C]" />
            </button>

            {/* Quick Change Photo Button */}
            <button
              onClick={triggerUpload}
              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#2B313A]/60 hover:bg-[#2B313A] text-[11px] text-[#848E9C] hover:text-[#FCD535] transition cursor-pointer"
              title="Upload your WhatsApp photo directly"
            >
              <Upload size={11} />
              <span>ছবি আপলোড</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right / Middle stats: UID, VIP Level, Following, Followers */}
      <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm">
        {/* UID */}
        <div className="space-y-0.5">
          <p className="text-xs text-[#848E9C]">UID</p>
          <div className="flex items-center gap-1.5">
            <span className="font-medium text-[#EAECEF]">442078808</span>
            <button
              onClick={copyUid}
              className="p-1 text-[#848E9C] hover:text-[#FCD535] transition-colors cursor-pointer"
              title="Copy UID"
            >
              {copied ? (
                <Check size={13} className="text-[#0ECB81]" />
              ) : (
                <Copy size={13} />
              )}
            </button>
          </div>
        </div>

        {/* VIP Level */}
        <div className="space-y-0.5">
          <p className="text-xs text-[#848E9C]">VIP Level</p>
          <button className="flex items-center gap-0.5 font-medium text-[#EAECEF] hover:text-[#FCD535] transition-colors cursor-pointer">
            <span>Regular User</span>
            <ChevronRight size={14} className="text-[#848E9C]" />
          </button>
        </div>

        {/* Following */}
        <div className="space-y-0.5">
          <p className="text-xs text-[#848E9C]">Following</p>
          <button className="flex items-center gap-0.5 font-medium text-[#EAECEF] hover:text-[#FCD535] transition-colors cursor-pointer">
            <span>0</span>
            <ChevronRight size={14} className="text-[#848E9C]" />
          </button>
        </div>

        {/* Followers */}
        <div className="space-y-0.5">
          <p className="text-xs text-[#848E9C]">Followers</p>
          <button className="flex items-center gap-0.5 font-medium text-[#EAECEF] hover:text-[#FCD535] transition-colors cursor-pointer">
            <span>0</span>
            <ChevronRight size={14} className="text-[#848E9C]" />
          </button>
        </div>
      </div>
    </section>
  );
};
