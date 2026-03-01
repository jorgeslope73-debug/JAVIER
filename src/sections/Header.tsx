import { useState } from 'react';

const Header = () => {
  const [activeLang, setActiveLang] = useState<'es' | 'en'>('es');

  return (
    <header className="w-full bg-white border-b border-gray-200 animate-fade-in">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-[42px] font-extrabold text-[#1a1a1a] leading-none tracking-tight">
            Alimarket
          </span>
          <span 
            className="text-[18px] font-semibold text-gold leading-tight tracking-[0.15em]"
            style={{ color: '#c9a227' }}
          >
            MARCA PRIVADA
          </span>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveLang('es')}
            className={`flex items-center gap-2 transition-all duration-150 ${
              activeLang === 'es' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img 
              src="https://flagcdn.com/w40/es.png" 
              alt="Español" 
              className="w-8 h-6 object-cover rounded-sm"
            />
            <span className="text-sm font-medium text-[#1a1a1a] hidden sm:inline">
              ESPAÑOL
            </span>
          </button>
          
          <button
            onClick={() => setActiveLang('en')}
            className={`flex items-center gap-2 transition-all duration-150 ${
              activeLang === 'en' ? 'opacity-100' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img 
              src="https://flagcdn.com/w40/gb.png" 
              alt="English" 
              className="w-8 h-6 object-cover rounded-sm"
            />
            <span className="text-sm font-medium text-[#1a1a1a] hidden sm:inline">
              ENGLISH
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
