import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ARCHIVE_POSTERS, ArchivePoster, FOLDERS } from '../data/portfolioData';
import { ArchivePosterVisual } from './PosterArtwork';

gsap.registerPlugin(ScrollTrigger);

interface VisualArchiveSectionProps {
  onOpenPoster: (poster: ArchivePoster) => void;
  onSelectFolderCategory: (category: string) => void;
}

const GlossyFolder3D: React.FC<{
  label: string;
  count: string;
  tilt: number;
  onClick: () => void;
}> = ({ label, count, tilt, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{ '--folder-tilt': `${tilt}deg` } as React.CSSProperties}
    className="group relative flex flex-col items-center cursor-pointer [transform:rotate(var(--folder-tilt))] hover:[transform:rotate(0deg)_scale(1.08)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-2xl p-2"
    title={`Jump to ${label}`}
  >
    <svg
      viewBox="0 0 180 148"
      className="w-32 h-28 sm:w-40 sm:h-32 drop-shadow-[0_20px_30px_rgba(0,102,255,0.28)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="folderBackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0044CC" />
          <stop offset="100%" stopColor="#0088FF" />
        </linearGradient>
        <linearGradient id="folderFrontGrad" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#4DC3FF" />
          <stop offset="52%" stopColor="#0088FF" />
          <stop offset="100%" stopColor="#0052E0" />
        </linearGradient>
        <linearGradient id="folderGloss" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.52)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Folder back tab */}
      <path
        d="M14 26 C14 17 21 10 30 10 L68 10 C75 10 80 14 84 20 L90 28 L152 28 C160 28 166 34 166 42 L166 122 C166 131 159 138 150 138 L30 138 C21 138 14 131 14 122 Z"
        fill="url(#folderBackGrad)"
      />

      {/* Crisp white document peek inside folder */}
      <rect x="26" y="28" width="128" height="28" rx="6" fill="#FFFFFF" opacity="0.92" />
      <rect x="34" y="34" width="60" height="4" rx="2" fill="#D4E4FF" />

      {/* Glossy 3D front flap */}
      <path
        d="M10 46 C10 37 17 30 26 30 L154 30 C163 30 170 37 170 46 L166 122 C165 131 158 138 149 138 L31 138 C22 138 15 131 14 122 Z"
        fill="url(#folderFrontGrad)"
      />
      {/* Top specular highlight */}
      <path
        d="M16 44 C16 37 22 33 29 33 L151 33 C158 33 164 37 164 44 L162 66 C120 75 60 75 18 66 Z"
        fill="url(#folderGloss)"
      />
    </svg>
    <span className="mt-1.5 text-xs font-bold text-[#111111] tracking-tight">{label}</span>
    <span className="text-[11px] font-medium text-[#737373]">{count}</span>
  </button>
);

