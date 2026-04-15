'use client';

import Link from 'next/link';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── NAV ── */}
      <nav className="uber-nav">
        <div className="max-w-[1136px] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-black font-bold text-xs">IP</span>
              </div>
              <span className="font-bold text-lg tracking-tight">IndustryPlus</span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Link href="/driver" className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">Drivers</Link>
              <Link href="/carrier" className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">Carriers</Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">Compliance</Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors">About</Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="text-sm font-medium hover:opacity-60 transition-opacity">Help</Link>
            <Link href="/driver" className="text-sm font-medium hover:opacity-60 transition-opacity">Log in</Link>
            <Link href="/carrier" className="btn-secondary !text-sm !py-2 !px-4">Sign up</Link>
          </div>
        </div>
      </nav>

      {/* ── HERO: Uber "Go anywhere" pattern ── */}
      <section className="section-white !py-0">
        <div className="max-w-[1136px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[520px]">
            {/* Left: widget */}
            <div>
              <h1 className="text-[52px] font-bold leading-[1.15] tracking-tight mb-6">
                Find qualified<br />CDL drivers
              </h1>

              {/* Match widget — Uber booking pattern */}
              <div className="space-y-3 max-w-md">
                <button className="chip">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Available now
                </button>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-black" />
                  <input className="uber-input !pl-10" placeholder="Pickup location" />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-black rounded-sm" />
                  <input className="uber-input !pl-10" placeholder="Dropoff location" />
                </div>

                <Link href="/carrier" className="btn-primary w-full text-center mt-2">
                  See matches
                </Link>
              </div>

              <Link href="/driver" className="btn-ghost mt-4 text-sm">
                Log in to see your recent activity →
              </Link>
            </div>

            {/* Right: illustration placeholder */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-[420px] h-[340px] rounded-2xl bg-gray-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50" />
                <div className="relative text-center">
                  <div className="w-20 h-20 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h.883c.26 0 .513.075.73.216l2.556 1.834a1.125 1.125 0 0 0 .73.216h1.895a1.125 1.125 0 0 0 .76-.327l1.83-2.054a1.125 1.125 0 0 1 .828-.371h2.286a1.125 1.125 0 0 0 .891-.465l1.155-1.54" />
                    </svg>
                  </div>
                  <p className="text-lg font-bold">47 active drivers</p>
                  <p className="text-sm text-gray-500 mt-1">in your area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE STRIP ── */}
      <section className="border-t border-gray-100">
        <div className="max-w-[1136px] mx-auto px-8 py-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Ready to get started?</p>
            <p className="font-bold text-lg mt-0.5">Schedule screening ahead</p>
          </div>
          <Link href="/carrier" className="btn-primary">Get started</Link>
        </div>
      </section>

      {/* ── SUGGESTIONS: Uber card grid ── */}
      <section className="section-gray">
        <div className="max-w-[1136px] mx-auto px-8">
          <h2 className="text-[32px] font-bold tracking-tight mb-8">Platform</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Screening',
                desc: 'Automated background checks, MVR pulls, and drug screens — FCRA compliant.',
                color: 'from-blue-50 to-blue-100',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                ),
              },
              {
                title: 'DQF Assembly',
                desc: 'Driver qualification files assembled automatically. FMCSA Part 391 compliant.',
                color: 'from-amber-50 to-orange-100',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
              },
              {
                title: 'Matching',
                desc: 'Connect qualified drivers with open carrier positions. Smart matching engine.',
                color: 'from-emerald-50 to-emerald-100',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div key={i} className="uber-card-flat p-6 flex flex-col">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{card.desc}</p>
                <Link href="/carrier" className="btn-ghost text-sm mt-4">Details →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── "Ready to travel?" → "Ready to hire?" ── */}
      <section className="section-white">
        <div className="max-w-[1136px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] font-bold tracking-tight leading-[1.15] mb-4">
                Your perfect<br />driver is a few<br />clicks away.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md">
                Browse verified CDL drivers. Check qualifications, compliance status, and match history — all in one place.
              </p>
              <div className="flex gap-3">
                <Link href="/carrier" className="btn-accent">Find drivers</Link>
                <Link href="/driver" className="btn-secondary">Join as driver</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[380px] h-[280px] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex -space-x-3 mb-4 justify-center">
                    {['JR', 'MS', 'DC', 'SW'].map((initials, i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-white">
                        <span className="font-bold text-sm">{initials}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-bold">2,400+ drivers</p>
                  <p className="text-sm text-gray-500">across 340 carriers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRIVE SECTION: Uber "Drive when you want" pattern ── */}
      <section className="section-gray">
        <div className="max-w-[1136px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="w-[380px] h-[280px] rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <p className="font-bold text-lg">Get matched fast</p>
                  <p className="text-sm text-gray-500">with top carriers</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[36px] font-bold tracking-tight leading-[1.15] mb-4">
                Drive when you<br />want, get matched<br />where you need.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md">
                Upload your CDL, get verified, and receive matches from carriers hiring in your area. Your DQF stays current automatically.
              </p>
              <div className="flex gap-3">
                <Link href="/driver" className="btn-primary">Get started</Link>
                <Link href="#" className="btn-ghost">Already have an account? Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS: Uber "Business" pattern ── */}
      <section className="section-white">
        <div className="max-w-[1136px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[36px] font-bold tracking-tight leading-[1.15] mb-4">
                The compliance<br />platform, reimagined<br />for carriers.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md">
                IndustryPlus automates the regulated workflows that carriers perform on every driver. Background screening, DQF assembly, FCRA workflows, CCPA erasure — all in one system of record.
              </p>
              <div className="flex gap-3">
                <Link href="/carrier" className="btn-accent">Get started</Link>
                <Link href="#" className="btn-secondary">Check out our solutions</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[380px] rounded-2xl bg-black p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded gradient-bg flex items-center justify-center">
                    <span className="text-black font-bold text-[10px]">IP</span>
                  </div>
                  <span className="font-bold text-sm">Compliance Score</span>
                </div>
                <p className="text-5xl font-bold mb-1">99.2%</p>
                <p className="text-sm text-gray-500 mb-4">FMCSA · FCRA · CCPA</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'FMCSA', value: '98%' },
                    { label: 'FCRA', value: '92%' },
                    { label: 'CCPA', value: '100%' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3 text-center">
                      <p className="text-xl font-bold">{s.value}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAFETY: Uber "Safety, simplified" pattern ── */}
      <section className="section-gray">
        <div className="max-w-[1136px] mx-auto px-8 text-center">
          <h2 className="text-[36px] font-bold tracking-tight mb-4">Compliance, simplified.</h2>
          <p className="text-gray-600 text-lg max-w-lg mx-auto mb-8">
            Every action is audit-ready. Merkle-signed audit logs, 7-year retention, tamper-evident records.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '7yr', label: 'Audit retention' },
              { value: '0', label: 'FCRA violations' },
              { value: '24/7', label: 'Monitoring' },
              { value: '3', label: 'Compliance frameworks' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-bold">{s.value}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPS: Uber "Easier in the apps" pattern ── */}
      <section className="section-white">
        <div className="max-w-[1136px] mx-auto px-8">
          <h2 className="text-[36px] font-bold tracking-tight mb-8">Get started today</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/driver" className="uber-card p-6 flex items-center justify-between hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Driver Portal</p>
                  <p className="text-sm text-gray-500">Manage your career</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
            <Link href="/carrier" className="uber-card p-6 flex items-center justify-between hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Carrier Portal</p>
                  <p className="text-sm text-gray-500">Manage your fleet</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER: exact Uber dark footer ── */}
      <footer className="section-black !py-12">
        <div className="max-w-[1136px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded gradient-bg flex items-center justify-center">
                  <span className="text-black font-bold text-[10px]">IP</span>
                </div>
                <span className="font-bold">IndustryPlus</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Regulated workforce OS for US commercial motor carriers.</p>
            </div>
            {[
              { title: 'Company', links: ['About us', 'Our offerings', 'Newsroom', 'Investors', 'Blog', 'Careers'] },
              { title: 'Products', links: ['Ride', 'Drive', 'Deliver', 'Uber for Business', 'Uber Freight'] },
              { title: 'Global citizenship', links: ['Safety', 'Diversity and Inclusion', 'Sustainability'] },
              { title: 'Travel', links: ['Reserve', 'Airports', 'Cities'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-sm mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.43-.01-.64.96-.69 1.79-1.56 2.45-2.55z" /></svg>
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></svg>
            </div>
            <p className="text-xs text-gray-600">© 2026 IndustryPlus Technologies Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
