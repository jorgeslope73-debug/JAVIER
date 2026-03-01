import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  delay?: string;
}

const NewsCard = ({ image, title, description, delay = '0ms' }: NewsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="bg-white border border-gray-200 p-4 flex gap-4 transition-all duration-200 cursor-pointer animate-fade-in-up"
      style={{ animationDelay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[120px] h-[120px] flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-[1.02]' : 'scale-100'
          }`}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{title}</h3>
        <p className="text-sm text-[#666666] leading-relaxed">{description}</p>
      </div>
    </article>
  );
};

const NewsGrid = () => {
  const [magazineHovered, setMagazineHovered] = useState(false);

  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
          {/* Left Column - News Cards */}
          <div className="flex flex-col gap-4">
            <NewsCard
              image="/energy-drink.jpg"
              title="Actualidad"
              description="Makro presenta 250 referencias de marca propia en 2025"
              delay="300ms"
            />
            <NewsCard
              image="/cereal-box.jpg"
              title="Lanzamientos"
              description="Mercadona presenta nuevos cereales con Hacendado"
              delay="400ms"
            />
          </div>

          {/* Right Column - Magazine */}
          <article
            className="bg-white border border-gray-200 p-4 animate-fade-in-up"
            style={{ animationDelay: '500ms' }}
            onMouseEnter={() => setMagazineHovered(true)}
            onMouseLeave={() => setMagazineHovered(false)}
          >
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Última Revista</h2>
            <div className="relative overflow-hidden">
              <img
                src="/magazine-cover.jpg"
                alt="Alimarket Magazine Cover"
                className={`w-full h-auto object-cover transition-transform duration-300 ${
                  magazineHovered ? 'scale-[1.02]' : 'scale-100'
                }`}
              />
              {/* Gold accent border */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-2"
                style={{ backgroundColor: '#c9a227' }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-[#666666]">Edición Especial 2025</span>
              <button 
                className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a] hover:text-gold transition-colors duration-150"
                style={{ '--gold': '#c9a227' } as React.CSSProperties}
              >
                Ver más <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
