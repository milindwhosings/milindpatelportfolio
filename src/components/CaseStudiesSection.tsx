import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, CaseStudy, PROJECT_CATEGORIES } from '../data/portfolioData';
import { CaseStudyMockup } from './PosterArtwork';

interface CaseStudiesSectionProps {
  activeCategory: string;
  onChangeCategory: (category: string) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  activeCategory,
  onChangeCategory,
  onSelectCaseStudy,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredStudies = CASE_STUDIES.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.case-study-card',
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="bg-[#050505] text-white pt-16 pb-28 px-5 sm:px-8 border-t border-[#141414]"
    >
      <div className="max-w-[1220px] mx-auto">
        {/* Oversized Display Header */}
        <h2
          className="font-extrabold text-[#FFFFFF] tracking-[-0.03em] leading-[0.98] text-center sm:text-left"
          style={{ fontSize: 'clamp(3.25rem, 11vw, 9.5rem)' }}
        >
          Beyond the visuals
        </h2>

        {/* Interactive Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Project categories"
          className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => onChangeCategory(category)}
                className={`rounded-full px-[26px] py-[12px] text-[14px] font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
                  isActive
                    ? 'bg-[#121212] text-[#FFFFFF] tab-active-glow'
                    : 'bg-transparent text-[#737373] border border-[#262626] hover:text-white hover:border-[#404040]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 2-Column Project Showcase Grid */}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8"
        >
          {filteredStudies.map((study) => (
            <button
              key={study.id}
              type="button"
              onClick={() => onSelectCaseStudy(study)}
              className="case-study-card group text-left block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-[20px] cursor-pointer"
            >
              {/* <!-- REPLACE IMAGE HERE: swap CaseStudyMockup with your thumbnail <img> --> */}
              <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden border border-[#1E1E1E] bg-[#0D0D0D]">
                <div className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
                  <CaseStudyMockup variant={study.mockupVariant} />
                </div>

                {/* Hover View Indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 text-[#FF6B00]" />
                </div>
              </div>

              {/* Clean Unboxed Metadata & Title */}
              <div className="mt-4 px-1">
                <div className="flex items-center gap-2 text-xs text-[#8C8C8C] font-medium">
                  <span>{study.client}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{study.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.role}</span>
                </div>
                <h3 className="mt-1.5 text-xl sm:text-[22px] font-bold text-white tracking-[-0.015em] group-hover:text-[#FF6B00] transition-colors">
                  {study.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#A3A3A3] line-clamp-2 leading-relaxed">
                  {study.summary}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
