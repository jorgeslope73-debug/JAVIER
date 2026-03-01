import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface NewsItemProps {
  flag: string;
  country: string;
  headline: string;
}

const NewsItem = ({ flag, country, headline }: NewsItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-b-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={flag}
        alt={country}
        className="w-6 h-4 object-cover rounded-sm flex-shrink-0 mt-1"
      />
      <span
        className={`text-sm text-[#1a1a1a] leading-relaxed transition-all duration-150 ${
          isHovered ? 'underline' : ''
        }`}
      >
        {headline}
      </span>
    </div>
  );
};

const BottomContent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full bg-white py-8 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Galletas Feature */}
          <article
            className="flex gap-4 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <div 
              className="w-[180px] h-[140px] flex-shrink-0 overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="/cookies.jpg"
                alt="Galletas"
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isHovered ? 'scale-[1.02]' : 'scale-100'
                }`}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-[#666666] mb-1">
                La Marca Privada en...{' '}
                <span style={{ color: '#c9a227' }} className="font-semibold">
                  Galletas
                </span>
              </p>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">
                Todavía hay camino por recorrer
              </h3>
              <p className="text-sm text-[#666666] mb-3">
                Análisis del sector de galletas.
              </p>
              <button
                className="self-start flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white text-sm font-medium transition-colors duration-150 hover:bg-[#333333]"
              >
                Ver más <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* Right Column - Noticias */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '700ms' }}
          >
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Noticias</h2>
            <div className="flex flex-col">
              <NewsItem
                flag="https://flagcdn.com/w40/br.png"
                country="Brasil"
                headline="Walmart incrementa sus ventas"
              />
              <NewsItem
                flag="https://flagcdn.com/w40/co.png"
                country="Colombia"
                headline="D1 se consolida como primer retailer"
              />
              <NewsItem
                flag="https://flagcdn.com/w40/pt.png"
                country="Portugal"
                headline="Pingo Doce cierra nueve tiendas"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomContent;
