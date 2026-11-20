import React, { useEffect } from 'react';
import { X, ArrowUpRight, Mail, MapPin, Phone, GraduationCap, Briefcase, Award } from 'lucide-react';
import { ArchivePoster, CaseStudy, PROFILE, RESUME_DETAILS } from '../data/portfolioData';
import { ArchivePosterVisual, CaseStudyMockup } from './PosterArtwork';

/* Shared ESC-key hook */
function useEscapeKey(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
}

export const PosterLightboxModal: React.FC<{
  poster: ArchivePoster | null;
  onClose: () => void;
}> = ({ poster, onClose }) => {
  useEscapeKey(Boolean(poster), onClose);
  if (!poster) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={poster.title}
    >
      <div
        className="relative w-full max-w-[920px] bg-[#111111] border border-[#262626] rounded-[24px] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/15 text-white flex items-center justify-center hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="md:col-span-7 bg-[#050505] p-6 flex items-center justify-center">
          <div className={`w-full max-w-[380px] rounded-[16px] overflow-hidden shadow-2xl ${poster.aspectClass}`}>
            <ArchivePosterVisual variant={poster.variant} />
          </div>
        </div>

        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-white">
          <div>
            <div className="text-xs font-medium text-[#A3A3A3] flex items-center gap-2">
              <span>{poster.category}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{poster.year}</span>
            </div>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight leading-snug">
              {poster.title}
            </h3>
            <p className="mt-4 text-sm text-[#D4D4D4] leading-relaxed">{poster.description}</p>

            <div className="mt-6 pt-5 border-t border-[#262626]">
              <div className="text-xs font-semibold text-[#8C8C8C] uppercase tracking-wider">
                Toolkit &amp; Medium
              </div>
              <div className="mt-2 text-sm font-medium text-white">{poster.tools}</div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-[#737373]">
            <span>Visual Archive · {PROFILE.fullName}</span>
            <button
              type="button"
              onClick={onClose}
              className="text-white font-semibold hover:text-[#FF6B00] transition-colors cursor-pointer"
            >
              Close (ESC)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CaseStudyModal: React.FC<{
  study: CaseStudy | null;
  onClose: () => void;
  onConnectClick: () => void;
}> = ({ study, onClose, onConnectClick }) => {
  useEscapeKey(Boolean(study), onClose);
  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={study.title}
    >
      <div
        className="relative w-full max-w-[820px] bg-[#111111] border border-[#262626] rounded-[24px] overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/15 text-white flex items-center justify-center hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto">
          <div className="w-full aspect-[16/9] bg-[#050505]">
            <CaseStudyMockup variant={study.mockupVariant} />
          </div>

          <div className="p-6 sm:p-8 text-white space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#A3A3A3] font-medium">
                <span className="text-[#FF6B00] font-semibold">{study.category}</span>
                <span aria-hidden="true">·</span>
                <span>{study.client}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{study.year}</span>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
                {study.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
                {study.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#222222]">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C8C8C]">
                  The Challenge
                </h4>
                <p className="mt-2 text-sm text-[#D4D4D4] leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C8C8C]">
                  Execution
                </h4>
                <p className="mt-2 text-sm text-[#D4D4D4] leading-relaxed">{study.execution}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#222222]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C8C8C]">
                Key Outcomes
              </h4>
              <ul className="mt-3 space-y-2">
                {study.outcomes.map((outcome) => (
                  <li key={outcome} className="text-sm text-[#E5E5E5] flex items-start gap-2.5">
                    <span className="text-[#FF6B00] font-bold mt-0.5">→</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#A3A3A3]">
                <span className="font-semibold text-white">Tools: </span>
                {study.tools.join(' · ')}
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onConnectClick();
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#FF6B00] hover:bg-[#e66000] text-white text-xs font-bold px-5 py-2.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                Discuss Similar Project
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutResumeModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConnectClick: () => void;
}> = ({ isOpen, onClose, onConnectClick }) => {
  useEscapeKey(isOpen, onClose);
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="About Milind Patel"
    >
      <div
        className="relative w-full max-w-[780px] bg-[#F5ECE2] text-[#111111] rounded-[24px] overflow-hidden shadow-2xl my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close about drawer"
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-[#FF6B00] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          {/* Header */}
          <div className="pr-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
              Profile &amp; Resume
            </p>
            <h3 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#111111]">
              {PROFILE.fullName}
            </h3>
            <p className="mt-2 text-sm text-[#4A4A4A] flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#3D230A]" />
                {PROFILE.city}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#3D230A]" />
                {PROFILE.email}
              </span>
              <span className="inline-flex items-center gap-1.5 tabular-nums">
                <Phone className="w-3.5 h-3.5 text-[#3D230A]" />
                {PROFILE.phone}
              </span>
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4 pt-6 border-t border-[#E0D4C6]">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#3D230A] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#FF6B00]" />
              Experience
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {RESUME_DETAILS.experience.map((exp) => (
                <div
                  key={exp.org}
                  className="bg-white rounded-[16px] p-5 border border-[#E6DACB]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-base text-[#111111]">{exp.role}</div>
                    <div className="text-xs font-semibold text-[#FF6B00] tabular-nums">
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-[#525252] mt-0.5">{exp.org}</div>
                  <ul className="mt-3 space-y-1.5 text-sm text-[#333333]">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-[#FF6B00] font-bold">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4 pt-6 border-t border-[#E0D4C6]">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#3D230A] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#FF6B00]" />
              Education
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {RESUME_DETAILS.education.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-white rounded-[14px] p-4 border border-[#E6DACB]"
                >
                  <div className="text-[11px] font-bold text-[#FF6B00] tabular-nums">
                    {edu.period}
                  </div>
                  <div className="mt-1 text-sm font-bold text-[#111111] leading-snug">
                    {edu.degree}
                  </div>
                  <div className="mt-1 text-xs text-[#525252]">{edu.school}</div>
                  <div className="mt-2 text-xs font-medium text-[#737373]">{edu.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Accomplishments & Languages */}
          <div className="space-y-4 pt-6 border-t border-[#E0D4C6]">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#3D230A] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FF6B00]" />
              Accomplishments &amp; Languages
            </h4>
            <ul className="space-y-2 text-sm text-[#262626]">
              {RESUME_DETAILS.accomplishments.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#FF6B00] font-bold">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold text-[#525252] pt-2">
              Languages: {PROFILE.languages.join(' · ')}
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E0D4C6]">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-[#3D230A] hover:text-[#FF6B00] transition-colors inline-flex items-center gap-1"
            >
              LinkedIn Profile <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => {
                onClose();
                onConnectClick();
              }}
              className="rounded-full bg-[#3D230A] hover:bg-[#FF6B00] text-white text-sm font-semibold px-7 py-3 transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              Start a Conversation <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
