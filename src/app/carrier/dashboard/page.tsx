'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui';

const stats = [
  { label: 'Active Drivers', value: '47', change: '+3 this week', up: true },
  { label: 'Pending Compliance', value: '12', change: '5 need action', up: false },
  { label: 'Open Matches', value: '23', change: '+8 this month', up: true },
  { label: 'DQF Completion', value: '89%', change: '↑ from 82%', up: true },
];

const pipeline = [
  { name: 'James Rodriguez', initials: 'JR', status: 'Screening', progress: 40, days: 3 },
  { name: 'Maria Santos', initials: 'MS', status: 'Drug Test', progress: 60, days: 1 },
  { name: 'David Chen', initials: 'DC', status: 'MVR Pull', progress: 40, days: 2 },
  { name: 'Sarah Williams', initials: 'SW', status: 'DQF Assembly', progress: 80, days: 0 },
  { name: 'Robert Kim', initials: 'RK', status: 'Background', progress: 40, days: 4 },
];

const activity = [
  { action: 'Drug screen cleared', driver: 'James Rodriguez', time: '2h ago' },
  { action: 'MVR pulled', driver: 'Maria Santos', time: '4h ago' },
  { action: 'FCRA pre-adverse sent', driver: 'Unknown Driver', time: '1d ago' },
  { action: 'DQF completed', driver: 'Sarah Williams', time: '1d ago' },
];

const sidebarNav = [
  { label: 'Dashboard', icon: 'M2.25 12l8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25', active: true },
  { label: 'Drivers', icon: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z', active: false },
  { label: 'Compliance', icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z', active: false },
  { label: 'Team', icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584', active: false },
  { label: 'Billing', icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z', active: false },
];

export default function CarrierDashboard() {
  return (
    <div className="min-h-screen bg-neutral-950 flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-60 bg-neutral-950 border-r border-neutral-900 flex flex-col z-50">
        {/* Logo */}
        <div className="h-16 flex items-center gap-2.5 px-5 border-b border-neutral-900">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <span className="text-neutral-950 font-bold text-xs">IP</span>
          </div>
          <div>
            <p className="text-white text-sm font-semibold tracking-tight">IndustryPlus</p>
            <p className="text-neutral-500 text-[10px]">Swift Transport</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3">
          <div className="space-y-0.5">
            {sidebarNav.map(({ label, icon, active }) => (
              <button
                key={label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/50'
                }`}
              >
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
                {label}
                {label === 'Compliance' && (
                  <span className="ml-auto w-5 h-5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-[10px] font-bold text-neutral-950 flex items-center justify-center">3</span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* User */}
        <div className="p-4 border-t border-neutral-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center">
              <span className="text-neutral-400 font-semibold text-xs">KS</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Kevin Smith</p>
              <p className="text-neutral-600 text-[10px]">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-60">
        {/* Top bar */}
        <header className="h-16 border-b border-neutral-900 flex items-center justify-between px-8 sticky top-0 bg-neutral-950/80 backdrop-blur-sm z-40">
          <h2 className="text-sm font-semibold text-white">Dashboard</h2>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors">
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors relative">
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-orange-500 rounded-full" />
            </button>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-neutral-900 rounded-xl p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <p className="text-neutral-500 text-[11px] uppercase tracking-wider font-medium mb-2">{s.label}</p>
                <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className={`text-xs font-medium ${s.up ? 'text-green-400' : 'text-amber-400'}`}>{s.change}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-6">
            {/* Pipeline */}
            <div className="col-span-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white">Driver Pipeline</h3>
                <span className="text-xs text-neutral-500">5 in progress</span>
              </div>
              <div className="bg-neutral-900 rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="text-left text-[11px] font-medium text-neutral-500 uppercase tracking-wider px-5 py-3">Driver</th>
                      <th className="text-left text-[11px] font-medium text-neutral-500 uppercase tracking-wider px-5 py-3">Status</th>
                      <th className="text-left text-[11px] font-medium text-neutral-500 uppercase tracking-wider px-5 py-3">Progress</th>
                      <th className="text-right text-[11px] font-medium text-neutral-500 uppercase tracking-wider px-5 py-3">Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pipeline.map((p, i) => (
                      <tr key={i} className="border-b border-neutral-800/50 last:border-0 hover:bg-neutral-800/30 transition-colors">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center">
                              <span className="text-neutral-400 font-semibold text-[11px]">{p.initials}</span>
                            </div>
                            <span className="text-sm text-white font-medium">{p.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3">
                          <Badge variant={p.days > 2 ? 'warning' : 'default'} size="sm">{p.status}</Badge>
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 bg-neutral-800 rounded-full overflow-hidden w-20">
                              <div className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all" style={{ width: `${p.progress}%` }} />
                            </div>
                            <span className="text-[11px] text-neutral-500">{p.progress}%</span>
                          </div>
                        </td>
                        <td className="px-5 py-3 text-right">
                          <span className={`text-sm font-medium ${p.days > 2 ? 'text-amber-400' : 'text-neutral-400'}`}>{p.days}d</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity */}
            <div className="col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white">Recent Activity</h3>
              </div>
              <div className="bg-neutral-900 rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden">
                <div className="divide-y divide-neutral-800/50">
                  {activity.map((a, i) => (
                    <div key={i} className="px-5 py-3.5">
                      <p className="text-sm text-white">{a.action}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-neutral-500">{a.driver}</p>
                        <p className="text-[11px] text-neutral-600">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance card */}
              <div className="mt-4 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-xl p-5 shadow-[0_0_0_1px_rgba(249,115,22,0.15)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-semibold">3 actions required</p>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed">FCRA pre-adverse deadline for James Rodriguez in 5 days. Review now.</p>
                <button className="mt-3 text-xs font-medium text-orange-400 hover:text-orange-300 transition-colors">
                  View compliance →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
