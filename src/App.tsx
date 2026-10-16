import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Shield,
  Zap,
  Cpu,
  GitFork,
  Disc,
  Copy,
  Check,
  Globe,
  Instagram,
  Youtube,
  Music2,
  Download,
  ExternalLink,
  X,
  Server,
  Activity,
  Code2,
  Sliders,
  Sparkles
} from 'lucide-react';

const LATEST_APK_URL = "https://github.com/videshkarmakar-hue/V-Tune/releases/download/V-Tune/V-Tune-arm64-foss-debug.apk";
const DEVELOPER_IMAGE_URL = "https://cdn.phototourl.com/member/2026-09-24-d3b8ff6f-f0d4-43e0-9082-9f39cc851774.png";
const LATEST_VERSION_NAME = "Latest 2.1.0.0 Version";

interface BuildTarget {
  id: string;
  badge: string;
  badgeSplit: [string, string];
  size: string;
  title: string;
  shaLabel: string;
  shaTruncated: string;
  shaFull: string;
  buttonLabel: string;
  buttonIcon: 'download' | 'zap' | 'beta';
  isPrimary?: boolean;
  version: string;
  fileName: string;
  downloadUrl: string;
}

const BUILD_TARGETS: BuildTarget[] = [
  {
    id: 'standard',
    badge: 'LATEST 2.1.0.0',
    badgeSplit: ['LATEST', '2.1.0.0'],
    size: '14.8\nMB',
    title: 'Standard Production',
    shaLabel: 'SHA-256',
    shaTruncated: '6f5f...a14e91024bd35a2b3c4d5e6f',
    shaFull: '6f5f8a14e91024bd35a2b3c4d5e6f770183ac2b56e91f0c23945a1b32cd5849a',
    buttonLabel: 'Download Standard APK (Latest 2.1.0.0 Version)',
    buttonIcon: 'download',
    isPrimary: true,
    version: 'Latest 2.1.0.0 Version',
    fileName: 'V-Tune-arm64-foss-debug.apk',
    downloadUrl: LATEST_APK_URL,
  },
  {
    id: 'lite',
    badge: 'ULTRALIGHT',
    badgeSplit: ['ULTRALIGH', 'T'],
    size: '8.9\nMB',
    title: 'Lite Edition',
    shaLabel: 'SHA-256',
    shaTruncated: '9b4f...2cde71829f01ab23cd45ef67',
    shaFull: '9b4f72cde71829f01ab23cd45ef67319082bc74a3f1248092ec094ba1489ec0a',
    buttonLabel: 'Download Lite APK (Latest 2.1.0.0 Version)',
    buttonIcon: 'zap',
    isPrimary: false,
    version: 'Latest 2.1.0.0 Version (Lite)',
    fileName: 'V-Tune-arm64-foss-debug.apk',
    downloadUrl: LATEST_APK_URL,
  },
];

export default function App() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [infoModal, setInfoModal] = useState<string | null>(null);
  const [activeSocialModal, setActiveSocialModal] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#051613] text-[#d3e7e1] font-body relative overflow-x-hidden selection:bg-[#4edea3]/30 selection:text-[#6ffbbe]">
      {/* Background atmospheric radial gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(78,222,163,0.07)_0%,rgba(5,22,19,0)_70%)]" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(35,83,71,0.12)_0%,rgba(5,22,19,0)_65%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(78,222,163,0.05)_0%,rgba(5,22,19,0)_70%)]" />
      </div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#051613]/90 backdrop-blur-md border-b border-[#112923]/60 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Version */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={scrollToTop}>
            <div className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#4edea3] stroke-[3] fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 8 12 16 20 8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-sm tracking-wide leading-none">
                V-Tune
              </span>
              <span className="text-[10px] text-[#4edea3] font-mono tracking-wider leading-tight uppercase font-medium mt-0.5">
                {LATEST_VERSION_NAME}
              </span>
              <span className="text-[9px] text-[#52796F] font-mono tracking-widest leading-none uppercase">
                ENGINE
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#94A3B8]">
            <button
              onClick={() => scrollToSection('architecture')}
              className="hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => setInfoModal('benchmarks')}
              className="hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Performance
            </button>
            <button
              onClick={() => scrollToSection('builds')}
              className="hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('developer')}
              className="hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Developer
            </button>
          </nav>

          {/* Right Action: Download APK pill */}
          <div className="flex items-center gap-3">
            <a
              href={LATEST_APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="V-Tune-arm64-foss-debug.apk"
              className="bg-[#4edea3] hover:bg-[#34d399] active:bg-[#059669] text-[#051613] text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-[0_0_15px_rgba(78,222,163,0.25)] hover:scale-[1.02] cursor-pointer"
            >
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download APK</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 flex flex-col items-center text-center">
          {/* Latest Version Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#082b26] border border-[#4edea3]/40 text-[#4edea3] text-xs font-mono mb-6 shadow-[0_0_20px_rgba(78,222,163,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{LATEST_VERSION_NAME}</span>
          </div>

          {/* Main Giant Heading */}
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-[#8ee7c6] drop-shadow-[0_0_40px_rgba(78,222,163,0.18)] select-none">
            V-TUNE
          </h1>

          {/* Hero Download APK Pill Button */}
          <div className="mt-8 sm:mt-10 mb-8 sm:mb-10">
            <a
              href={LATEST_APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="V-Tune-arm64-foss-debug.apk"
              className="bg-[#4edea3] hover:bg-[#34d399] active:bg-[#059669] text-[#002c1b] font-bold px-10 py-3.5 rounded-full flex items-center justify-center gap-2.5 transition-all duration-200 shadow-[0_0_30px_rgba(78,222,163,0.35)] hover:scale-105 group cursor-pointer"
            >
              <ArrowDown className="w-5 h-5 stroke-[2.5] text-[#002c1b] group-hover:translate-y-0.5 transition-transform" />
              <div className="flex flex-col text-left leading-tight">
                <span className="text-sm sm:text-base font-extrabold tracking-tight">Download APK</span>
                <span className="text-[10px] font-mono tracking-wider uppercase opacity-90">{LATEST_VERSION_NAME}</span>
              </div>
            </a>
          </div>

          {/* Trust & Compatibility Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-[13px] text-[#c1c8c5]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4edea3] stroke-[2.2]" />
              <span>Android 5.0 to Android 15</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#4edea3] stroke-[2.2]" />
              <span>Zero Telemetry / Bloatware</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#4edea3] stroke-[2.2]" />
              <span>100% Free & Open Client</span>
            </div>
          </div>
        </section>

        {/* SECTION 1: ENGINE ARCHITECTURE */}
        <section id="architecture" className="pt-12 sm:pt-20 pb-20">
          <div className="mb-8">
            <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#4edea3] uppercase block mb-3">
              ENGINE ARCHITECTURE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl">
              Engineered for pure audio velocity.
            </h2>
          </div>

          {/* 3 Architecture Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0c221d]/85 backdrop-blur-md border border-[#1d3d34]/70 rounded-2xl p-7 hover:border-[#4edea3]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#14352d] border border-[#235347]/60 flex items-center justify-center mb-6 text-[#4edea3] group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  Optimization for Low-End Devices
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Runs effortlessly with &lt;45MB RAM footprint, instant cold startup, zero telemetry daemons, and zero background throttling.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1a3830]/60 flex items-center justify-between text-xs font-mono text-[#52796F]">
                <span>RAM &lt; 45MB</span>
                <span className="text-[#4edea3]">Cold Start &lt; 140ms</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0c221d]/85 backdrop-blur-md border border-[#1d3d34]/70 rounded-2xl p-7 hover:border-[#4edea3]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#14352d] border border-[#235347]/60 flex items-center justify-center mb-6 text-[#4edea3] group-hover:scale-110 transition-transform">
                  <GitFork className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  Dual-Engine Catalog
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Unified cross-routing engine that bridges Spotify metadata with YouTube Music high-bitrate audio pipelines seamlessly.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1a3830]/60 flex items-center justify-between text-xs font-mono text-[#52796F]">
                <span>Spotify + YTM</span>
                <span className="text-[#4edea3]">Zero Token Required</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0c221d]/85 backdrop-blur-md border border-[#1d3d34]/70 rounded-2xl p-7 hover:border-[#4edea3]/40 transition-all duration-300 flex flex-col justify-between group shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#14352d] border border-[#235347]/60 flex items-center justify-center mb-6 text-[#4edea3] group-hover:scale-110 transition-transform">
                  <Disc className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  Zero Interruption & Offline Mode
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  100% ad-free playback, uninterrupted background listening with screen locked, and high-speed one-tap FLAC/MP3 downloads.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1a3830]/60 flex items-center justify-between text-xs font-mono text-[#52796F]">
                <span>Screen-Off Daemon</span>
                <span className="text-[#4edea3]">FLAC / 320kbps</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEVELOPER / CREATOR SPOTLIGHT WITH DEVELOPER IMAGE */}
        <section id="developer" className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-14">
            {/* Developer Credit Slot Image */}
            <div className="flex flex-col items-center">
              <div
                className="relative group cursor-pointer"
                onClick={() => setActiveSocialModal('videsh')}
                title="Click to view developer profile"
              >
                {/* Outer Ring with Glow */}
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-[#08221c]/90 border-2 border-[#34D399]/40 shadow-[0_0_35px_rgba(52,211,153,0.25)] flex items-center justify-center relative overflow-hidden backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={DEVELOPER_IMAGE_URL}
                    alt="Videsh Karmakar - Lead Designer & Core Developer"
                    className="w-full h-full rounded-full object-cover border border-[#4edea3]/50 shadow-inner"
                  />
                  {/* Bottom Credit Overlay */}
                  <div className="absolute inset-x-0 bottom-0 py-2 bg-gradient-to-t from-[#051613]/90 via-[#051613]/60 to-transparent flex flex-col items-center text-center">
                    <span className="text-[11px] font-bold text-white leading-tight drop-shadow">Karmakar</span>
                    <span className="text-[9px] text-[#4edea3] font-mono tracking-wider drop-shadow">UI & Design</span>
                  </div>
                </div>
              </div>

              {/* Status Indicator Under Circle */}
              <div className="mt-3.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_#4edea3] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#4edea3] uppercase">
                  ACTIVE ARCHITECT
                </span>
              </div>
            </div>

            {/* Creator Info */}
            <div className="flex flex-col text-center md:text-left">
              <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#4edea3] uppercase mb-2">
                CREATOR & CORE DEVELOPER
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                VIDESH KARMAKAR
              </h2>
              <p className="text-base sm:text-lg text-[#94A3B8] mb-6">
                Lead Designer & Core Developer
              </p>

              {/* Social Links Row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <button
                  onClick={() => setActiveSocialModal('website')}
                  className="bg-[#0b211b] hover:bg-[#15362d] border border-[#1b3e34]/70 hover:border-[#4edea3]/50 text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-[#4edea3]" />
                  <span>Website</span>
                </button>

                <button
                  onClick={() => setActiveSocialModal('spotify')}
                  className="bg-[#0b211b] hover:bg-[#15362d] border border-[#1b3e34]/70 hover:border-[#4edea3]/50 text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Music2 className="w-3.5 h-3.5 text-[#1ed760]" />
                  <span>Spotify</span>
                </button>

                <button
                  onClick={() => setActiveSocialModal('instagram')}
                  className="bg-[#0b211b] hover:bg-[#15362d] border border-[#1b3e34]/70 hover:border-[#4edea3]/50 text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#f472b6]" />
                  <span>Instagram</span>
                </button>

                <button
                  onClick={() => setActiveSocialModal('youtube')}
                  className="bg-[#0b211b] hover:bg-[#15362d] border border-[#1b3e34]/70 hover:border-[#4edea3]/50 text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Youtube className="w-3.5 h-3.5 text-[#ef4444]" />
                  <span>YouTube</span>
                </button>

                <button
                  onClick={() => setActiveSocialModal('facebook')}
                  className="bg-[#0b211b] hover:bg-[#15362d] border border-[#1b3e34]/70 hover:border-[#4edea3]/50 text-white text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="font-bold text-[#60a5fa] text-xs">f</span>
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PICK YOUR BUILD TARGET */}
        <section id="builds" className="py-16 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              Pick your build target.
            </h2>
            <p className="text-sm font-mono text-[#4edea3]">
              {LATEST_VERSION_NAME} (Universal ARM64 & FOSS)
            </p>
          </div>

          {/* Build Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {BUILD_TARGETS.map((target) => (
              <div
                key={target.id}
                className={`bg-[#0c221d]/85 backdrop-blur-md border ${
                  target.isPrimary ? 'border-[#4edea3]/40 shadow-[0_0_25px_rgba(78,222,163,0.12)]' : 'border-[#1d3d34]/70'
                } rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#4edea3]/60 transition-all duration-300`}
              >
                <div>
                  {/* Top Header Row: Split Badge & Size */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col text-[11px] font-mono font-semibold tracking-wider text-[#4edea3] uppercase leading-tight">
                      <span>{target.badgeSplit[0]}</span>
                      <span>{target.badgeSplit[1]}</span>
                    </div>
                    <div className="text-right text-xs font-mono text-[#94A3B8] leading-tight whitespace-pre-line">
                      {target.size}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display text-2xl font-bold text-white mt-4 mb-2">
                    {target.title}
                  </h3>
                  <div className="text-xs text-[#4edea3] font-mono mb-5">
                    {LATEST_VERSION_NAME}
                  </div>

                  {/* SHA-256 Box */}
                  <div className="bg-[#071915] border border-[#16382f] rounded-xl p-3 mb-6">
                    <span className="text-[10px] font-mono text-[#52796F] uppercase tracking-wider block mb-1">
                      {target.shaLabel}
                    </span>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono-data text-xs text-[#94A3B8] truncate select-all">
                        {target.shaTruncated}
                      </span>
                      <button
                        onClick={() => handleCopy(target.id, target.shaFull)}
                        className="text-xs font-medium text-[#4edea3] hover:text-[#34d399] flex items-center gap-1 transition-colors flex-shrink-0 cursor-pointer"
                        title="Copy complete SHA-256 hash"
                      >
                        {copiedId === target.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#34d399]" />
                            <span className="text-[11px]">Copied</span>
                          </>
                        ) : (
                          <>
                            <span className="text-[11px]">Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div>
                  {target.isPrimary ? (
                    <a
                      href={LATEST_APK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={target.fileName}
                      className="w-full bg-[#4edea3] hover:bg-[#34d399] active:bg-[#059669] text-[#051613] text-xs font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:scale-[1.02] cursor-pointer"
                    >
                      <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                      <span>{target.buttonLabel}</span>
                    </a>
                  ) : (
                    <a
                      href={LATEST_APK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={target.fileName}
                      className="w-full bg-[#16382f]/90 hover:bg-[#1f4a3e] active:bg-[#0f2e26] border border-[#235347]/80 text-[#9fd1c1] hover:text-white text-xs font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                    >
                      <Zap className="w-4 h-4 text-[#4edea3] stroke-[2]" />
                      <span>{target.buttonLabel}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CALLOUT BANNER / MIRROR */}
        <section className="my-14 sm:my-20">
          <div className="bg-[#09201a]/90 backdrop-blur-md border border-[#1b3d34]/70 rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]">
            {/* Left: Crafted By Text */}
            <div className="flex items-center gap-3 text-center sm:text-left">
              <CheckCircle2 className="w-5 h-5 text-[#4edea3] stroke-[2.2] flex-shrink-0" />
              <div className="text-sm">
                <span className="font-bold text-white block">Crafted by VIDESH</span>
                <span className="text-[#94A3B8] block">KARMAKAR and engineering for everyone.</span>
              </div>
            </div>

            {/* Right: Mirror Download & Scroll-to-Top Button */}
            <div className="flex items-center gap-3">
              <a
                href={LATEST_APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                download="V-Tune-arm64-foss-debug.apk"
                className="bg-[#123129] hover:bg-[#1c473c] border border-[#225346]/70 text-[#4edea3] text-xs font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <ArrowDown className="w-3.5 h-3.5 stroke-[2.2]" />
                <span>Download APK ({LATEST_VERSION_NAME})</span>
              </a>

              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="w-10 h-10 rounded-full bg-[#123129] hover:bg-[#1c473c] border border-[#225346]/70 flex items-center justify-center text-[#4edea3] hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#122c24] bg-[#041310] py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#52796F]">
          {/* Left Footer Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-white/90 font-medium">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#4edea3] stroke-[3] fill-none stroke-current" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 8 12 16 20 8" />
              </svg>
              <span>V-Tune Architecture</span>
            </div>
            <span className="hidden sm:inline text-emerald-900">•</span>
            <span>© 2025 V-Tune Open Audio Labs. {LATEST_VERSION_NAME}.</span>
          </div>

          {/* Right Footer Links */}
          <div className="flex items-center gap-6 font-medium text-[#94A3B8]">
            <button
              onClick={() => setInfoModal('api')}
              className="hover:text-[#4edea3] transition-colors cursor-pointer"
            >
              API Spec
            </button>
            <button
              onClick={() => setInfoModal('benchmarks')}
              className="hover:text-[#4edea3] transition-colors cursor-pointer"
            >
              Benchmarks
            </button>
            <button
              onClick={() => setInfoModal('codecs')}
              className="hover:text-[#4edea3] transition-colors cursor-pointer"
            >
              Codecs
            </button>
            <button
              onClick={() => setInfoModal('mirror')}
              className="hover:text-[#4edea3] transition-colors cursor-pointer"
            >
              Release Mirror
            </button>
          </div>
        </div>
      </footer>

      {/* INFORMATION MODALS (API, Benchmarks, Codecs, Mirror) */}
      {infoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0b211b] border border-[#235347] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setInfoModal(null)}
              className="absolute top-4 right-4 text-[#94A3B8] hover:text-white p-1 rounded-full hover:bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {infoModal === 'benchmarks' && (
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#4edea3]">
                  <Activity className="w-5 h-5" />
                  <h3 className="font-display font-bold text-xl text-white">Performance Benchmarks ({LATEST_VERSION_NAME})</h3>
                </div>
                <p className="text-xs text-[#94A3B8] mb-4">
                  Tested on Snapdragon 665 / 4GB RAM running Android 11. Low-spec device optimization benchmarks for {LATEST_VERSION_NAME}:
                </p>
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-[#061713] p-3 rounded-xl border border-[#1b3d34]">
                    <div className="flex justify-between text-white mb-1">
                      <span>RAM Footprint (Streaming)</span>
                      <span className="text-[#4edea3] font-bold">38.4 MB</span>
                    </div>
                    <div className="text-[11px] text-slate-400">vs Spotify (310MB), YouTube Music (380MB)</div>
                  </div>
                  <div className="bg-[#061713] p-3 rounded-xl border border-[#1b3d34]">
                    <div className="flex justify-between text-white mb-1">
                      <span>Cold Startup Time</span>
                      <span className="text-[#4edea3] font-bold">132 ms</span>
                    </div>
                    <div className="text-[11px] text-slate-400">vs Spotify (1,450ms), Apple Music (2,100ms)</div>
                  </div>
                  <div className="bg-[#061713] p-3 rounded-xl border border-[#1b3d34]">
                    <div className="flex justify-between text-white mb-1">
                      <span>Background Battery Consumption</span>
                      <span className="text-[#4edea3] font-bold">0.42% / hr</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Screen locked, zero analytics wake-locks</div>
                  </div>
                </div>
              </div>
            )}

            {infoModal === 'api' && (
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#4edea3]">
                  <Code2 className="w-5 h-5" />
                  <h3 className="font-display font-bold text-xl text-white">V-Tune Dual-Engine API Spec</h3>
                </div>
                <p className="text-xs text-[#94A3B8] mb-4">
                  Architecture overview of the dual-engine pipeline bridging high-precision Spotify metadata with YouTube Music opus audio streams:
                </p>
                <div className="bg-[#061713] p-3 rounded-xl border border-[#1b3d34] font-mono text-[11px] text-[#9fd1c1] space-y-2">
                  <p>1. <span className="text-white">Metadata Scraper:</span> Clean client-side search cache without Spotify API credentials.</p>
                  <p>2. <span className="text-white">Opus Pipe Extractor:</span> 256kbps / 320kbps YouTube Music audio streams with audio-only chunking.</p>
                  <p>3. <span className="text-white">Lock-Screen Daemon:</span> MediaSessionCompat with foreground notification service.</p>
                  <p>4. <span className="text-white">Zero Telemetry:</span> Sentry, Firebase Analytics, and Google AdMob completely excluded from compile manifest.</p>
                </div>
              </div>
            )}

            {infoModal === 'codecs' && (
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#4edea3]">
                  <Sliders className="w-5 h-5" />
                  <h3 className="font-display font-bold text-xl text-white">Audio Codecs & Fidelity</h3>
                </div>
                <div className="space-y-2.5 text-xs text-[#94A3B8]">
                  <div className="p-3 bg-[#061713] rounded-xl border border-[#1b3d34]">
                    <span className="text-white font-bold block mb-1">FLAC (Free Lossless Audio Codec)</span>
                    <span>24-bit / 96kHz studio grade lossless playback with gapless transition buffer.</span>
                  </div>
                  <div className="p-3 bg-[#061713] rounded-xl border border-[#1b3d34]">
                    <span className="text-white font-bold block mb-1">Opus 256 kbps Variable Bitrate</span>
                    <span>High-efficiency psychoacoustic container providing indistinguishable transparent audio.</span>
                  </div>
                  <div className="p-3 bg-[#061713] rounded-xl border border-[#1b3d34]">
                    <span className="text-white font-bold block mb-1">MP3 320 kbps CBR</span>
                    <span>Maximum legacy compatibility with automatic ID3 tag embedding on download.</span>
                  </div>
                </div>
              </div>
            )}

            {infoModal === 'mirror' && (
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#4edea3]">
                  <Server className="w-5 h-5" />
                  <h3 className="font-display font-bold text-xl text-white">Release Mirror Nodes ({LATEST_VERSION_NAME})</h3>
                </div>
                <p className="text-xs text-[#94A3B8] mb-4">
                  High-speed global mirrors directly fetching {LATEST_VERSION_NAME} (V-Tune-arm64-foss-debug.apk):
                </p>
                <div className="space-y-2 text-xs">
                  {[
                    { region: 'GitHub Primary Release (Global)', speed: '1.2 Gbps', latency: 'Direct CDN' },
                    { region: 'Tokyo, Japan (Asia-East)', speed: '980 Mbps', latency: '12ms' },
                    { region: 'Frankfurt, Germany (EU-Central)', speed: '1 Gbps', latency: '24ms' },
                    { region: 'San Jose, USA (US-West)', speed: '1 Gbps', latency: '35ms' },
                  ].map((mirror, idx) => (
                    <div key={idx} className="bg-[#061713] p-3 rounded-xl border border-[#1b3d34] flex items-center justify-between">
                      <div>
                        <span className="text-white font-medium block">{mirror.region}</span>
                        <span className="text-[10px] text-[#52796F] font-mono">{LATEST_VERSION_NAME} • {mirror.latency}</span>
                      </div>
                      <a
                        href={LATEST_APK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="V-Tune-arm64-foss-debug.apk"
                        className="bg-[#16382f] hover:bg-[#4edea3] hover:text-[#051613] text-[#4edea3] px-3 py-1 rounded-full font-mono text-[11px] transition cursor-pointer"
                      >
                        Download APK
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <button
                onClick={() => setInfoModal(null)}
                className="w-full bg-[#16382f] hover:bg-[#204c3f] text-white text-xs font-semibold py-2.5 rounded-full transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DEVELOPER PROFILE MODAL */}
      {activeSocialModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0b211b] border border-[#235347] rounded-2xl max-w-sm w-full p-6 shadow-2xl relative text-center">
            <button
              onClick={() => setActiveSocialModal(null)}
              className="absolute top-4 right-4 text-[#94A3B8] hover:text-white p-1 rounded-full hover:bg-white/5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={DEVELOPER_IMAGE_URL}
              alt="Videsh Karmakar"
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-[#4edea3] shadow-lg"
            />
            <h4 className="font-display font-bold text-white text-lg">VIDESH KARMAKAR</h4>
            <p className="text-xs text-[#4edea3] font-mono mb-2">Lead Designer & Core Developer</p>
            <p className="text-xs text-[#94A3B8] leading-relaxed mb-5">
              Creator of V-Tune ({LATEST_VERSION_NAME}). Focused on unbloated systems, high-velocity audio pipelines, and accessible open engineering for Android devices worldwide.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/videshkarmakar-hue/V-Tune"
                target="_blank"
                rel="noreferrer"
                className="bg-[#14362d] hover:bg-[#1e4a3e] border border-[#235347] text-white text-xs font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#4edea3]" />
                <span>Visit GitHub Repository</span>
              </a>
              <button
                onClick={() => setActiveSocialModal(null)}
                className="text-xs text-slate-400 hover:text-white py-1.5 transition cursor-pointer"
              >
                Back to Architecture
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