export const VisualArchiveSection: React.FC<VisualArchiveSectionProps> = ({
  onOpenPoster,
  onSelectFolderCategory,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('[data-speed]');
      items.forEach((el) => {
        const speed = parseFloat(el.dataset.speed || '1');
        const yOffset = (1 - speed) * 140;
        gsap.fromTo(
          el,
          { y: -yOffset },
          {
            y: yOffset,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.7,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Interleave posters & folders in the 12-col scatter canvas
  return (
    <section
      ref={sectionRef}
      id="archive"
      className="relative bg-[#FFFFFF] text-[#111111] py-24 md:py-32 px-5 sm:px-8 overflow-x-clip min-h-[200vh]"
    >
      {/* Sticky Center Watermark Title */}
      <div className="sticky top-1/2 -translate-y-1/2 z-0 pointer-events-none flex justify-center items-center py-8">
        <h2
          className="text-center font-extrabold text-[#E5E5E5] tracking-[-0.03em] leading-[0.95] select-none"
          style={{ fontSize: 'clamp(4.25rem, 12vw, 10rem)' }}
        >
          Visual
          <br />
          Archive
        </h2>
      </div>

      {/* Foreground Staggered Parallax Scatter Grid */}
      <div className="relative z-10 max-w-[1260px] mx-auto -mt-[30vh] pb-24 grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-y-20 md:gap-x-8 items-start">
        {/* Poster 1 (Left) */}
        <ArchiveCard item={ARCHIVE_POSTERS[0]} onOpen={onOpenPoster} />

        {/* Folder 1 (Center-Right) */}
        <div
          data-speed={FOLDERS[0].speed}
          className={`flex justify-center ${FOLDERS[0].positionClass}`}
        >
          <GlossyFolder3D
            label={FOLDERS[0].label}
            count={FOLDERS[0].count}
            tilt={FOLDERS[0].tilt}
            onClick={() => onSelectFolderCategory(FOLDERS[0].targetCategory)}
          />
        </div>

        {/* Poster 2 (Center-Right) */}
        <ArchiveCard item={ARCHIVE_POSTERS[1]} onOpen={onOpenPoster} />

        {/* Folder 2 (Mid-Left) */}
        <div
          data-speed={FOLDERS[1].speed}
          className={`flex justify-center ${FOLDERS[1].positionClass}`}
        >
          <GlossyFolder3D
            label={FOLDERS[1].label}
            count={FOLDERS[1].count}
            tilt={FOLDERS[1].tilt}
            onClick={() => onSelectFolderCategory(FOLDERS[1].targetCategory)}
          />
        </div>

        {/* Poster 3 (Mid-Right) */}
        <ArchiveCard item={ARCHIVE_POSTERS[2]} onOpen={onOpenPoster} />

        {/* Poster 4 (Mid-Left) */}
        <ArchiveCard item={ARCHIVE_POSTERS[3]} onOpen={onOpenPoster} />

        {/* Poster 5 (Lower-Right) */}
        <ArchiveCard item={ARCHIVE_POSTERS[4]} onOpen={onOpenPoster} />

        {/* Poster 6 (Lower-Center) */}
        <ArchiveCard item={ARCHIVE_POSTERS[5]} onOpen={onOpenPoster} />

        {/* Folder 3 (Lower-Right) */}
        <div
          data-speed={FOLDERS[2].speed}
          className={`flex justify-center ${FOLDERS[2].positionClass}`}
        >
          <GlossyFolder3D
            label={FOLDERS[2].label}
            count={FOLDERS[2].count}
            tilt={FOLDERS[2].tilt}
            onClick={() => onSelectFolderCategory(FOLDERS[2].targetCategory)}
          />
        </div>

        {/* Poster 7 (Bottom-Right) */}
        <ArchiveCard item={ARCHIVE_POSTERS[6]} onOpen={onOpenPoster} />
      </div>
    </section>
  );
};

const ArchiveCard: React.FC<{
  item: ArchivePoster;
  onOpen: (poster: ArchivePoster) => void;
}> = ({ item, onOpen }) => (
  <div data-speed={item.speed} className={item.positionClass}>
    {/* <!-- REPLACE IMAGE HERE: swap ArchivePosterVisual with your poster <img> if desired --> */}
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group w-full text-left block rounded-[16px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_28px_55px_rgba(0,0,0,0.18)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] cursor-pointer bg-white"
    >
      <div className={`w-full ${item.aspectClass} overflow-hidden relative`}>
        <div className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
          <ArchivePosterVisual variant={item.variant} />
        </div>
        <div className="
          pointer-events-none absolute inset-x-0 bottom-0 p-4
          bg-gradient-to-t from-black/75 via-black/35 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          flex items-end justify-between text-white
        ">
          <div>
            <p className="text-xs font-bold leading-snug">{item.title}</p>
            <p className="text-[11px] text-white/75">{item.category} · {item.year}</p>
          </div>
          <span className="text-xs font-semibold text-[#FF6B00]">Expand ↗</span>
        </div>
      </div>
    </button>
  </div>
);
