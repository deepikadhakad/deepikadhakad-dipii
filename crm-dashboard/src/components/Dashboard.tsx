import './dashboard.css'
import { useEffect } from 'react'

export function Dashboard() {
  useEffect(() => {
    const canvas = document.getElementById('teamPie') as HTMLCanvasElement | null
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const values = [55, 16, 20, 9]
    const colors = ['#35a58b', '#bfe8de', '#187d66', '#0e3a3a']
    const total = values.reduce((a, b) => a + b, 0)
    let start = -Math.PI / 2
    values.forEach((val, i) => {
      const angle = (val / total) * Math.PI * 2
      ctx.beginPath()
      ctx.moveTo(120, 120)
      ctx.arc(120, 120, 110, start, start + angle)
      ctx.closePath()
      ctx.fillStyle = colors[i]
      ctx.fill()
      start += angle
    })
  }, [])

  return (
    <main className="main">
      <header className="header"><h1>CRM Dashboard</h1></header>

      <section className="kpis">
        <Kpi icon="🔥" title="Hot Leads" value="82" />
        <Kpi icon="📣" title="Follow-ups Due Today" value="0" />
        <Kpi icon="💡" title="Smart Suggestions" value="14" />
        <Kpi icon="🗓️" title="Meetings Scheduled" value="0" />
      </section>

      <section className="grid-2">
        <div className="panel">
          <div className="panel-title">Leads Captured by Ads</div>
          <div className="progress-bar">
            <div className="segment new" style={{ width: '55%' }} />
            <div className="segment contacted" style={{ width: '16%' }} />
            <div className="segment shortlisted" style={{ width: '20%' }} />
            <div className="segment hot" style={{ width: '9%' }} />
          </div>
          <ul className="legend">
            <li><span className="dot new" />New 110</li>
            <li><span className="dot contacted" />Contacted</li>
            <li><span className="dot shortlisted" />Shortlisted</li>
            <li><span className="dot hot" />Hot</li>
          </ul>
        </div>

        <div className="panel light">
          <div className="panel-title with-icon">Upcoming Meetings</div>
          <div className="checkline">
            <span className="check">✔</span>
            <span>You have no meetings scheduled yet.</span>
          </div>
        </div>
      </section>

      <section className="grid-2">
        <div className="panel">
          <div className="panel-title">Team Performance</div>
          <div className="team">
            <ul className="team-list">
              <li><span className="dot hyderabad" />Hyderabad <span className="muted">7 Leads</span></li>
              <li><span className="dot delhi" />Delhi <span className="muted">6 Leads</span></li>
              <li><span className="dot bangalore" />Bangalore <span className="muted">8 Leads</span></li>
            </ul>
            <div className="pie">
              <canvas id="teamPie" width="240" height="240" />
            </div>
          </div>
        </div>

        <div className="panel light">
          <div className="panel-title with-icon">Follow-ups Due</div>
          <div className="checkline">
            <span className="check">✔</span>
            <span>All follow-up tasks are completed.</span>
          </div>
        </div>
      </section>
    </main>
  )
}

function Kpi({ icon, title, value }: { icon: string; title: string; value: string }) {
  return (
    <div className="kpi-card">
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-meta">
        <div className="kpi-title">{title}</div>
        <div className="kpi-value">{value}</div>
      </div>
    </div>
  )
}

