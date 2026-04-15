'use client';

const matches = [
  { company: 'Swift Transport', role: 'OTR Driver', pay: '$0.58/mi', status: 'Review', active: false },
  { company: 'Knight Logistics', role: 'Regional CDL-A', pay: '$1,200/wk', status: 'Qualified', active: true },
  { company: 'Schneider National', role: 'Intermodal', pay: '$0.62/mi', status: 'New', active: false },
];

const docs = [
  { name: 'CDL — Class A', status: '✓ Verified', ok: true },
  { name: 'Medical Certificate', status: 'Expires Jun 2026', ok: false },
  { name: 'Drug Screen', status: '✓ Verified', ok: true },
  { name: 'MVR Report', status: '✓ Verified', ok: true },
];

const tabs = ['Home', 'Matches', 'Docs', 'Profile'];

export default function DriverDashboard() {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto pb-20">
      <div className="gradient-bar w-full" />

      {/* Header */}
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-[--ip-muted] uppercase tracking-wider font-medium">Good morning</p>
          <h1 className="text-xl font-bold tracking-tight">Marcus Johnson</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-[--ip-chip-gray] flex items-center justify-center">
          <span className="font-bold text-sm text-[--ip-body-gray]">MJ</span>
        </div>
      </div>

      {/* Status banner — gradient */}
      <div className="px-5 mb-5">
        <div className="gradient-bg rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-black/50 text-[11px] uppercase tracking-wider font-bold mb-1">Status</p>
              <p className="text-black font-bold text-xl">Fully Qualified</p>
              <p className="text-black/50 text-sm">DQF complete · 3 matches</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions — Uber chip row */}
      <div className="px-5 mb-5 flex gap-2 overflow-x-auto">
        <button className="chip active">Upload Doc</button>
        <button className="chip">My Consents</button>
        <button className="chip">DSAR</button>
        <button className="chip">Notifications</button>
      </div>

      {/* Matches section */}
      <div className="px-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-sm">Matches</h2>
          <span className="text-xs text-[--ip-muted] font-medium">See all</span>
        </div>
        <div className="space-y-3">
          {matches.map((m, i) => (
            <div key={i} className="uber-card p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[--ip-chip-gray] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sm text-[--ip-body-gray]">{m.company[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">{m.company}</p>
                    <p className="text-xs text-[--ip-body-gray]">{m.role}</p>
                  </div>
                </div>
                <span className={`chip text-xs !px-3 !py-1 ${m.active ? 'active' : ''}`}>{m.status}</span>
              </div>
              <div className="flex items-center justify-between pl-[52px]">
                <span className="font-bold">{m.pay}</span>
                <span className="text-xs text-[--ip-muted] font-medium">View →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="px-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-sm">Documents</h2>
          <span className="text-xs text-[--ip-muted] font-medium">4/6 complete</span>
        </div>
        <div className="uber-card overflow-hidden">
          {docs.map((d, i) => (
            <div key={i} className={`flex items-center justify-between px-4 py-3 ${i < docs.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <span className="text-sm font-medium">{d.name}</span>
              <span className={`text-xs font-medium ${d.ok ? 'text-green-600' : 'text-[--ip-orange]'}`}>{d.status}</span>
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
              <p className="text-sm text-gray-400 mt-0.5">Expires in 45 days. Upload a renewal to stay qualified.</p>
              <button className="pill-btn pill-btn-white text-xs mt-3 !py-2 !px-4">Upload now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tab bar — Uber pill style */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-5 pb-3 safe-bottom z-50">
        <div className="bg-black rounded-full flex items-center justify-around py-3 px-2" style={{boxShadow: '0 4px 24px rgba(0,0,0,0.3)'}}>
          {tabs.map((tab, i) => (
            <button key={tab} className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all ${i === 0 ? 'bg-white text-black' : 'text-gray-400'}`}>
              {tab}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
