import { useEffect, useRef } from 'react';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-white pt-8 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#1a1a1a] leading-tight max-w-[800px] mb-8 animate-fade-in-up">
          México: Claves del mercado para el gran consumo
        </h1>

        {/* Hero Image */}
        <div className="w-full overflow-hidden animate-scale-in" style={{ animationDelay: '200ms' }}>
          <img
            ref={imageRef}
            src="/mexico-skyline.jpg"
            alt="Mexico City Skyline"
            className="w-full h-auto object-cover transition-transform duration-300"
            style={{ aspectRatio: '16/6' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
