'use client';

import Link from 'next/link';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Gradient top bar */}
      <div className="gradient-bar w-full" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-black font-bold text-sm">IP</span>
          </div>
          <span className="font-bold text-lg tracking-tight">IndustryPlus</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-600">Product</Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-600">Solutions</Link>
          <Link href="#" className="text-sm font-medium text-black hover:text-gray-600">Safety</Link>
          <Link href="#" className="pill-btn pill-btn-black text-sm">Get started</Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <h1 className="text-5xl md:text-[56px] font-bold leading-[1.1] tracking-tight mb-5">
                Trucking<br />
                compliance,<br />
                <span className="bg-clip-text text-transparent" style={{backgroundImage: 'var(--ip-gradient)'}}>
                  simplified.
                </span>
              </h1>
              <p className="text-lg text-[--ip-body-gray] leading-relaxed mb-8 max-w-md">
                Connect carriers with qualified CDL drivers. Automate screening, DQF assembly, and FMCSA compliance — all in one platform.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/carrier" className="pill-btn pill-btn-gradient text-base">
                  I&apos;m a Company →
                </Link>
                <Link href="/driver" className="pill-btn pill-btn-white text-base">
                  I&apos;m a Driver
                </Link>
              </div>
            </div>

            {/* Right: Account cards */}
            <div className="space-y-4">
              <Link href="/driver" className="block group">
                <div className="uber-card p-6 hover:shadow-[0_4px_24px_rgba(0,0,0,0.16)] transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[--ip-chip-gray] flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">Driver</h3>
                      <p className="text-sm text-[--ip-body-gray]">View matches, upload documents, track compliance.</p>
                    </div>
                    <svg className="w-5 h-5 text-[--ip-muted] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/carrier" className="block group">
                <div className="uber-card-lg p-6 bg-black text-white hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">Company</h3>
                      <p className="text-sm text-gray-400">Manage drivers, compliance, billing, and your fleet.</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-2">
                {[
                  { value: '2,400+', label: 'CDL Drivers' },
                  { value: '340', label: 'Carriers' },
                  { value: '99.2%', label: 'Compliance' },
                ].map((s, i) => (
                  <div key={i} className="text-center py-3">
                    <p className="text-2xl font-bold">{s.value}</p>
                    <p className="text-xs text-[--ip-body-gray] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="border-t border-gray-100 mt-16">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '📋', title: 'DQF Assembly', desc: 'Automated driver qualification files' },
              { icon: '🔍', title: 'Background Screening', desc: 'FCRA-compliant checks' },
              { icon: '📊', title: 'Compliance Tracking', desc: 'FMCSA, CCPA, NYC LL144' },
              { icon: '🤝', title: 'Driver Matching', desc: 'Connect qualified drivers' },
            ].map((f, i) => (
              <div key={i}>
                <span className="text-2xl">{f.icon}</span>
                <h4 className="font-bold text-sm mt-2">{f.title}</h4>
                <p className="text-sm text-[--ip-body-gray] mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark footer */}
      <footer className="dark-section">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                  <span className="text-black font-bold text-xs">IP</span>
                </div>
                <span className="font-bold text-white">IndustryPlus</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Regulated workforce operating system for US commercial motor carriers.</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Security', 'Compliance'] },
              { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'FCRA', 'CCPA'] },
            ].map((col, i) => (
              <div key={i}>
                <h5 className="font-bold text-sm mb-3">{col.title}</h5>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-900 mt-8 pt-6">
            <p className="text-xs text-gray-600">© 2026 IndustryPlus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
