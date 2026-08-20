import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Act01 from './pages/LoginAuthentication'
import Act02 from './pages/StudentGradeEvaluation'
import Act03 from './pages/PasswordStrengthChecker'
import Act04 from './pages/ElectricityBillCalculator'
import Act05 from './pages/EmployeeAttendanceChecker'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity-1" element={<Act01 />} />
          <Route path="/activity-2" element={<Act02 />} />
          <Route path="/activity-3" element={<Act03 />} />
          <Route path="/activity-4" element={<Act04 />} />
          <Route path="/activity-5" element={<Act05 />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
