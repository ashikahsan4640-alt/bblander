import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface LinkSocialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LinkSocialModal: React.FC<LinkSocialModalProps> = ({ isOpen, onClose }) => {
  const [twitter, setTwitter] = useState('');
  const [telegram, setTelegram] = useState('');
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-none">
      <div className="w-full max-w-md bg-[#1E2329] border border-[#2B313A] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between p-5 border-b border-[#2B313A]">
          <h3 className="text-base font-semibold text-white">Link Social Accounts</h3>
          <button
            onClick={onClose}
            className="p-1 text-[#848E9C] hover:text-white rounded-lg hover:bg-[#2B313A] transition"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-5 space-y-4 text-xs">
          <div>
            <label className="block text-[#848E9C] mb-1 font-medium">X / Twitter Handle</label>
            <div className="flex items-center bg-[#181A20] border border-[#2B313A] rounded-lg px-3 py-2 text-white">
              <span className="text-[#848E9C] mr-1">@</span>
              <input
                type="text"
                placeholder="ashikahsan"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                className="w-full bg-transparent outline-none text-white text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#848E9C] mb-1 font-medium">Telegram Username</label>
            <div className="flex items-center bg-[#181A20] border border-[#2B313A] rounded-lg px-3 py-2 text-white">
              <span className="text-[#848E9C] mr-1">@</span>
              <input
                type="text"
                placeholder="ashik_ahsan"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                className="w-full bg-transparent outline-none text-white text-xs"
              />
            </div>
          </div>

          <p className="text-[11px] text-[#848E9C]">
            Linking verified social accounts allows social trading copy features and verified creator status.
          </p>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-[#FCD535] hover:bg-[#F0B90B] text-[#181A20] font-semibold text-xs transition cursor-pointer"
          >
            {saved ? 'Saved Successfully!' : 'Save & Link'}
          </button>
        </form>
      </div>
    </div>
  );
};
