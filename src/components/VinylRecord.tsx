import React, { useId, useState } from 'react';

interface VinylRecordProps {
  size?: number;
  labelTitle?: string;
  labelSide?: string;
  accentVariant?: 'orange' | 'cream';
  spinDirection?: 'normal' | 'reverse';
  className?: string;
}

export const VinylRecord: React.FC<VinylRecordProps> = ({
  size = 220,
  labelTitle = 'MILIND',
  labelSide = 'SIDE A · 33 RPM',
  accentVariant = 'orange',
  spinDirection = 'normal',
  className = '',
}) => {
  const uid = useId().replace(/:/g, '');
  const [hovered, setHovered] = useState(false);

  const labelPrimary = accentVariant === 'orange' ? '#FF6B00' : '#F5ECE2';
  const labelSecondary = accentVariant === 'orange' ? '#F5ECE2' : '#FF6B00';
  const labelText = accentVariant === 'orange' ? '#111111' : '#111111';

  const grooves = [154, 146, 138, 130, 122, 114, 106, 98, 90, 82, 74];

  return (
    <div
      className={`relative select-none transition-transform duration-300 ease-out ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        viewBox="0 0 360 360"
        className={`w-full h-full drop-shadow-[0_22px_36px_rgba(0,0,0,0.28)] transition-transform duration-500 ${
          hovered ? 'scale-[1.04]' : 'scale-100'
        }`}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`vinyl-base-${uid}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#262626" />
            <stop offset="45%" stopColor="#101010" />
            <stop offset="85%" stopColor="#070707" />
            <stop offset="100%" stopColor="#1C1C1C" />
          </radialGradient>

          <linearGradient id={`vinyl-sheen-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="36%" stopColor="rgba(255,255,255,0)" />
            <stop offset="47%" stopColor="rgba(255,255,255,0.16)" />
            <stop offset="52%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="57%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="68%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <linearGradient id={`vinyl-sheen-2-${uid}`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="44%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.11)" />
            <stop offset="56%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Outer edge & vinyl disc */}
        <circle cx="180" cy="180" r="174" fill={`url(#vinyl-base-${uid})`} stroke="#2B2B2B" strokeWidth="2" />
        <circle cx="180" cy="180" r="168" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* Spinning grooves & center label */}
        <g
          className={
            hovered
              ? 'vinyl-spin-fast origin-center'
              : spinDirection === 'reverse'
                ? 'vinyl-spin-reverse origin-center'
                : 'vinyl-spin-slow origin-center'
          }
          style={{ transformOrigin: '180px 180px' }}
        >
          {/* Concentric micro-grooves */}
          {grooves.map((r, i) => (
            <circle
              key={r}
              cx="180"
              cy="180"
              r={r}
              fill="none"
              stroke={i % 2 === 0 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)'}
              strokeWidth={i % 3 === 0 ? '1.1' : '0.7'}
              strokeDasharray={i % 4 === 0 ? '180 18 90 12' : undefined}
            />
          ))}

          {/* Run-out groove band */}
          <circle cx="180" cy="180" r="65" fill="#090909" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />

          {/* Center label */}
          <circle cx="180" cy="180" r="56" fill={labelPrimary} />
          <path d="M 124 180 A 56 56 0 0 1 236 180 Z" fill={labelSecondary} opacity="0.92" />
          <circle cx="180" cy="180" r="52" fill="none" stroke="#111111" strokeWidth="1" opacity="0.25" />
          <circle cx="180" cy="180" r="18" fill="none" stroke="#111111" strokeWidth="1" opacity="0.35" />

          {/* Label typography */}
          <text
            x="180"
            y="153"
            textAnchor="middle"
            fill={labelText}
            fontSize="11"
            fontWeight="800"
            letterSpacing="2.2"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            {labelTitle}
          </text>
          <text
            x="180"
            y="212"
            textAnchor="middle"
            fill={labelText}
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="1.6"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            {labelSide}
          </text>
        </g>

        {/* Static diagonal specular light sheen (doesn't spin with disc) */}
        <circle cx="180" cy="180" r="172" fill={`url(#vinyl-sheen-${uid})`} pointerEvents="none" />
        <circle cx="180" cy="180" r="172" fill={`url(#vinyl-sheen-2-${uid})`} pointerEvents="none" />

        {/* Center spindle hole */}
        <circle cx="180" cy="180" r="8.5" fill="#F5ECE2" stroke="#1A1A1A" strokeWidth="1.5" />
      </svg>
    </div>
  );
};
