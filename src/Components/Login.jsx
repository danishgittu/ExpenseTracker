import React from 'react'
import "./Login.css"
export default function Login() {
  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Welcome Back 👋</h2>
      <p>Login to manage your expenses</p>

      <form>
        <div className="login-input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" required />
        </div>

        <div className="login-input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>

        <div className="actions">
          <a href="#" className="forgot-link">Forgot Password?</a>
        </div>

        <button type="submit" className="login-btn">Login</button>

        <div className="divider"><span>or</span></div>

        <button type="button" className="google-btn">Sign in with Google</button>

        <p className="register-text">
          Don’t have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  </div>

  )
}
