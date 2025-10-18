// src/pages/Landing.jsx
import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Landing() {
  return (
    <>
    <Navbar></Navbar>
    <div className="landing">
      <header className="landing-hero">
        <h1>💸 Smart Expense Tracker</h1>
        <p>Manage your money smarter — track, budget, and grow your savings.</p>
        <div className="landing-buttons">
          <Link to={"/Dashboard"} className="btn btn-primary">Launch App</Link>
          <a href="/Login" className="btn btn-secondary">Login</a>
        </div>
      </header>

      <section className="landing-features">
        <h2>✨ Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>➕ Quick Add</h3>
            <p>Log expenses or income in seconds, wherever you are.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Insightful Dashboard</h3>
            <p>Visual charts that break down your spending patterns.</p>
          </div>
          <div className="feature-card">
            <h3>🧠 Smart Budgeting</h3>
            <p>Set category-wise budgets and get helpful alerts.</p>
          </div>
          <div className="feature-card">
            <h3>🔍 Filter & Search</h3>
            <p>Find past transactions by date, category, or keyword.</p>
          </div>
          <div className="feature-card">
            <h3>🌙 Dark Mode</h3>
            <p>Switch themes for comfort and style at any time.</p>
          </div>
          <div className="feature-card">
            <h3>⚙️ Fully Customizable</h3>
            <p>Personalize categories, currency, and UI preferences.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>Made with ❤️ for modern money management • © 2025 Expense Tracker</p>
      </footer>
    </div>
    </>
  );
}
