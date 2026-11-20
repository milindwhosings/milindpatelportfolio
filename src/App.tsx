/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import {
  ArchivePoster,
  CaseStudy,
  PROFILE,
  PROJECT_CATEGORIES,
  SERVICES,
} from './data/portfolioData';
import { VinylRecord } from './components/VinylRecord';
import { ServiceWireframeCard } from './components/ServiceWireframeCard';
import { VisualArchiveSection } from './components/VisualArchiveSection';
import { ToolkitSection } from './components/ToolkitSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import {
  AboutResumeModal,
  CaseStudyModal,
  PosterLightboxModal,
} from './components/Modals';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const vinylBackLeftRef = useRef<HTMLDivElement>(null);
  const vinylBackRightRef = useRef<HTMLDivElement>(null);
  const vinylFrontLeftRef = useRef<HTMLDivElement>(null);
  const vinylFrontRightRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState<string>(PROJECT_CATEGORIES[0]);
  const [selectedPoster, setSelectedPoster] = useState<ArchivePoster | null>(null);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const [portraitError, setPortraitError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Contact form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Web & Hackathon Projects',
    message: '',
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Custom Cursor with slight GSAP spring lag
  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const xTo = gsap.quickTo(cursorEl, 'x', { duration: 0.24, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursorEl, 'y', { duration: 0.24, ease: 'power3.out' });

    const handleMove = (e: MouseEvent) => {
      xTo(e.clientX - 5);
      yTo(e.clientY - 5);
      cursorEl.style.opacity = '1';
    };

    const handleLeave = () => {
      cursorEl.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  // Hero entrance & Vinyl mouse-move parallax
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.from('.hero-reveal', {
          y: 28,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform',
        });

        gsap.from('.service-card-reveal', {
          y: 36,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#services',
            start: 'top 75%',
            once: true,
          },
        });
      }
    });

    if (prefersReducedMotion) {
      return () => ctx.revert();
    }

    const targets = [
      { ref: vinylBackLeftRef, depth: -18 },
      { ref: vinylBackRightRef, depth: 20 },
      { ref: vinylFrontLeftRef, depth: -34 },
      { ref: vinylFrontRightRef, depth: 36 },
    ];

    const quickMovers = targets
      .filter((t) => t.ref.current)
      .map((t) => ({
        depth: t.depth,
        xTo: gsap.quickTo(t.ref.current!, 'x', { duration: 0.7, ease: 'power3.out' }),
        yTo: gsap.quickTo(t.ref.current!, 'y', { duration: 0.7, ease: 'power3.out' }),
      }));

    const onHeroMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      quickMovers.forEach((m) => {
        m.xTo(nx * m.depth);
        m.yTo(ny * m.depth * 0.7);
      });
    };

    heroEl.addEventListener('mousemove', onHeroMouseMove);
    return () => {
      heroEl.removeEventListener('mousemove', onHeroMouseMove);
      ctx.revert();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleJumpToCategory = (category: string) => {
    setActiveCategory(category);
    scrollToSection('projects');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setToastMessage(`Email: ${PROFILE.email}`);
      setTimeout(() => setToastMessage(null), 3200);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setToastMessage('Please fill in your name, email, and project message.');
      setTimeout(() => setToastMessage(null), 3200);
      return;
    }

    setToastMessage(`Thanks ${formState.name}! Your inquiry has been received.`);
    setFormState({
      name: '',
      email: '',
      projectType: PROJECT_CATEGORIES[0],
      message: '',
    });
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Custom Spring-Lag Cursor (10px x 10px) */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="hidden md:block fixed top-0 left-0 w-[10px] h-[10px] rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] opacity-0 transition-opacity duration-200"
      />

      {/* SECTION 0: FLOATING PILL NAVIGATION BAR */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
        <nav
          aria-label="Primary navigation"
          className="pointer-events-auto flex items-center gap-4 sm:gap-8 bg-[#000000] text-white rounded-full p-[6px_8px_6px_18px] sm:p-[8px_10px_8px_28px] shadow-[0_16px_38px_rgba(0,0,0,0.28)] border border-white/10"
        >
          <div className="flex items-center gap-4 sm:gap-8 text-[13px] sm:text-[15px] font-medium">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-white hover:text-[#FF6B00] transition-colors whitespace-nowrap shrink-0"
            >
              Home
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="text-white hover:text-[#FF6B00] transition-colors whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-white hover:text-[#FF6B00] transition-colors whitespace-nowrap shrink-0"
            >
              About Me
            </a>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="inline-flex items-center gap-1 rounded-full bg-[#FF6B00] hover:bg-[#e86200] text-white font-semibold text-[12px] sm:text-[14px] px-4 py-2 sm:px-6 sm:py-3 transition-transform duration-200 hover:scale-[1.03] whitespace-nowrap shrink-0"
          >
            <span>Let&apos;s Connect</span>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* SECTION 1: HERO SECTION (Full Atmospheric Studio Portrait + Layered Vinyls) */}
        <section
          ref={heroRef}
          id="home"
          className="relative bg-[#110B07] min-h-[94vh] sm:min-h-screen pt-24 pb-16 flex flex-col justify-end items-center overflow-hidden"
        >
          {/* Ambient Blurred Studio Backdrop Extension (Seamless 1440px+ Fill) */}
          {!portraitError && (
            <img
              src={PROFILE.portraitPath}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center scale-110 blur-2xl opacity-55 pointer-events-none select-none"
            />
          )}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[#0E0906]/60 via-[#110B07]/30 to-[#0E0906]/85 pointer-events-none"
          />

          {/* Giant Background Typography: MILIND */}
          <div className="absolute inset-x-0 top-[11%] sm:top-[9%] flex justify-center items-center pointer-events-none select-none z-10 px-2">
            <h1
              className="hero-reveal font-extrabold text-[#F5ECE2]/22 tracking-[-0.03em] leading-[0.9] text-center uppercase"
              style={{ fontSize: 'clamp(5.2rem, 19vw, 17rem)' }}
            >
              {PROFILE.firstName}
            </h1>
          </div>

          {/* Centerpiece Uncropped Studio Guitar Portrait + Layered Vinyls */}
          {/* <!-- REPLACE PORTRAIT IMAGE HERE --> */}
          <div className="relative w-full max-w-[1360px] mx-auto flex justify-center items-end flex-1">
            {/* Crisp Uncropped Studio Photo (3:4 exact match) with Smooth Radial Feather */}
            <div className="hero-reveal relative z-20 h-[72vh] sm:h-[84vh] aspect-[3/4] max-w-[94vw] flex items-end justify-center">
              {!portraitError ? (
                <img
                  src={PROFILE.portraitPath}
                  alt={`${PROFILE.fullName} playing acoustic guitar in studio`}
                  referrerPolicy="no-referrer"
                  onError={() => setPortraitError(true)}
                  className="w-full h-full object-cover object-center select-none"
                  style={{
                    WebkitMaskImage:
                      'radial-gradient(ellipse 90% 94% at 50% 54%, #000000 64%, transparent 100%)',
                    maskImage:
                      'radial-gradient(ellipse 90% 94% at 50% 54%, #000000 64%, transparent 100%)',
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-[#3D230A] to-[#1A1A1A] flex flex-col items-center justify-center text-[#F5ECE2] p-6 text-center rounded-3xl">
                  <span className="text-4xl font-extrabold tracking-tight">MP</span>
                  <span className="text-xs mt-2 opacity-80">{PROFILE.fullName}</span>
                </div>
              )}
            </div>

            {/* Back-Left Vinyl Record */}
            <div
              ref={vinylBackLeftRef}
              className="hero-reveal hidden sm:block absolute left-[8%] md:left-[14%] lg:left-[18%] bottom-[38%] z-10 opacity-90"
            >
              <VinylRecord
                size={205}
                labelTitle="MILIND"
                labelSide="ACOUSTIC · 2026"
                accentVariant="orange"
                spinDirection="normal"
              />
            </div>

            {/* Back-Right Vinyl Record */}
            <div
              ref={vinylBackRightRef}
              className="hero-reveal hidden sm:block absolute right-[8%] md:right-[14%] lg:right-[18%] bottom-[42%] z-10 opacity-90"
            >
              <VinylRecord
                size={190}
                labelTitle="PATEL"
                labelSide="CODE & DESIGN"
                accentVariant="cream"
                spinDirection="reverse"
              />
            </div>

            {/* Front-Left Vinyl Record (Foreground Corner) */}
            <div
              ref={vinylFrontLeftRef}
              className="hero-reveal hidden md:block absolute left-[4%] lg:left-[8%] bottom-[22%] z-30"
            >
              <VinylRecord
                size={210}
                labelTitle="SIDE A"
                labelSide="GUJARAT · IND"
                accentVariant="cream"
                spinDirection="normal"
              />
            </div>

            {/* Front-Right Vinyl Record (Foreground Corner) */}
            <div
              ref={vinylFrontRightRef}
              className="hero-reveal hidden md:block absolute right-[4%] lg:right-[9%] bottom-[6%] z-30"
            >
              <VinylRecord
                size={235}
                labelTitle="SIDE B"
                labelSide="HINDI & GUJ"
                accentVariant="orange"
                spinDirection="reverse"
              />
            </div>

            {/* Mobile Vinyl Accents */}
            <div className="sm:hidden absolute -left-14 bottom-28 z-10 opacity-85">
              <VinylRecord size={130} accentVariant="orange" />
            </div>
            <div className="sm:hidden absolute -right-14 bottom-32 z-10 opacity-85">
              <VinylRecord size={130} accentVariant="cream" spinDirection="reverse" />
            </div>

            {/* Bottom-Left Intro Text Block — Pure White Typography */}
            <div className="hero-reveal absolute left-5 sm:left-[4%] lg:left-[6%] bottom-10 sm:bottom-[12%] z-40 text-left max-w-[280px] drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
              <p className="text-[18px] sm:text-[22px] font-medium text-[#FFFFFF] leading-snug">
                Hello I&apos;m
              </p>
              <p className="text-[36px] sm:text-[46px] font-extrabold text-[#FFFFFF] leading-[1.02] tracking-[-0.025em] mt-0.5">
                {PROFILE.displayFirstName}
              </p>
              <p className="mt-2.5 text-[13px] sm:text-[14px] text-[#FFFFFF]/85 font-medium leading-[1.5]">
                {PROFILE.heroTaglineLine1}
                <br />
                {PROFILE.heroTaglineLine2}
              </p>
            </div>
          </div>

          {/* Subtle Bottom Scrim + Smooth Transition Into Section 2 Pure White */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 z-30"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFFFFF 100%)',
            }}
          />
        </section>

        {/* SECTION 2: VALUE PROPOSITION / ABOUT INTRO (Pure White #FFFFFF) */}
        <section id="about" className="bg-[#FFFFFF] text-[#111111] py-[100px] sm:py-[120px] px-5">
          <div className="max-w-[820px] mx-auto text-center">
            <h2 className="text-[24px] sm:text-[31px] md:text-[34px] font-semibold text-[#111111] leading-[1.45] tracking-[-0.015em] [text-wrap:balance]">
              {PROFILE.aboutStatement}
            </h2>

            <div className="mt-9 flex justify-center">
              <button
                type="button"
                onClick={() => setAboutModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#3D230A] hover:bg-[#FF6B00] text-white font-semibold text-[15px] px-[34px] py-[16px] shadow-[0_14px_30px_rgba(61,35,10,0.18)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(255,107,0,0.28)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
              >
                <span>More About Me</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVICES — "What I can Help you with?" (Warm Cream #F5ECE2) */}
        <section id="services" className="bg-[#F5ECE2] py-24 sm:py-28 px-5 sm:px-8 overflow-hidden">
          <div className="max-w-[1260px] mx-auto">
            <h2
              className="text-center font-bold text-[#A89F96] tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              What I can
              <br />
              Help you with?
            </h2>

            {/* 4 Tilted Interactive Service Cards */}
            <div className="mt-14 sm:mt-16 flex flex-wrap lg:flex-nowrap items-center justify-center gap-7 xl:gap-8">
              {SERVICES.map((service) => (
                <div key={service.id} className="service-card-reveal">
                  <ServiceWireframeCard
                    service={service}
                    onSelect={handleJumpToCategory}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: VISUAL ARCHIVE (Pure White #FFFFFF, Sticky/Parallax) */}
        <VisualArchiveSection
          onOpenPoster={(poster) => setSelectedPoster(poster)}
          onSelectFolderCategory={handleJumpToCategory}
        />

        {/* SECTION 5: MY CREATIVE TOOLKIT (Deep Pitch Black #050505) */}
        <ToolkitSection />

        {/* SECTION 6: BEYOND THE VISUALS — Filterable Case Studies (Deep Pitch Black #050505) */}
        <CaseStudiesSection
          activeCategory={activeCategory}
          onChangeCategory={setActiveCategory}
          onSelectCaseStudy={(study) => setSelectedStudy(study)}
        />
      </main>

      {/* SECTION 7: FOOTER / "LET'S CONNECT" CTA (Deep Pitch Black #050505) */}
      <footer
        id="contact"
        className="bg-[#050505] text-white border-t border-[#1A1A1A] pt-24 pb-16 px-5 sm:px-8"
      >
        <div className="max-w-[1220px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                  Let&apos;s Connect
                </p>
                <h2
                  className="mt-3 font-extrabold tracking-[-0.03em] leading-[1.02] text-white"
                  style={{ fontSize: 'clamp(2.75rem, 6vw, 4.75rem)' }}
                >
                  Let&apos;s Create
                  <br />
                  Together
                </h2>
                <p className="mt-4 text-sm sm:text-base text-[#A3A3A3] max-w-md leading-relaxed">
                  Open to web prototype collaborations, commercial layout &amp; catalogue design,
                  social media reels, and live acoustic performances.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#1A1A1A] text-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2.5 text-white font-semibold hover:text-[#FF6B00] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#FF6B00]" />
                    <span>{PROFILE.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#A3A3A3] hover:text-white border border-[#262626] rounded-full px-3 py-1 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-[#FF6B00]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2.5 text-[#D4D4D4] tabular-nums">
                  <Phone className="w-4 h-4 text-[#FF6B00]" />
                  <span>{PROFILE.phone}</span>
                </div>

                <div className="flex items-center gap-2.5 text-[#D4D4D4]">
                  <MapPin className="w-4 h-4 text-[#FF6B00]" />
                  <span>{PROFILE.city}</span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-5">
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-[#FF6B00] transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setAboutModalOpen(true)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#A3A3A3] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View Resume Summary</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sleek Interactive Contact Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleFormSubmit}
                className="bg-[#0C0C0C] border border-[#1E1E1E] rounded-[24px] p-6 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#A3A3A3] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Aarav Shah"
                      className="w-full rounded-[12px] bg-[#141414] border border-[#262626] px-4 py-3 text-sm text-white placeholder:text-[#525252] focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#A3A3A3] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full rounded-[12px] bg-[#141414] border border-[#262626] px-4 py-3 text-sm text-white placeholder:text-[#525252] focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-type"
                    className="block text-xs font-semibold text-[#A3A3A3] mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-type"
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full rounded-[12px] bg-[#141414] border border-[#262626] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                  >
                    {PROJECT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#A3A3A3] mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your catalogue, web prototype, reel series, or event..."
                    className="w-full rounded-[12px] bg-[#141414] border border-[#262626] px-4 py-3 text-sm text-white placeholder:text-[#525252] focus:outline-none focus:border-[#FF6B00] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B00] hover:bg-[#e56000] text-white font-bold text-sm px-8 py-3.5 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_10px_24px_rgba(255,107,0,0.3)] cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
            <span>© 2026 {PROFILE.fullName}. All rights reserved.</span>
            <span>{PROFILE.university}</span>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <PosterLightboxModal
        poster={selectedPoster}
        onClose={() => setSelectedPoster(null)}
      />

      <CaseStudyModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onConnectClick={() => scrollToSection('contact')}
      />

      <AboutResumeModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onConnectClick={() => scrollToSection('contact')}
      />

      {/* Submit Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-[110] bg-[#111111] text-white border border-[#FF6B00] shadow-[0_12px_32px_rgba(255,107,0,0.28)] rounded-full px-5 py-3 text-sm font-semibold flex items-center gap-2.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
