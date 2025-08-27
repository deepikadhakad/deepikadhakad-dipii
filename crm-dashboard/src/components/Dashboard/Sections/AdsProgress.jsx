export default function AdsProgress() {
  return (
    <section className="card ads-progress">
      <h3>Leads Captured by Ads</h3>
      <div className="progress">
        <div className="bar new" style={{ width: '30%' }} />
        <div className="bar contacted" style={{ width: '35%' }} />
        <div className="bar shortlisted" style={{ width: '20%' }} />
        <div className="bar hot" style={{ width: '15%' }} />
      </div>
      <div className="legend">
        <span className="dot new" /> New 110
        <span className="dot contacted" /> Contacted
        <span className="dot shortlisted" /> Shortlisted
        <span className="dot hot" /> Hot
      </div>
    </section>
  )
}

