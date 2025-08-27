import TopStats from './TopStats'
import AdsProgress from './Sections/AdsProgress'
import TeamPerformance from './Sections/TeamPerformance'
import Meetings from './Sections/Meetings'
import FollowUps from './Sections/FollowUps'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="page-header">
        <h1>CRM Dashboard</h1>
      </div>

      <TopStats />

      <div className="grid-2-1">
        <AdsProgress />
        <div className="right-column">
          <Meetings />
          <FollowUps />
        </div>
      </div>

      <TeamPerformance />
    </div>
  )
}

