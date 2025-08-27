import { Bar, BarChart, Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Flame, Bell, Lightbulb, Calendar, CheckCircle2, Menu, LogOut } from 'lucide-react'
import type { ReactNode } from 'react'
import './App.css'

const teamPieData = [
  { name: 'Hyderabad', value: 20, color: '#0ea5e9' },
  { name: 'Delhi', value: 16, color: '#93c5fd' },
  { name: 'Bangalore', value: 55, color: '#34d399' },
  { name: 'Other', value: 9, color: '#22c55e' },
]

const pipelineBarData = [
  { stage: 'New', value: 110, color: '#22c55e' },
  { stage: 'Contacted', value: 80, color: '#10b981' },
  { stage: 'Shortlisted', value: 60, color: '#86efac' },
  { stage: 'Hot', value: 30, color: '#fb923c' },
]

function StatCard({ icon, title, value }: { icon: ReactNode; title: string; value: string | number }) {
  return (
    <div className="card p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-slate-600">{icon}<span className="text-sm font-medium">{title}</span></div>
      <div className="text-4xl font-semibold">{value}</div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-full grid grid-cols-[260px_1fr]">
      {/* Sidebar */}
      <aside className="bg-emerald-900 text-emerald-50 flex flex-col">
        <div className="h-16 flex items-center gap-3 px-4 border-b border-emerald-800">
          <div className="w-9 h-9 rounded bg-emerald-700" />
          <div className="font-semibold">Lands & Homes</div>
        </div>
        <nav className="flex-1 py-3 text-sm">
          <a className="flex items-center gap-3 px-4 h-10 bg-emerald-800/60" href="#">
            <Menu size={16} /> CRM Dashboard
          </a>
          <div className="px-4 py-2 opacity-70">My Listings</div>
          <div className="px-4 py-2 opacity-70">My Leads</div>
          <div className="px-4 py-2 opacity-70">Property Requests</div>
          <div className="px-4 py-2 opacity-70">My Team</div>
          <div className="px-4 py-2 opacity-70">My Campaigns</div>
          <div className="px-4 py-2 opacity-70">My Activity</div>
          <div className="px-4 py-2 opacity-70">My Wallet</div>
          <div className="px-4 py-2 opacity-70">My Profile</div>
          <div className="px-4 py-2 opacity-70">Help & Support</div>
        </nav>
        <button className="m-4 inline-flex items-center gap-2 rounded-lg bg-emerald-800 px-3 py-2 text-emerald-100">
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="bg-slate-100">
        <header className="h-16 border-b bg-white flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">CRM Dashboard</h1>
        </header>

        <div className="p-6 space-y-6">
          {/* Top stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon={<Flame className="text-amber-500" size={18} />} title="Hot Leads" value={82} />
            <StatCard icon={<Bell className="text-slate-600" size={18} />} title="Follow-ups Due Today" value={0} />
            <StatCard icon={<Lightbulb className="text-purple-600" size={18} />} title="Smart Suggestions" value={14} />
            <StatCard icon={<Calendar className="text-slate-600" size={18} />} title="Meetings Scheduled" value={0} />
          </div>

          {/* Lead pipeline & side widgets */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="card p-5 xl:col-span-2">
              <div className="font-semibold mb-4">Leads Captured by Ads</div>
              <div className="h-28">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pipelineBarData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
                    <Tooltip cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
                    <Bar dataKey="value" radius={[6, 6, 6, 6]}>
                      {pipelineBarData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-6 text-xs mt-3">
                {pipelineBarData.map((s) => (
                  <div key={s.stage} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                    <span className="muted">{s.stage}</span>
                    <span className="font-medium">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="card p-5">
                <div className="font-semibold mb-2">Upcoming Meetings</div>
                <div className="text-xs muted mb-3">Meetings</div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="text-emerald-500" size={16} />
                  You have no meetings scheduled yet.
                </div>
              </div>

              <div className="card p-5">
                <div className="font-semibold mb-2">Follow-ups Due</div>
                <div className="text-xs muted mb-3">Task Due</div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="text-emerald-500" size={16} />
                  All follow-up tasks are completed.
                </div>
              </div>
            </div>
          </div>

          {/* Team performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="font-semibold mb-4">Team Performance</div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-cyan-600"></span>
                    <div className="flex-1">Hyderabad</div>
                    <div className="text-slate-600">7 Leads</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                    <div className="flex-1">Delhi</div>
                    <div className="text-slate-600">6 Leads</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <div className="flex-1">Bangalore</div>
                    <div className="text-slate-600">8 Leads</div>
                  </div>
                </div>

                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
                      <Pie
                        data={teamPieData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={40}
                        outerRadius={72}
                        paddingAngle={4}
                      >
                        {teamPieData.map((entry, index) => (
                          <Cell key={`slice-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
