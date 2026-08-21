import { useState } from 'react'
import '../css/PasswordStrengthChecker.css'

function PasswordStrengthChecker() {
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  const hasNumber = /\d/.test(password)
  const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password)

  const checkPassword = () => {
    if (password.length === 0) {
      setStatus('Empty')
      setMessage('Please enter a password.')
      return
    }

    let strength = ''

    if (password.length < 6) {
      strength = 'Weak Password'
    } else if (password.length <= 9) {
      strength = 'Medium Password'
    } else {
      strength = 'Strong Password'
    }

    setStatus(strength)

    let extraMessage = ''

    if (!hasNumber && !hasSpecialCharacter) {
      extraMessage = 'Add a number and a special character.'
    } else if (!hasNumber) {
      extraMessage = 'Add a number to make your password stronger.'
    } else if (!hasSpecialCharacter) {
      extraMessage = 'Add a special character to make your password stronger.'
    } else {
      extraMessage = 'Your password contains a number and special character.'
    }

    if (password.length >= 10 && hasNumber && hasSpecialCharacter) {
      setMessage('Status: Strong – You can use this password.')
    } else {
      setMessage(`${strength} – ${extraMessage}`)
    }
  }

  const clearPassword = () => {
    setPassword('')
    setStatus('')
    setMessage('')
  }

  const getStatusClass = () => {
    if (status === 'Strong Password') return 'strong-text'
    if (status === 'Medium Password') return 'medium-text'
    if (status === 'Weak Password') return 'weak-text'

    return ''
  }

  const getStrengthClass = () => {
    if (password.length === 0) return ''

    if (password.length < 6) {
      return 'weak'
    }

    if (password.length <= 9) {
      return 'medium'
    }

    if (hasNumber && hasSpecialCharacter) {
      return 'strong'
    }

    return 'medium'
  }

  return (
    <div className="password-page">

      <div className="password-header">
        <div className="activity-number">3</div>

        <div>
          <div className="activity-label">ACTIVITY 3</div>
          <h1>Password Strength Checker</h1>
        </div>
      </div>

      <p className="description">
        Classify a password by length and check for numbers and special characters.
      </p>

      <div className="password-content">

        <div className="password-card input-card">

          <h2>INPUTS &amp; BUTTONS</h2>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />

            <div className="button-group">

              <button
                className="check-button"
                onClick={checkPassword}
              >
                Check Password
              </button>

              <button
                className="clear-button"
                onClick={clearPassword}
              >
                Clear
              </button>

            </div>

          </div>

          <div className="requirements">

            <h3>PASSWORD REQUIREMENTS</h3>

            <div className="requirement">
              <span className="bullet">•</span>
              <span>1–5 characters → Weak Password</span>
            </div>

            <div className="requirement">
              <span className="bullet">•</span>
              <span>6–9 characters → Medium Password</span>
            </div>

            <div className="requirement">
              <span className="bullet">•</span>
              <span>10+ characters → Strong Password</span>
            </div>

            <div
              className={`requirement ${
                password && hasNumber ? 'requirement-success' : ''
              }`}
            >
              <span className="bullet">•</span>
              <span>Contains a number</span>
            </div>

            <div
              className={`requirement ${
                password && hasSpecialCharacter ? 'requirement-success' : ''
              }`}
            >
              <span className="bullet">•</span>
              <span>Contains a special character</span>
            </div>

          </div>

        </div>

        <div className="result-panel">

          <h2>RESULT PANEL SHOWS</h2>

          <div className="result-item">

            <span>›</span>

            <div>
              <strong>Password Status</strong>

              <p className={getStatusClass()}>
                {status || '—'}
              </p>
            </div>

          </div>

          <div className="result-item">

            <span>›</span>

            <div>
              <strong>Strength message</strong>

              <p className="result-message">
                {message || '—'}
              </p>
            </div>

          </div>

          <div className="result-check">
            <span>Number:</span>

            <span
              className={
                !password
                  ? 'check-status neutral'
                  : hasNumber
                  ? 'check-status good'
                  : 'check-status bad'
              }
            >
              {password ? (hasNumber ? 'Yes' : 'No') : '—'}
            </span>
          </div>

          <div className="result-check">
            <span>Special character:</span>

            <span
              className={
                !password
                  ? 'check-status neutral'
                  : hasSpecialCharacter
                  ? 'check-status good'
                  : 'check-status bad'
              }
            >
              {password ? (hasSpecialCharacter ? 'Yes' : 'No') : '—'}
            </span>
          </div>

          <div className="result-item visual-item">

            <span>›</span>

            <div className="strength-section">

              <strong>Visual strength indicator</strong>

              <div className="strength-bar">
                <div
                  className={`strength-fill ${getStrengthClass()}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordStrengthChecker