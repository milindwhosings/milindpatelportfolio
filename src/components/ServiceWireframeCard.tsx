import React, { useId } from 'react';
import { ServiceItem } from '../data/portfolioData';

interface ServiceWireframeCardProps {
  service: ServiceItem;
  onSelect: (category: string) => void;
}

export const ServiceWireframeCard: React.FC<ServiceWireframeCardProps> = ({
  service,
  onSelect,
}) => {
  const uid = useId().replace(/:/g, '');
  const [colorA, colorB] = service.wireframeColors;

  const renderCenterCutout = () => {
    switch (service.shape) {
      case 'circle':
        return <circle cx="120" cy="105" r="31" fill="#050505" stroke={colorA} strokeWidth="1.2" strokeOpacity="0.45" />;
      case 'square':
        return (
          <rect
            x="92"
            y="77"
            width="56"
            height="56"
            rx="4"
            fill="#050505"
            stroke={colorA}
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        );
      case 'triangle':
        return (
          <polygon
            points="120,70 154,130 86,130"
            fill="#050505"
            stroke={colorA}
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        );
      case 'diamond':
        return (
          <polygon
            points="120,66 158,105 120,144 82,105"
            fill="#050505"
            stroke={colorA}
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        );
    }
  };

  return (
    <button
      type="button"
      onClick={() => onSelect(service.filterCategory)}
      style={{ '--card-tilt': `${service.tilt}deg` } as React.CSSProperties}
      className="group relative w-[268px] sm:w-[272px] h-[360px] rounded-[24px] overflow-hidden bg-[#050505] text-left shadow-[0_22px_45px_rgba(17,17,17,0.16)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:rotate(var(--card-tilt))] hover:[transform:rotate(0deg)_scale(1.04)] hover:shadow-[0_30px_60px_rgba(17,17,17,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] cursor-pointer shrink-0 flex flex-col"
    >
      {/* Top Pitch Black Globe Container */}
      <div className="relative flex-1 w-full bg-[#050505] flex items-center justify-center overflow-hidden">
        {/* Subtle ambient radial glow */}
        <div
          className="absolute w-44 h-44 rounded-full opacity-25 blur-2xl transition-opacity duration-300 group-hover:opacity-45"
          style={{
            background: `radial-gradient(circle, ${colorA}, ${colorB} 60%, transparent 75%)`,
          }}
        />

        {/* Wireframe Geometric Globe SVG */}
        <svg
          viewBox="0 0 240 210"
          className="w-[210px] h-[186px] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-6"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`wire-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorA} />
              <stop offset="100%" stopColor={colorB} />
            </linearGradient>
          </defs>

          <g stroke={`url(#wire-${uid})`} fill="none" strokeWidth="1.25" opacity="0.92">
            {/* Outer globe sphere */}
            <circle cx="120" cy="105" r="78" strokeWidth="1.5" />

            {/* Meridians (vertical ellipses rotated slightly for 3D feel) */}
            <ellipse cx="120" cy="105" rx="64" ry="78" />
            <ellipse cx="120" cy="105" rx="46" ry="78" />
            <ellipse cx="120" cy="105" rx="26" ry="78" />
            <line x1="120" y1="27" x2="120" y2="183" />

            {/* Parallels (horizontal curves) */}
            <ellipse cx="120" cy="105" rx="78" ry="18" />
            <ellipse cx="120" cy="105" rx="75" ry="38" opacity="0.7" />
            <ellipse cx="120" cy="70" rx="69" ry="13" />
            <ellipse cx="120" cy="140" rx="69" ry="13" />
            <ellipse cx="120" cy="46" rx="50" ry="8" />
            <ellipse cx="120" cy="164" rx="50" ry="8" />
            <line x1="42" y1="105" x2="198" y2="105" opacity="0.6" />
          </g>

          {/* Solid black geometric cutout in center */}
          {renderCenterCutout()}
        </svg>
      </div>

      {/* Vibrant Gradient Bottom Banner */}
      <div
        className="h-[96px] w-full px-5 flex flex-col items-center justify-center text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${service.bannerFrom} 0%, ${service.bannerTo} 100%)`,
        }}
      >
        <span className="text-white font-bold text-[16px] leading-[1.25] tracking-[-0.01em] drop-shadow-sm">
          {service.title}
        </span>
      </div>
    </button>
  );
};
