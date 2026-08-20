import { useState } from 'react'
import '../css/StudentGradeEvaluation.css'

function StudentGradeEvaluation() {
  const [studentName, setStudentName] = useState('')
  const [score, setScore] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

function handleSubmit(event) {
  event.preventDefault()

  const numericScore = Number(score)

  if (studentName.trim() === '' || score === '') {
    setError('Please enter the student name and score.')
    setResult(null)
  } else if (
    numericScore < 0 ||
    numericScore > 100 ||
    Number.isNaN(numericScore)
  ) {
    setError('Invalid Score')
    setResult(null)
  } else if (numericScore >= 90) {
    setError('')
    setResult({
      name: studentName.trim(),
      score: numericScore,
      remark: 'Excellent'
    })
  } else if (numericScore >= 85) {
    setError('')
    setResult({
      name: studentName.trim(),
      score: numericScore,
      remark: 'Very Good'
    })
  } else if (numericScore >= 80) {
    setError('')
    setResult({
      name: studentName.trim(),
      score: numericScore,
      remark: 'Good'
    })
  } else if (numericScore >= 75) {
    setError('')
    setResult({
      name: studentName.trim(),
      score: numericScore,
      remark: 'Passed'
    })
  } else {
    setError('')
    setResult({
      name: studentName.trim(),
      score: numericScore,
      remark: 'Failed'
    })
  }
}

  function handleClear() {
    setStudentName('')
    setScore('')
    setResult(null)
    setError('')
  }

  return (
    <section className="activity-page grade-page page-enter">
      <div className="page-heading">
        <div>
          <span className="activity-label">ACTIVITY 02</span>
          <h1>Student Grade Evaluation</h1>
          <p>Enter a student score to see its evaluation.</p>
        </div>
      </div>

      <div className="grade-card">

        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <div>
              <h2>Evaluate a student</h2>
              <p>Scores must be between 0 and 100.</p>
            </div>
          </div>

          <label htmlFor="studentName">Student Name</label>

          <input
            id="studentName"
            type="text"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
            placeholder="Enter student name"
          />

          <label htmlFor="score">Score</label>

          <input
            id="score"
            type="number"
            value={score}
            onChange={(event) => setScore(event.target.value)}
            placeholder="0 - 100"
          />

          <div className="button-row">
            <button type="submit" className="primary-button">
              Evaluate
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </form>

        <div className="evaluation-section">
          <span className="card-kicker">EVALUATION</span>

          {error ? (
            <div className="message error" role="alert">
              <span>!</span>
              {error}
            </div>
          ) : result ? (
            <div className="grade-result">
              <div className="result-row">
                <span>Student Name</span>
                <strong>{result.name}</strong>
              </div>

              <div className="result-row">
                <span>Score</span>
                <strong>{result.score}</strong>
              </div>

              <div className="remark-box">
                <span>REMARKS</span>
                <strong>{result.remark}</strong>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <p>Enter a student score to display its evaluation.</p>
            </div>
          )}

          <div className="grade-scale">
            <div>
              <span>90–100</span>
              <b>Excellent</b>
            </div>

            <div>
              <span>85–89</span>
              <b>Very Good</b>
            </div>

            <div>
              <span>80–84</span>
              <b>Good</b>
            </div>

            <div>
              <span>75–79</span>
              <b>Passed</b>
            </div>

            <div>
              <span>Below 75</span>
              <b>Failed</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentGradeEvaluation