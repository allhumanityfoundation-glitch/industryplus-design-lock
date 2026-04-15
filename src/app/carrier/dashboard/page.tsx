'use client';

const stats = [
  { label: 'Active Drivers', value: '47', change: '+3 this week' },
  { label: 'Pending', value: '12', change: '5 need action' },
  { label: 'Open Matches', value: '23', change: '+8 this month' },
  { label: 'DQF Rate', value: '89%', change: '↑ from 82%' },
];

const pipeline = [
  { name: 'James Rodriguez', initials: 'JR', status: 'Screening', pct: 40, days: 3, urgent: true },
  { name: 'Maria Santos', initials: 'MS', status: 'Drug Test', pct: 60, days: 1, urgent: false },
  { name: 'David Chen', initials: 'DC', status: 'MVR Pull', pct: 40, days: 2, urgent: false },
  { name: 'Sarah Williams', initials: 'SW', status: 'DQF Assembly', pct: 80, days: 0, urgent: false },
  { name: 'Robert Kim', initials: 'RK', status: 'Background', pct: 40, days: 4, urgent: true },
  { name: 'Lisa Thompson', initials: 'LT', status: 'Qualified', pct: 100, days: 0, urgent: false },
];

const activity = [
  { action: 'Drug screen cleared', driver: 'James Rodriguez', time: '2h ago' },
  { action: 'MVR pulled', driver: 'Maria Santos', time: '4h ago' },
  { action: 'FCRA pre-adverse sent', driver: 'Unknown', time: '1d ago' },
  { action: 'DQF completed', driver: 'Sarah Williams', time: '1d ago' },
  { action: 'New driver added', driver: 'Robert Kim', time: '2d ago' },
];

export default function CarrierDashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-60 bg-black flex flex-col z-50">
        <div className="h-14 flex items-center gap-2 px-5 border-b border-white/10">
          <div className="w-6 h-6 rounded gradient-bg flex items-center justify-center">
            <span className="text-black font-bold text-[10px]">IP</span>
          </div>
          <span className="text-white font-bold text-sm">IndustryPlus</span>
        </div>

        <nav className="flex-1 py-4 px-3">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold px-3 mb-2">Swift Transport</p>
          {[
            { label: 'Dashboard', active: true },
            { label: 'Drivers', active: false },
            { label: 'Compliance', active: false, badge: '3' },
            { label: 'Team', active: false },
            { label: 'Billing', active: false },
            { label: 'Settings', active: false },
          ].map(({ label, active, badge }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5 ${
                active ? 'bg-white text-black' : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {label}
              {badge && (
                <span className="ml-auto w-5 h-5 rounded-full gradient-bg text-black text-[10px] font-bold flex items-center justify-center">{badge}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-gray-400 font-bold text-xs">KS</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Kevin Smith</p>
              <p className="text-gray-600 text-[10px]">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-60">
        {/* Header */}
        <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
          <h2 className="font-bold text-sm">Dashboard</h2>
          <div className="flex items-center gap-2">
            <button className="chip !text-xs !py-1.5 !px-3">
              <svg className="w-3.5 h-3.5 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              Search
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center relative">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <div className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full" />
            </button>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-5" style={{boxShadow: 'var(--ip-shadow-card)'}}>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold mb-1">{s.label}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{s.value}</p>
                  <span className="text-xs font-medium text-gray-500">{s.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-6">
            {/* Pipeline */}
            <div className="col-span-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm">Driver Pipeline</h3>
                <div className="flex gap-2">
                  <button className="chip active !text-xs !py-1 !px-3">All</button>
                  <button className="chip !text-xs !py-1 !px-3">Pending</button>
                  <button className="chip !text-xs !py-1 !px-3">Urgent</button>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden" style={{boxShadow: 'var(--ip-shadow-card)'}}>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider px-5 py-2.5">Driver</th>
                      <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider px-5 py-2.5">Status</th>
                      <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider px-5 py-2.5">Progress</th>
                      <th className="text-right text-[10px] font-bold text-gray-400 uppercase tracking-wider px-5 py-2.5">Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pipeline.map((p, i) => (
                      <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                              <span className="font-bold text-[11px] text-gray-500">{p.initials}</span>
                            </div>
                            <span className="text-sm font-medium">{p.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3">
                          <span className={`chip text-[11px] !py-0.5 !px-2.5 ${p.urgent ? '!bg-amber-50 !text-amber-700' : ''}`}>{p.status}</span>
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{width: `${p.pct}%`, background: p.pct === 100 ? '#22C55E' : 'var(--ip-gradient)'}} />
                            </div>
                            <span className="text-[11px] text-gray-400 font-medium">{p.pct}%</span>
                          </div>
                        </td>
                        <td className="px-5 py-3 text-right">
                          <span className={`text-sm font-medium ${p.urgent ? 'text-amber-500' : 'text-gray-400'}`}>
                            {p.days === 0 ? '—' : `${p.days}d`}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right column */}
            <div className="col-span-2 space-y-4">
              {/* Activity */}
              <div>
                <h3 className="font-bold text-sm mb-3">Recent Activity</h3>
                <div className="bg-white rounded-lg overflow-hidden" style={{boxShadow: 'var(--ip-shadow-card)'}}>
                  {activity.map((a, i) => (
                    <div key={i} className={`px-5 py-3 ${i < activity.length - 1 ? 'border-b border-gray-50' : ''}`}>
                      <p className="text-sm font-medium">{a.action}</p>
                      <div className="flex items-center justify-between mt-0.5">
                        <p className="text-xs text-gray-500">{a.driver}</p>
                        <p className="text-[11px] text-gray-400">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance alert — Uber style dark card */}
              <div className="bg-black rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <span className="font-bold text-sm">3 actions required</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">FCRA pre-adverse deadline for James Rodriguez in 5 days.</p>
                <button className="btn-accent text-xs mt-3 !py-2 !px-4">Review compliance</button>
              </div>

              {/* Quick actions */}
              <div className="flex gap-2 flex-wrap">
                <button className="chip !text-xs">+ Add Driver</button>
                <button className="chip !text-xs">Run Report</button>
                <button className="chip !text-xs">Export CSV</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
