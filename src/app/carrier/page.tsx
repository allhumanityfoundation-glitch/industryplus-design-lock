'use client';

import Link from 'next/link';

export default function CarrierLogin() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="gradient-bar w-full" />

      <nav className="px-8 py-5">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">Company</h1>
            <p className="text-gray-500">Sign in to manage your drivers and fleet.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Email</label>
              <input
                type="email"
                placeholder="admin@company.com"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all font-[var(--ip-font)]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all font-[var(--ip-font)]"
              />
            </div>
            <Link href="/carrier/dashboard" className="block">
              <button className="pill-btn pill-btn-gradient w-full text-center text-base">Sign in</button>
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            No company account? <Link href="#" className="font-medium text-white underline underline-offset-4">Get started</Link>
          </p>

          <div className="mt-8 pt-6 border-t border-gray-900 text-center">
            <p className="text-xs text-gray-600">Are you a driver?</p>
            <Link href="/driver" className="text-sm font-medium text-white underline underline-offset-4 mt-1 inline-block">
              Sign in as a driver →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
