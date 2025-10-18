import React from 'react'
import "./Filtering.css"
import Navbar from './Navbar'
export default function Filtering() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <div className="filter-container">
    <h2>Filter & Sort Transactions</h2>
    <form className="filter-htmlForm">
      
      <div className="htmlForm-group">
        <label htmlFor="type">Type</label>
        <select id="type">
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="htmlForm-group">
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="">All</option>
          <option value="food">Food</option>
          <option value="rent">Rent</option>
          <option value="salary">Salary</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>

      <div className="htmlForm-group">
        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" />
      </div>

      <div className="htmlForm-group">
        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" />
      </div>

      <div className="htmlForm-group">
        <label htmlFor="sort">Sort By</label>
        <select id="sort">
          <option value="date-desc">Date (Newest First)</option>
          <option value="date-asc">Date (Oldest First)</option>
          <option value="amount-desc">Amount (High to Low)</option>
          <option value="amount-asc">Amount (Low to High)</option>
        </select>
      </div>

      <button type="submit" className="filter-btn">Apply Filters</button>
    </form>
  </div>
    </>

  )
}
