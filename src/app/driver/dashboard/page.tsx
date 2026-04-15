'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui';

const matches = [
  { company: 'Swift Transport', role: 'OTR Driver', pay: '$0.58/mi', status: 'Under Review', statusColor: 'default' as const },
  { company: 'Knight Logistics', role: 'Regional CDL-A', pay: '$1,200/wk', status: 'Qualified', statusColor: 'success' as const },
  { company: 'Schneider National', role: 'Intermodal', pay: '$0.62/mi', status: 'New', statusColor: 'gradient' as const },
];

const documents = [
  { name: 'CDL — Class A', status: 'Verified', icon: '🪪' },
  { name: 'Medical Certificate', status: 'Expiring Soon', icon: '🏥' },
  { name: 'Drug Screen', status: 'Verified', icon: '🧪' },
  { name: 'MVR Report', status: 'Verified', icon: '📋' },
];

const tabs = [
  { label: 'Home', icon: 'M2.25 12l8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25', active: true },
  { label: 'Matches', icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197', active: false },
  { label: 'Documents', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z', active: false },
  { label: 'Profile', icon: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z', active: false },
];

export default function DriverDashboard() {
  return (
    <div className="min-h-screen bg-neutral-950 max-w-md mx-auto relative">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-neutral-500 text-xs mb-0.5">Good morning</p>
            <h1 className="text-lg font-bold text-white">Marcus Johnson</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
            <span className="text-neutral-400 font-semibold text-sm">MJ</span>
          </div>
        </div>
      </div>

      {/* Status card */}
      <div className="px-5 mb-5">
        <div className="rounded-2xl p-5 bg-gradient-to-r from-yellow-400 to-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-neutral-950/60 text-[11px] uppercase tracking-wider font-semibold mb-1">Qualification Status</p>
              <p className="text-neutral-950 font-bold text-xl">Fully Qualified</p>
              <p className="text-neutral-950/60 text-sm mt-0.5">DQF complete · 3 active matches</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-neutral-950/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-neutral-900 rounded-xl p-4 text-left hover:bg-neutral-800 transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">Upload</p>
            <p className="text-neutral-500 text-xs">CDL, MEC, Drug</p>
          </button>
          <button className="bg-neutral-900 rounded-xl p-4 text-left hover:bg-neutral-800 transition-colors shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">Consents</p>
            <p className="text-neutral-500 text-xs">Review granted</p>
          </button>
        </div>
      </div>

      {/* Matches */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-white">Recent Matches</h2>
          <span className="text-xs text-neutral-500">View all</span>
        </div>
        <div className="space-y-2.5">
          {matches.map((m, i) => (
            <div key={i} className="bg-neutral-900 rounded-xl p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                    <span className="text-neutral-400 font-bold text-sm">{m.company[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{m.company}</p>
                    <p className="text-neutral-500 text-xs">{m.role}</p>
                  </div>
                </div>
                <Badge variant={m.statusColor} size="sm">{m.status}</Badge>
              </div>
              <div className="flex items-center justify-between pl-[52px]">
                <span className="text-white text-sm font-semibold">{m.pay}</span>
                <span className="text-neutral-500 text-xs">View →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance alert */}
      <div className="px-5 mb-24">
        <div className="bg-neutral-900 rounded-xl p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <div>
            <p className="text-white text-sm font-medium">Medical Certificate expiring</p>
            <p className="text-neutral-500 text-xs mt-0.5">Your MEC expires in 45 days. Upload a renewal to stay qualified.</p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-900 safe-bottom z-50">
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => (
            <button key={tab.label} className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors ${tab.active ? 'text-white' : 'text-neutral-600'}`}>
              <svg className="w-5 h-5" fill={tab.active ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
              </svg>
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
