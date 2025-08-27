import './sidebar.css'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">L&H</div>
        <div className="brand-text">
          <div className="brand-title">Lands & Homes</div>
          <div className="brand-sub">CRM</div>
        </div>
      </div>
      <nav className="nav">
        <a className="nav-item active"><span className="nav-ic">🏠</span><span>CRM Dashboard</span><span className="pip">›</span></a>
        <a className="nav-item"><span className="nav-ic">📄</span><span>My Listings</span></a>
        <a className="nav-item"><span className="nav-ic">👥</span><span>My Leads</span></a>
        <a className="nav-item"><span className="nav-ic">📨</span><span>Property Requests</span></a>
        <a className="nav-item"><span className="nav-ic">👤</span><span>My Team</span></a>
        <a className="nav-item"><span className="nav-ic">📣</span><span>My Campaigns</span></a>
        <a className="nav-item"><span className="nav-ic">🕒</span><span>My Activity</span></a>
        <a className="nav-item"><span className="nav-ic">👛</span><span>My Wallet</span></a>
        <a className="nav-item"><span className="nav-ic">⚙️</span><span>My Profile</span></a>
        <a className="nav-item"><span className="nav-ic">❓</span><span>Help & Support</span></a>
      </nav>
      <div className="sidebar-footer">
        <button className="logout">⎋ Logout</button>
      </div>
    </aside>
  )
}

