import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <NavLink to="/" end className="brand">
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/activity-1" className="nav-link">Activity 1</NavLink>
          <NavLink to="/activity-2" className="nav-link">Activity 2</NavLink>
          <NavLink to="/activity-3" className="nav-link">Activity 3</NavLink>
          <NavLink to="/activity-4" className="nav-link">Activity 4</NavLink>
          <NavLink to="/activity-5" className="nav-link">Activity 5</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar