'use client';

import Link from 'next/link';

export default function Landing() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      {/* Top nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <span className="text-neutral-950 font-bold text-sm">IP</span>
          </div>
          <span className="text-white font-semibold tracking-tight">IndustryPlus</span>
        </div>
        <Link href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
          Documentation
        </Link>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-16">
        <div className="text-center max-w-xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-neutral-400 font-medium">Platform Status: Operational</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
            Workforce compliance,<br />
            <span className="gradient-text">simplified.</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-md mx-auto">
            Connect carriers with qualified CDL drivers. Automate screening, DQF assembly, and FMCSA compliance.
          </p>
        </div>

        {/* Account type selection */}
        <div className="w-full max-w-lg">
          <p className="text-center text-xs text-neutral-500 font-medium uppercase tracking-widest mb-5">Choose your account</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Driver */}
            <Link href="/driver" className="group">
              <div className="relative bg-neutral-900 rounded-2xl p-6 border border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/80">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-neutral-700 transition-colors">
                  <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">I&apos;m a Driver</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                  View matches, manage documents, track your DQF status.
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
                  Sign in
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Company */}
            <Link href="/carrier" className="group">
              <div className="relative rounded-2xl p-6 border border-neutral-800 transition-all duration-300 hover:border-orange-500/30 overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 group-hover:from-yellow-500/15 group-hover:to-orange-500/15 transition-all" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-1">I&apos;m a Company</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                    Manage drivers, compliance, billing, and your fleet.
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-orange-400 group-hover:text-orange-300 transition-colors">
                    Sign in
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-neutral-900">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <p className="text-xs text-neutral-600">© 2026 IndustryPlus. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Terms</Link>
            <Link href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
