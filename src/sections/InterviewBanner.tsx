import { useState } from 'react';

const InterviewBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="w-full py-8 animate-fade-in-up"
      style={{ 
        animationDelay: '800ms',
        backgroundColor: '#2a2a2a'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative flex items-center justify-between min-h-[160px]">
          {/* Left Content */}
          <div className="flex flex-col z-10">
            {/* Quote Mark */}
            <span 
              className="text-6xl font-serif leading-none mb-2"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              "
            </span>
            <h2 
              className={`text-2xl sm:text-3xl font-bold text-white mb-1 transition-all duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`}
            >
              Brasil: Grupo Éxito
            </h2>
            <p className="text-lg text-gray-400">Interview</p>
          </div>

          {/* Right Image - Businessman */}
          <div className="absolute right-0 bottom-0 top-0 flex items-end justify-end">
            <div 
              className={`relative transition-all duration-300 ${
                isHovered ? 'brightness-110' : ''
              }`}
            >
              <img
                src="/businessman.jpg"
                alt="Businessman Interview"
                className="h-[180px] sm:h-[200px] w-auto object-cover object-top"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewBanner;
