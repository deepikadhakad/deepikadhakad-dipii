export default function Sidebar() {
  return (
    <div className="sidebar-inner">
      <div className="brand">
        <div className="brand-mark">L&H</div>
        <div className="brand-name">Lands & Homes</div>
      </div>

      <nav className="nav">
        <a className="nav-item active" href="#">
          <span className="nav-ico">📊</span>
          <span>CRM Dashboard</span>
          <span className="nav-chevron">›</span>
        </a>
        <a className="nav-item" href="#"><span className="nav-ico">📋</span><span>My Listings</span></a>
        <a className="nav-item" href="#"><span className="nav-ico">👤</span><span>My Leads</span></a>
        <a className="nav-item" href="#"><span className="nav-ico">🏠</span><span>Property Requests</span></a>
        <a className="nav-item" href="#"><span className="nav-ico">👥</span><span>My Team</span></a>
        <a className="nav-item" href="#"><span className="nav-ico">📣</span><span>My Campaigns</span></a>
        <a className="nav-item" href="#"><span className="nav-ico">🕒</span><span>My Activity</span></a>
        <a className="nav-item" href="#"><span className="nav-ico">👛</span><span>My Wallet</span></a>
        <a className="nav-item" href="#"><span className="nav-ico">⚙️</span><span>My Profile</span></a>
        <a className="nav-item" href="#"><span className="nav-ico">❓</span><span>Help & Support</span></a>
      </nav>

      <div className="logout">
        <button type="button" className="logout-btn">
          <span className="nav-ico">⎋</span>
          Logout
        </button>
      </div>
    </div>
  )
}

