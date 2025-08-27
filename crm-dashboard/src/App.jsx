import './App.css'
import './styles/dashboard.css'
import './styles/sidebar.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content-area">
        <Dashboard />
      </main>
    </div>
  )
}

export default App
