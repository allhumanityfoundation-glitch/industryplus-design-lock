'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';

export default function DriverLogin() {
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
            <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Driver sign in</h1>
            <p className="text-neutral-500 text-sm">Access your matches, documents, and compliance status.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="driver@example.com"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-400 mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all"
              />
            </div>
            <Link href="/driver/dashboard" className="block">
              <Button variant="primary" fullWidth>Sign in</Button>
            </Link>
          </div>

          <p className="text-center text-xs text-neutral-600 mt-6">
            Don&apos;t have an account? <Link href="#" className="text-neutral-400 hover:text-white">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
