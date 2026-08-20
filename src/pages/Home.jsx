import { Link } from 'react-router-dom'
import '../css/home.css'

function Home() {
  return (
    <section className="home-page page-enter">
      <div className="hero-card">
        <div className="eyebrow">GROUP ACTIVITY</div>
        <h1>React Portal</h1>
      </div>

      <div className="home-grid">
        <Link to="/activity-1" className="activity-preview">
          <span className="activity-number">01</span>
          <div>
            <h2>Act 1</h2>
            <p>Login Authentication</p>
          </div>
          <span className="arrow">→</span>
        </Link>

        <Link to="/activity-2" className="activity-preview">
          <span className="activity-number">02</span>
          <div>
            <h2>Act 2</h2>
            <p>Student Grade Evaluation</p>
          </div>
          <span className="arrow">→</span>
        </Link>

        <Link to="/activity-3" className="activity-preview">
          <span className="activity-number">03</span>
          <div>
            <h2>Act 3</h2>
            <p>Password Strength Checker</p>
          </div>
          <span className="arrow">→</span>
        </Link>

        <Link to="/activity-4" className="activity-preview">
          <span className="activity-number">04</span>
          <div>
            <h2>Act 4</h2>
            <p>Electricity Bill Calculator</p>
          </div>
          <span className="arrow">→</span>
        </Link>

        <Link to="/activity-5" className="activity-preview">
          <span className="activity-number">05</span>
          <div>
            <h2>Act 5</h2>
            <p>Employee Attendance Checker</p>
          </div>
          <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}

export default Home
