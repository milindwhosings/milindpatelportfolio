import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { TOOLKIT_ITEMS, ToolkitItem } from '../data/portfolioData';

gsap.registerPlugin(Draggable);

const ToolIconSVG: React.FC<{ type: ToolkitItem['iconType']; accent: string }> = ({
  type,
  accent,
}) => {
  switch (type) {
    case 'canva':
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
          <circle cx="32" cy="32" r="24" fill={accent} />
          <path
            d="M40 24c-2.5-2.5-6-3.5-9.5-2.5-5.5 1.6-8.5 7.5-7 13 1.4 5.2 6.8 8.3 12 6.8 2.4-.7 4.4-2.2 5.7-4.2"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'htmlcss':
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
          <path d="M12 10h40l-4 38-16 6-16-6-4-38z" fill={accent} />
          <path
            d="M22 22h20l-1 6H27l1 6h12l-1.5 11-6.5 2-6.5-2-.4-4"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'clang':
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
          <polygon points="32,8 53,20 53,44 32,56 11,44 11,20" fill={accent} />
          <path
            d="M39 24a10 10 0 1 0 0 16"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'excel':
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
          <rect x="10" y="12" width="44" height="40" rx="6" fill={accent} />
          <path d="M36 12v40M36 26h18M36 38h18" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />
          <path
            d="M19 24l9 16M28 24l-9 16"
            stroke="#FFFFFF"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'layout':
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
          <rect x="10" y="12" width="44" height="40" rx="6" fill={accent} />
          <rect x="16" y="18" width="14" height="28" rx="2.5" fill="#F5ECE2" />
          <rect x="34" y="18" width="14" height="12" rx="2.5" fill="#FF6B00" />
          <rect x="34" y="34" width="14" height="12" rx="2.5" fill="rgba(245,236,226,0.45)" />
        </svg>
      );
    case 'reels':
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
          <rect x="12" y="12" width="40" height="40" rx="10" fill={accent} />
          <path d="M12 24h40M22 12l6 12M36 12l6 12" stroke="#FFFFFF" strokeWidth="2.8" />
          <polygon points="27,31 27,45 39,38" fill="#FFFFFF" />
        </svg>
      );
    case 'guitar':
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
          <circle cx="32" cy="38" r="16" fill={accent} />
          <rect x="29" y="10" width="6" height="20" rx="2" fill={accent} />
          <circle cx="32" cy="38" r="6" fill="#FFF7E0" />
          <line x1="30.5" y1="12" x2="30.5" y2="48" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
          <line x1="33.5" y1="12" x2="33.5" y2="48" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
        </svg>
      );
    case 'vocals':
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
          <rect x="24" y="10" width="16" height="26" rx="8" fill={accent} />
          <path
            d="M18 30a14 14 0 0 0 28 0M32 44v10M24 54h16"
            fill="none"
            stroke={accent}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <line x1="27" y1="19" x2="37" y2="19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="27" y1="25" x2="37" y2="25" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
};

export const ToolkitSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggablesRef = useRef<Draggable[]>([]);
  const [hasDragged, setHasDragged] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.toolkit-polaroid');
      draggablesRef.current = Draggable.create(cards, {
        bounds: containerRef.current,
        inertia: false,
        edgeResistance: 0.75,
        onPress() {
          setHasDragged(true);
          gsap.to(this.target, {
            scale: 1.07,
            rotation: 0,
            duration: 0.18,
            ease: 'power2.out',
          });
        },
        onRelease() {
          gsap.to(this.target, {
            scale: 1,
            duration: 0.25,
            ease: 'power2.out',
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleReset = () => {
    const cards = gsap.utils.toArray<HTMLElement>('.toolkit-polaroid');
    cards.forEach((card, index) => {
      const item = TOOLKIT_ITEMS[index];
      gsap.to(card, {
        x: 0,
        y: 0,
        rotation: item ? item.tilt : 0,
        duration: 0.55,
        ease: 'power3.out',
      });
    });
    setHasDragged(false);
  };

  return (
    <section
      id="toolkit"
      className="relative bg-[#050505] text-white pt-28 pb-24 px-5 sm:px-8 overflow-hidden"
    >
      <div
        ref={containerRef}
        className="max-w-[1220px] mx-auto relative min-h-[540px] flex flex-col items-center justify-center"
      >
        {/* Background Charcoal Heading */}
        <div className="text-center select-none mb-6 md:mb-0 md:translate-y-4">
          <h2
            className="font-extrabold text-[#222222] tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            My Creative
            <br />
            Toolkit
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#737373] font-medium">
            Drag, toss, or hover any Polaroid card to explore the stack
          </p>
        </div>

        {/* Scattered Draggable Polaroid Cards */}
        <div className="relative z-10 mt-10 md:-mt-6 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7 max-w-[980px] mx-auto">
          {TOOLKIT_ITEMS.map((item) => (
            <div
              key={item.id}
              style={{
                transform: `rotate(${item.tilt}deg) translateY(${item.initialOffset.y}px)`,
              }}
              className="toolkit-polaroid group bg-[#FFFFFF] text-[#111111] p-[12px] pb-[28px] rounded-[14px] shadow-[0_20px_45px_rgba(0,0,0,0.55)] cursor-grab active:cursor-grabbing select-none transition-shadow duration-200 hover:shadow-[0_28px_60px_rgba(255,107,0,0.22)] hover:z-30 w-[156px] sm:w-[186px] mx-auto"
            >
              {/* Inner Polaroid Square */}
              <div
                className="w-full aspect-square rounded-[8px] flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: item.bg }}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <ToolIconSVG type={item.iconType} accent={item.accent} />
                </div>
              </div>
              {/* Polaroid Bottom Margin Label */}
              <div className="mt-3 text-center">
                <div className="text-[14px] font-extrabold tracking-tight text-[#111111]">
                  {item.name}
                </div>
                <div className="text-[11px] font-medium text-[#737373] mt-0.5">
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasDragged && (
          <div className="mt-10">
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-white border border-[#262626] hover:border-[#FF6B00] transition-colors cursor-pointer"
            >
              Reset Polaroid Layout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
