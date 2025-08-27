function PieChart() {
  // Static pie chart using SVG to match the screenshot proportions
  return (
    <svg className="pie" viewBox="0 0 42 42">
      <circle className="slice s55" r="15.915" cx="21" cy="21" />
      <circle className="slice s20" r="15.915" cx="21" cy="21" />
      <circle className="slice s16" r="15.915" cx="21" cy="21" />
      <circle className="bg" r="15.915" cx="21" cy="21" />
      <text x="21" y="23" textAnchor="middle" className="pie-center">55%</text>
    </svg>
  )
}

export default function TeamPerformance() {
  return (
    <section className="card team-performance">
      <h3>Team Performance</h3>
      <div className="team-grid">
        <ul className="team-list">
          <li><span className="dot dark" /> <span className="city">Hyderabad</span> <span className="value">7 Leads</span></li>
          <li><span className="dot mid" /> <span className="city">Delhi</span> <span className="value">6 Leads</span></li>
          <li><span className="dot light" /> <span className="city">Bangalore</span> <span className="value">8 Leads</span></li>
        </ul>
        <PieChart />
      </div>
    </section>
  )
}

