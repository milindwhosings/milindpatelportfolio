import React from 'react';
import { ArchivePoster, CaseStudy } from '../data/portfolioData';

export const ArchivePosterVisual: React.FC<{ variant: ArchivePoster['variant'] }> = ({
  variant,
}) => {
  switch (variant) {
    case 'solar-catalogue':
      return (
        <div className="w-full h-full bg-[#0C1D2E] text-white p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-14 -top-14 w-52 h-52 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF6B00] opacity-85" />
          <div className="relative z-10 flex justify-between items-start text-[11px] tracking-wider uppercase text-white/75 font-semibold">
            <span>Sunlight Infra Energy</span>
            <span>2026 Catalogue</span>
          </div>
          <div className="relative z-10 my-auto py-4">
            <p className="text-[11px] font-semibold text-[#FFB800] tracking-widest uppercase mb-2">
              On-Grid Solar Systems
            </p>
            <h4 className="text-3xl font-extrabold leading-[1.02] tracking-tight">
              Clean Power.
              <br />
              Clear Specs.
            </h4>
            <div className="mt-5 grid grid-cols-3 gap-2 text-left">
              {[
                ['3 kW', 'Home'],
                ['10 kW', 'Villa'],
                ['50 kW', 'Plant'],
              ].map(([kw, lbl]) => (
                <div key={kw} className="bg-white/10 rounded-lg p-2.5 border border-white/10">
                  <div className="text-sm font-bold text-[#FFB800] tabular-nums">{kw}</div>
                  <div className="text-[10px] text-white/70">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 pt-3 border-t border-white/15 flex justify-between text-[11px] text-white/70">
            <span>Ahmedabad · Gujarat</span>
            <span>Offer Layout v2</span>
          </div>
        </div>
      );

    case 'paaji-instagram':
      return (
        <div className="w-full h-full bg-white text-[#111111] flex flex-col border border-[#E5E5E5]">
          {/* Instagram Post Header */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-[#EFEFEF]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#FF6B00] text-white text-[11px] font-extrabold flex items-center justify-center">
                PK
              </div>
              <div>
                <div className="text-xs font-bold leading-none">paajikikaksha</div>
                <div className="text-[10px] text-[#737373] mt-0.5">Ahmedabad · Education</div>
              </div>
            </div>
            <span className="text-xs font-bold text-[#737373]">•••</span>
          </div>
          {/* Post Visual */}
          <div className="flex-1 bg-[#141414] text-white p-5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-[#FF6B00]/25 blur-xl" />
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00]">
              Reel Frame · Study Smart
            </div>
            <div>
              <div className="text-2xl font-extrabold leading-tight tracking-tight">
                3 Ways to Crack
                <br />
                Concept Revision
              </div>
              <div className="mt-3 h-1 w-14 bg-[#FF6B00] rounded-full" />
            </div>
            <div className="flex items-center justify-between text-[11px] text-white/70">
              <span>00:42 Reel Cut</span>
              <span>Swipe / Save</span>
            </div>
          </div>
          {/* Instagram Actions Bar */}
          <div className="px-4 py-3 flex items-center justify-between text-xs font-semibold text-[#262626] bg-white">
            <div className="flex items-center gap-4">
              <span>♥ 1.8k</span>
              <span>💬 94</span>
              <span>↗ Share</span>
            </div>
            <span>Bookmark</span>
          </div>
        </div>
      );

    case 'agriflow-ui':
      return (
        <div className="w-full h-full bg-[#0F241D] text-white p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-[#34D399]">AgriFlow Prototype</span>
            <span className="text-white/70 font-medium">EN · हिं · ગુજ</span>
          </div>
          <div className="grid grid-cols-12 gap-3 my-auto py-2">
            <div className="col-span-7 bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-[10px] text-[#34D399] font-semibold uppercase tracking-wider">
                Live Slot Booking
              </div>
              <div className="text-lg font-extrabold mt-1">Gate #04 · Token 18</div>
              <div className="mt-3 space-y-1.5">
                <div className="h-2 w-full bg-white/15 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-[#34D399] rounded-full" />
                </div>
                <div className="text-[10px] text-white/70 tabular-nums">Est. Wait: 14 mins</div>
              </div>
            </div>
            <div className="col-span-5 bg-[#34D399] text-[#052E16] rounded-xl p-4 flex flex-col justify-between">
              <div className="text-[10px] font-bold uppercase">Mandi Queue</div>
              <div className="text-2xl font-extrabold tabular-nums">12 Active</div>
              <div className="text-[10px] font-semibold">Karnavati Hackathon</div>
            </div>
          </div>
          <div className="text-[11px] text-white/65 flex justify-between">
            <span>Trilingual Farmer Flow</span>
            <span>B.Tech Sem 1 Build</span>
          </div>
        </div>
      );

    case 'poetry-reel':
      return (
        <div className="w-full h-full bg-[#24160E] text-[#F5ECE2] p-6 flex flex-col justify-between relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 80% 20%, #FF6B00 0%, transparent 50%)',
            }}
          />
          <div className="relative z-10 flex justify-between text-[11px] text-[#A89F96]">
            <span>ORIGINAL AUDIO-VISUAL</span>
            <span>ACOUSTIC</span>
          </div>
          <div className="relative z-10 my-auto">
            <div className="text-xs text-[#FF6B00] font-semibold mb-2">Hindi &amp; Gujarati Verse</div>
            <div className="text-3xl font-extrabold leading-[1.08] tracking-tight">
              Shaam-e-
              <br />
              Sukoon
            </div>
            <p className="mt-3 text-xs text-[#D6C7B8] leading-relaxed max-w-[210px]">
              “Suron ke saath alfaaz jab milte hain, har manzar ek kahani ban jaata hai.”
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-2 pt-3 border-t border-white/10">
            {[14, 24, 18, 32, 22, 16, 28, 12, 20, 15].map((h, idx) => (
              <span
                key={idx}
                className="w-1.5 rounded-full bg-[#FF6B00]/80"
                style={{ height: `${h}px` }}
              />
            ))}
            <span className="ml-auto text-[11px] text-[#A89F96] tabular-nums">02:18</span>
          </div>
        </div>
      );

    case 'offer-sheet':
      return (
        <div className="w-full h-full bg-[#F8F6F2] text-[#111111] p-6 flex flex-col justify-between border border-[#E5E0D8]">
          <div className="flex justify-between items-center border-b border-[#DED7CC] pb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider">
              Commercial Offer
            </span>
            <span className="text-[11px] font-semibold text-[#FF6B00]">FY 2026</span>
          </div>
          <div className="my-auto py-3 space-y-3">
            <div className="text-xl font-extrabold leading-tight">
              Residential &amp; Commercial Solar Breakdown
            </div>
            <div className="space-y-2 text-[11px]">
              {[
                ['Mono-PERC Modules', '545 Wp'],
                ['On-Grid Inverter', '98.4% Eff.'],
                ['Payback Horizon', '3.4 Yrs'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between py-1.5 border-b border-[#E7E2D9] font-medium"
                >
                  <span className="text-[#525252]">{k}</span>
                  <span className="font-bold tabular-nums">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-[#737373] font-medium">
            Sunlight Infra Energy Pvt. Ltd.
          </div>
        </div>
      );

    case 'acoustic-gig':
      return (
        <div className="w-full h-full bg-[#FF6B00] text-[#111111] p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
            <span>Karnavati Live</span>
            <span>Unplugged</span>
          </div>
          <div className="my-auto">
            <div className="text-[42px] font-extrabold leading-[0.92] tracking-[-0.04em]">
              ACOUSTIC
              <br />
              SESSIONS
            </div>
            <div className="mt-4 inline-block bg-[#111111] text-[#F5ECE2] text-[11px] font-bold px-3 py-1.5 rounded-full">
              Vocals &amp; Guitar · Milind Patel
            </div>
          </div>
          <div className="flex justify-between items-end text-[11px] font-bold border-t border-black/15 pt-3">
            <span>Gandhinagar Campus</span>
            <span>19:30 IST</span>
          </div>
        </div>
      );

    case 'monograph-type':
      return (
        <div className="w-full h-full bg-[#121212] text-white p-6 flex flex-col justify-between">
          <div className="flex justify-between text-[11px] text-[#A89F96]">
            <span>TRILINGUAL UI SYSTEM</span>
            <span>ACCESSIBILITY</span>
          </div>
          <div className="grid grid-cols-3 gap-3 my-auto">
            <div className="bg-[#1C1C1C] rounded-xl p-3.5 border border-white/10">
              <div className="text-[10px] text-[#FF6B00] font-bold mb-1">EN</div>
              <div className="text-sm font-bold">Book Slot</div>
            </div>
            <div className="bg-[#1C1C1C] rounded-xl p-3.5 border border-white/10">
              <div className="text-[10px] text-[#00C2CB] font-bold mb-1">HI</div>
              <div className="text-sm font-bold">स्लॉट बुक करें</div>
            </div>
            <div className="bg-[#1C1C1C] rounded-xl p-3.5 border border-white/10">
              <div className="text-[10px] text-[#FFE600] font-bold mb-1">GU</div>
              <div className="text-sm font-bold">સ્લોટ બુક કરો</div>
            </div>
          </div>
          <div className="text-[11px] text-[#737373]">
            Consistent touch targets &amp; legibility across Latin, Devanagari &amp; Gujarati scripts.
          </div>
        </div>
      );
  }
};

export const CaseStudyMockup: React.FC<{ variant: CaseStudy['mockupVariant'] }> = ({
  variant,
}) => {
  switch (variant) {
    case 'agriflow-web':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#0A251C] via-[#113A2D] to-[#081A14] p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
              <span className="text-xs font-bold tracking-wide">AgriFlow Procurement</span>
            </div>
            <span className="text-[11px] text-white/60 tabular-nums">Hackathon Build · 2026</span>
          </div>
          <div className="grid grid-cols-12 gap-4 my-auto items-center">
            <div className="col-span-7 space-y-2">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-none">
                Zero-Wait Mandi Queue
              </div>
              <p className="text-xs text-white/70 max-w-xs">
                Real-time unloading slot reservation and live token tracking built for agricultural hubs.
              </p>
            </div>
            <div className="col-span-5 bg-black/35 border border-white/15 rounded-xl p-4 space-y-2.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-white/60">Active Bay</span>
                <span className="font-bold text-[#34D399] tabular-nums">Bay 03</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-white/60">Current Token</span>
                <span className="font-bold tabular-nums">#A-42</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-[#34D399]" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'agriflow-multilang':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#141824] to-[#0B0E17] p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex justify-between items-center text-[11px] text-white/60">
            <span className="font-bold text-[#60A5FA]">Localization Engine</span>
            <span>3 Regional Scripts</span>
          </div>
          <div className="grid grid-cols-3 gap-3 my-auto">
            {[
              { code: 'English', title: 'Confirm Slot', sub: 'Gate 2 Ready', color: '#60A5FA' },
              { code: 'हिन्दी', title: 'स्लॉट चुनें', sub: 'गेट 2 तैयार', color: '#34D399' },
              { code: 'ગુજરાતી', title: 'સ્લોટ પસંદ', sub: 'ગેટ 2 તૈયાર', color: '#FF6B00' },
            ].map((item) => (
              <div
                key={item.code}
                className="bg-white/[0.06] border border-white/10 rounded-xl p-3.5 flex flex-col justify-between"
              >
                <span className="text-[10px] font-bold" style={{ color: item.color }}>
                  {item.code}
                </span>
                <div className="text-sm sm:text-base font-bold mt-3">{item.title}</div>
                <div className="text-[10px] text-white/60 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'sunlight-portal':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#132238] to-[#08101C] p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex justify-between text-[11px]">
            <span className="font-bold text-[#FFB800]">Sunlight Infra Energy</span>
            <span className="text-white/60">ROI &amp; Spec Layout</span>
          </div>
          <div className="grid grid-cols-3 gap-3 my-auto">
            {[
              { tier: '3 kW Home', gen: '12 Units/day', pay: '3.2 Yrs' },
              { tier: '10 kW Villa', gen: '42 Units/day', pay: '3.0 Yrs' },
              { tier: '25 kW Biz', gen: '105 Units/day', pay: '2.7 Yrs' },
            ].map((row) => (
              <div key={row.tier} className="bg-white/10 rounded-xl p-3.5 border border-white/10">
                <div className="text-xs font-extrabold text-[#FFB800]">{row.tier}</div>
                <div className="text-[11px] text-white/80 mt-2 tabular-nums">{row.gen}</div>
                <div className="text-[10px] text-white/55 mt-1 tabular-nums">ROI: {row.pay}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'vinyl-portfolio':
      return (
        <div className="w-full h-full bg-[#F5ECE2] p-6 sm:p-8 flex items-center justify-between text-[#111111] relative overflow-hidden">
          <div className="space-y-2 z-10">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#FF6B00]">
              Interactive Showcase
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-none">
              MILIND
              <br />
              PATEL
            </div>
            <div className="text-xs text-[#525252] pt-1">GSAP · Parallax Vinyls · Case Studies</div>
          </div>
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#0A0A0A] flex items-center justify-center shadow-2xl border-4 border-[#1F1F1F]">
            <div className="w-16 h-16 rounded-full bg-[#FF6B00] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#F5ECE2]" />
            </div>
          </div>
        </div>
      );

    case 'solar-catalogue':
      return (
        <div className="w-full h-full bg-gradient-to-tr from-[#0B192C] via-[#122B4A] to-[#1E3A5F] p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex justify-between text-[11px] text-white/70">
            <span>SUNLIGHT INFRA ENERGY</span>
            <span>PRINT &amp; DIGITAL BROCHURE</span>
          </div>
          <div className="flex items-end justify-between gap-4 my-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold leading-tight">
                On-Grid Solar
                <br />
                System Catalogue
              </div>
              <p className="text-xs text-white/70 mt-2">Residential &amp; Commercial Lineup</p>
            </div>
            <div className="w-24 h-28 bg-white text-[#111111] rounded-lg p-3 shadow-xl shrink-0 flex flex-col justify-between">
              <div className="w-full h-10 rounded bg-gradient-to-r from-[#FF6B00] to-[#FFB800]" />
              <div className="space-y-1">
                <div className="h-1.5 w-full bg-neutral-200 rounded" />
                <div className="h-1.5 w-2/3 bg-neutral-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'commercial-offers':
      return (
        <div className="w-full h-full bg-[#EFE9E0] p-6 sm:p-8 flex flex-col justify-between text-[#111111]">
          <div className="flex justify-between text-[11px] font-bold text-[#3D230A]">
            <span>COMMERCIAL OFFER SHEET</span>
            <span>ITEMIZED QUOTE</span>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#DED5C8] space-y-2.5 my-auto">
            <div className="flex justify-between text-xs font-bold border-b border-neutral-100 pb-2">
              <span>System Component</span>
              <span>Specification</span>
            </div>
            <div className="flex justify-between text-[11px] text-neutral-600">
              <span>PV Modules (Tier-1)</span>
              <span className="font-semibold text-neutral-900 tabular-nums">545 Wp Mono</span>
            </div>
            <div className="flex justify-between text-[11px] text-neutral-600">
              <span>Grid-Tie Inverter</span>
              <span className="font-semibold text-neutral-900 tabular-nums">25 Yr Warranty</span>
            </div>
          </div>
        </div>
      );

    case 'campus-posters':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#FF5500] to-[#FF007F] p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
            <span>Live Campus Series</span>
            <span>Ahmedabad</span>
          </div>
          <div className="my-auto">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">
              UNPLUGGED
              <br />
              AT DUSK
            </div>
            <div className="mt-2 text-xs text-white/85">Editorial Event Print &amp; Poster System</div>
          </div>
        </div>
      );

    case 'paaji-reels':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-6 sm:p-8 flex items-center justify-between text-white">
          <div className="space-y-2 max-w-[55%]">
            <div className="text-[11px] font-bold text-[#FF6B00] uppercase tracking-wider">
              Paaji Ki Kaksha
            </div>
            <div className="text-2xl font-extrabold leading-tight">
              Educational Reels &amp; Channel Growth
            </div>
            <div className="text-xs text-white/65">Scripting · Motion Captions · Scheduling</div>
          </div>
          <div className="w-28 h-44 rounded-2xl border-2 border-white/20 bg-gradient-to-b from-[#FF6B00] to-[#9A3412] p-3 flex flex-col justify-between shadow-2xl">
            <div className="w-8 h-1 bg-white/40 rounded-full mx-auto" />
            <div className="text-xs font-extrabold leading-tight">9:16 Reel Cut</div>
            <div className="text-[10px] text-white/80">100% Retention</div>
          </div>
        </div>
      );

    case 'academic-carousel':
      return (
        <div className="w-full h-full bg-[#101014] p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex justify-between text-[11px] text-white/60">
            <span>Carousel Design System</span>
            <span>5-Slide Template</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 my-auto">
            {['01 Hook', '02 Concept', '03 Summary'].map((slide, idx) => (
              <div
                key={slide}
                className={`aspect-square rounded-xl p-3 flex flex-col justify-between ${
                  idx === 0
                    ? 'bg-[#FF6B00] text-black'
                    : 'bg-white/10 text-white border border-white/10'
                }`}
              >
                <span className="text-[10px] font-bold uppercase">{slide}</span>
                <span className="text-xs font-extrabold">Paaji Ki Kaksha</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'poetry-reels':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#2B1710] to-[#120906] p-6 sm:p-8 flex flex-col justify-between text-[#F5ECE2]">
          <div className="flex justify-between text-[11px] text-[#A89F96]">
            <span>AUDIO-VISUAL REELS</span>
            <span>HI · GU</span>
          </div>
          <div className="my-auto">
            <div className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Poetry Meets
              <br />
              Acoustic Guitar
            </div>
            <p className="text-xs text-[#D4C5B5] mt-2">
              Original spoken verse &amp; live fingerstyle accompaniment.
            </p>
          </div>
        </div>
      );

    case 'campus-ensemble':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#1F1209] via-[#3D230A] to-[#140B04] p-6 sm:p-8 flex flex-col justify-between text-[#F5ECE2]">
          <div className="flex justify-between text-[11px] text-[#FF6B00] font-bold">
            <span>LIVE PERFORMANCE</span>
            <span>VOCALS &amp; GUITAR</span>
          </div>
          <div className="my-auto">
            <div className="text-3xl font-extrabold tracking-tight">Campus Ensembles</div>
            <p className="text-xs text-[#E2D5C8] mt-2 max-w-sm">
              Acoustic lead vocals and rhythm guitar sets across Karnavati University &amp; Ahmedabad stages.
            </p>
          </div>
        </div>
      );

    case 'original-songs':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#18181B] to-[#09090B] p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex justify-between text-[11px] text-white/60">
            <span>SONGWRITING NOTEBOOK</span>
            <span>ORIGINAL TRACKS</span>
          </div>
          <div className="my-auto space-y-2">
            <div className="text-2xl sm:text-3xl font-extrabold">Original Hindi &amp; Gujarati Songs</div>
            <div className="flex gap-2 pt-2">
              {['Em7', 'Cmaj7', 'G', 'D/F#'].map((chord) => (
                <span
                  key={chord}
                  className="px-2.5 py-1 rounded bg-white/10 text-xs font-mono text-[#FF6B00]"
                >
                  {chord}
                </span>
              ))}
            </div>
          </div>
        </div>
      );

    case 'acoustic-mixes':
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#0F172A] to-[#020617] p-6 sm:p-8 flex flex-col justify-between text-white">
          <div className="flex justify-between text-[11px] text-[#38BDF8] font-bold">
            <span>AUDIO-VISUAL PRODUCTION</span>
            <span>LIVE TAKES</span>
          </div>
          <div className="my-auto flex items-center gap-1.5 h-16">
            {[28, 52, 36, 64, 44, 58, 30, 60, 48, 38, 54, 42, 62, 34, 46].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-full bg-gradient-to-t from-[#FF6B00] to-[#FFB800]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="text-xs text-white/75">Stripped-down live acoustic session capture &amp; edit.</div>
        </div>
      );
  }
};
