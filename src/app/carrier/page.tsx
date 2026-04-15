'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';

export default function CarrierLogin() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      {/* Back */}
      <nav className="px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>
      </nav>

      {/* Login form */}
      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Company sign in</h1>
            <p className="text-neutral-500 text-sm">Manage your drivers, compliance, and fleet operations.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="admin@company.com"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
              />
            </div>
            <Link href="/carrier/dashboard" className="block">
              <Button variant="gradient" fullWidth>Sign in</Button>
            </Link>
          </div>

          <p className="text-center text-xs text-neutral-600 mt-6">
            Don&apos;t have a company account? <Link href="#" className="text-orange-400 hover:text-orange-300">Get started</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
