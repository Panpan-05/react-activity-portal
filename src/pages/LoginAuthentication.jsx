import { useState } from 'react'
import '../css/LoginAuthentication.css'

const DEMO_USERNAME = 'user01'
const DEMO_PASSWORD = '12345'

function LoginAuthentication() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (username.trim() === '' && password.trim() === '') {
      setMessage('Please enter username and password.')
      setMessageType('error')
    } else if (username.trim() === '' || password.trim() === '') {
      setMessage('Please complete both fields.')
      setMessageType('error')
    } else if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
      setIsLoggedIn(true)
      setMessage('Login successful!')
      setMessageType('success')
    } else {
      setMessage('Invalid username or password.')
      setMessageType('error')
    }
  }

  function handleLogout() {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
    setMessage('You have been logged out.')
    setMessageType('success')
  }

  return (
    <section className="activity-page login-page page-enter">
      <div className="page-heading">
        <div>
          <span className="activity-label">ACTIVITY 01</span>
          <h1>Login Authentication</h1>
          <p>Login with the demo credentials.</p>
        </div>
      </div>

      <div className="activity-layout">
        <div className="form-card">
          {!isLoggedIn ? (
            <form onSubmit={handleSubmit}>
              <div className="form-header">
                <div>
                  <h2>Login</h2>
                  <p>Enter your account details to continue.</p>
                </div>
              </div>

              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter username"
              />

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
              />

              <button type="submit" className="primary-button full-width">
                Login
              </button>

              <p className="demo-note">
                DEMO CREDENTIALS: <strong>user01</strong> / <strong>12345</strong>
              </p>
            </form>
          ) : (
            <div className="logged-in-box">
              <div className="success-icon">✓</div>

              <h2>Welcome, {username}!</h2>

              <p>You have logged in to your account.</p>

              <button
                type="button"
                className="secondary-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}

          <div className="result-card">
            <span className="card-kicker">STATUS</span>

            {message ? (
              <div className={`message ${messageType}`} role="status">
                <span>{messageType === 'success' ? '✓' : '!'}</span>
                {message}
              </div>
            ) : (
              <div className="empty-state">
                <p>Login...</p>
              </div>
            )}

            <div className="rule-list">
              <div>
                <span>01</span>
                <p>Both fields are required.</p>
              </div>

              <div>
                <span>02</span>
                <p>Correct credentials logs the user in.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginAuthentication