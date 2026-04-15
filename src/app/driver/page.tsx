'use client';

import Link from 'next/link';

export default function DriverLogin() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="gradient-bar w-full" />

      <nav className="px-8 py-5">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-[--ip-body-gray] hover:text-black transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <div className="w-12 h-12 rounded-full bg-[--ip-chip-gray] flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Driver</h1>
            <p className="text-[--ip-body-gray]">Sign in to view your matches and documents.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[--ip-body-gray] mb-1.5 uppercase tracking-wider">Email</label>
              <input type="email" placeholder="driver@example.com" className="uber-input" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[--ip-body-gray] mb-1.5 uppercase tracking-wider">Password</label>
              <input type="password" placeholder="••••••••" className="uber-input" />
            </div>
            <Link href="/driver/dashboard" className="block">
              <button className="pill-btn pill-btn-black w-full text-center text-base">Sign in</button>
            </Link>
          </div>

          <p className="text-center text-sm text-[--ip-body-gray] mt-6">
            No account? <Link href="#" className="font-medium text-black underline underline-offset-4">Create one</Link>
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-[--ip-muted]">Are you a company?</p>
            <Link href="/carrier" className="text-sm font-medium text-black underline underline-offset-4 mt-1 inline-block">
              Sign in as a company →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
