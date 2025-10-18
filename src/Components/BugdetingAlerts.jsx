import React from 'react'
import "./BugdetingAlerts.css"
import Navbar from './Navbar'
export default function BugdetingAlerts() {
  return (
    <>
    {/* <Navbar></Navbar> */}
      <div className="budget-container">
    <h2>Monthly Budgets</h2>

    <form className="budget-form">
      <select>
        <option value="">Select Category</option>
        <option value="food">Food</option>
        <option value="rent">Rent</option>
        <option value="entertainment">Entertainment</option>
        <option value="transport">Transport</option>
      </select>
      <input type="number" placeholder="Enter budget amount" required />
      <button type="submit">Set Budget</button>
    </form>
    <div className="budget-list">

      <div className="budget-item">
        <div className="category-info">
          <p className="category-name">Food</p>
          <p className="category-alert over">Over Budget 🔴</p>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{width: "110" + "%", backgroundColor: "#e53935"}}></div>
        </div>
        <div className="budget-details">
          Spent: $275 / Budget: $250
        </div>
      </div>

      <div className="budget-item">
        <div className="category-info">
          <p className="category-name">Transport</p>
          <p className="category-alert near">Nearing Budget 🟡</p>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{width: "80%", backgroundColor: "#fbc02d"}}></div>
        </div>
        <div className="budget-details">
          Spent: $80 / Budget: $100
        </div>
      </div>

      <div className="budget-item">
        <div className="category-info">
          <p className="category-name">Entertainment</p>
          <p className="category-alert safe">Within Budget 🟢</p>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{width: "40%", backgroundColor:" #43a047"}}></div>
        </div>
        <div className="budget-details">
          Spent: $40 / Budget: $100
        </div>
      </div>

    </div>
  </div>
    </>
  )
}
