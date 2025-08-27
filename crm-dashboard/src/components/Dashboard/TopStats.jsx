function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" aria-hidden>{icon}</div>
      <div className="stat-meta">
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  )
}

export default function TopStats() {
  return (
    <div className="top-stats">
      <StatCard icon="🔥" label="Hot Leads" value={82} />
      <StatCard icon="📣" label="Follow-ups Due Today" value={0} />
      <StatCard icon="🤖" label="Smart Suggestions" value={14} />
      <StatCard icon="🗓️" label="Meetings Scheduled" value={0} />
    </div>
  )
}

