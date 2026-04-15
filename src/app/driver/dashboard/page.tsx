'use client';

import { Logo } from '@/components/shared/Logo';

const matches = [
  { company: 'Swift Transport', role: 'OTR Driver', pay: '$0.58/mi', status: 'Review' },
  { company: 'Knight Logistics', role: 'Regional CDL-A', pay: '$1,200/wk', status: 'Qualified' },
  { company: 'Schneider National', role: 'Intermodal', pay: '$0.62/mi', status: 'New' },
];

const docs = [
  { name: 'CDL — Class A', ok: true },
  { name: 'Medical Certificate', ok: false },
  { name: 'Drug Screen', ok: true },
  { name: 'MVR Report', ok: true },
  { name: 'Road Test Certificate', ok: true },
  { name: 'Employment Application', ok: true },
];

const tabs = ['Home', 'Activity', 'Documents', 'Account'];

export default function DriverDashboard() {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto pb-24">
      {/* Header */}
      <div className="bg-black text-white px-5 pt-5 pb-6">
        <div className="flex items-center justify-between mb-4">
          <Logo size="sm" light />
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-sm font-medium">MJ</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm">Good morning,</p>
        <h1 className="text-2xl font-bold tracking-tight">Marcus Johnson</h1>
      </div>

      {/* Status card */}
      <div className="px-5 -mt-5 mb-5">
        <div className="uber-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold mb-1">Status</p>
              <p className="font-bold text-lg">Fully Qualified</p>
              <p className="text-sm text-gray-500">DQF 5/6 · 3 matches</p>
            </div>
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{width: '83%', background: 'var(--ip-gradient)'}} />
          </div>
        </div>
      </div>

      {/* Quick actions — Uber chip row */}
      <div className="px-5 mb-5 flex gap-2 overflow-x-auto pb-1">
        <button className="chip active">Upload</button>
        <button className="chip">Consents</button>
        <button className="chip">DSAR</button>
        <button className="chip">Help</button>
      </div>

      {/* Matches */}
      <div className="px-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold">Matches</h2>
          <button className="text-sm text-gray-500 font-medium">See all</button>
        </div>
        <div className="space-y-3">
          {matches.map((m, i) => (
            <div key={i} className="uber-card p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-sm text-gray-500">{m.company[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-sm truncate">{m.company}</p>
                    <span className={`chip text-[11px] !py-0.5 !px-2.5 ml-2 flex-shrink-0 ${m.status === 'Qualified' ? 'active' : ''}`}>{m.status}</span>
                  </div>
                  <p className="text-xs text-gray-500">{m.role}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="font-bold text-sm">{m.pay}</span>
                    <span className="text-xs text-gray-400 font-medium">View →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="px-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold">Documents</h2>
          <span className="text-sm text-gray-500 font-medium">5/6</span>
        </div>
        <div className="uber-card overflow-hidden">
          {docs.map((d, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-3 ${i < docs.length - 1 ? 'border-b border-gray-50' : ''}`}>
              <span className="text-sm font-medium">{d.name}</span>
              {d.ok ? (
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              ) : (
                <span className="text-[11px] font-bold text-amber-500 uppercase">Expiring</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Alert */}
      <div className="px-5 mb-5">
        <div className="bg-black rounded-2xl p-5 text-white">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm">Medical Certificate expiring</p>
              <p className="text-sm text-gray-400 mt-0.5">Expires in 45 days. Upload a renewal.</p>
              <button className="btn-accent text-xs mt-3 !py-2 !px-4">Upload now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Uber-style floating pill bottom nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-5 pb-3 safe-bottom z-50">
        <div className="bg-white rounded-full flex items-center justify-around py-3 px-2" style={{boxShadow: '0 2px 16px rgba(0,0,0,0.12)'}}>
          {tabs.map((tab, i) => (
            <button key={tab} className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all ${i === 0 ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}>
              {tab}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
