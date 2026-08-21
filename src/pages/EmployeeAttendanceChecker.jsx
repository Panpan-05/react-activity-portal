import { useState } from 'react'
import '../css/EmployeeAttendanceChecker.css'

function EmployeeAttendanceChecker() {
  const [employeeName, setEmployeeName] = useState('')
  const [timeIn, setTimeIn] = useState('')
  const [result, setResult] = useState(null)

  const checkAttendance = () => {
    const numericTime = Number(timeIn)

    if (!employeeName.trim() || timeIn === '' || Number.isNaN(numericTime)) {
      setResult({ error: 'Please enter an employee name and a valid time.' })
      return
    }

    const attendanceStatus = numericTime <= 8
      ? 'On Time'
      : numericTime <= 9
        ? 'Late'
        : 'Very Late'

    const followUpMessage = {
      'On Time': 'Good job!',
      Late: 'Please be on time tomorrow.',
      'Very Late': 'Report to your supervisor.',
    }[attendanceStatus]

    setResult({
      employeeName: employeeName.trim(),
      timeIn: numericTime,
      attendanceStatus,
      followUpMessage,
    })
  }

  const resetAttendance = () => {
    setEmployeeName('')
    setTimeIn('')
    setResult(null)
  }

  return (
    <section className="attendance-page page-enter">
      <div className="attendance-header">
        <div className="activity-number">5</div>

        <div>
          <div className="activity-label">ACTIVITY 5</div>
          <h1>Employee Attendance Checker</h1>
        </div>
      </div>

      <p className="attendance-description">
        Classify a decimal time-in value as On Time, Late, or Very Late.
      </p>

      <div className="attendance-content">
        <div className="attendance-card input-card">
          <h2>INPUTS &amp; BUTTONS</h2>

          <div className="attendance-inputs">
            <label htmlFor="employee-name">Employee Name</label>
            <input
              id="employee-name"
              type="text"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
              placeholder="Enter employee name"
            />

            <label htmlFor="time-in">Time In</label>
            <input
              id="time-in"
              type="number"
              min="0"
              step="0.1"
              value={timeIn}
              onChange={(event) => setTimeIn(event.target.value)}
              placeholder="e.g. 8.5 = 8:30 AM"
            />

            <div className="attendance-buttons">
              <button className="check-button" onClick={checkAttendance}>
                Check Attendance
              </button>
              <button className="reset-button" onClick={resetAttendance}>
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="attendance-card conditions-card">
          <h2>CONDITIONS</h2>
          <div className="condition"><strong>Time In &le; 8</strong><span>&rarr;</span>On Time</div>
          <div className="condition"><strong>8 &lt; Time In &le; 9</strong><span>&rarr;</span>Late</div>
          <div className="condition"><strong>Time In &gt; 9</strong><span>&rarr;</span>Very Late</div>
          <div className="condition-message"><strong>On Time</strong><span>&rarr;</span>“Status: On Time - Good job!”</div>
          <div className="condition-message"><strong>Late</strong><span>&rarr;</span>“Status: Late - Please be on time tomorrow.”</div>
          <div className="condition-message"><strong>Very Late</strong><span>&rarr;</span>“Status: Very Late - Report to your supervisor.”</div>
        </div>

        <div className="attendance-result">
          <h2>RESULT PANEL SHOWS</h2>
          <div className="result-item"><span>&rsaquo;</span><div><strong>Employee Name</strong><p>{result?.employeeName || '-'}</p></div></div>
          <div className="result-item"><span>&rsaquo;</span><div><strong>Time In</strong><p>{result?.timeIn ?? '-'}</p></div></div>
          <div className="result-item"><span>&rsaquo;</span><div><strong>Attendance Status</strong><p className={result?.attendanceStatus?.toLowerCase().replace(' ', '-')}>{result?.attendanceStatus || '-'}</p></div></div>
          <div className="result-item"><span>&rsaquo;</span><div><strong>Follow-up message</strong><p>{result?.followUpMessage || result?.error || '-'}</p></div></div>
        </div>
      </div>
    </section>
  )
}

export default EmployeeAttendanceChecker