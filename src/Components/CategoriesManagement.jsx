import React from 'react'
import "./CategoriesManagement.css"
import Navbar from './Navbar'
export default function CategoriesManagement() {
  return (
    <>
    {/* <Navbar></Navbar> */}
   <div className="categories-container">
    <h2>Manage Categories</h2>

    <form className="add-category-form">
      <input type="text" placeholder="New category name" required />
      <select>
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
      </select>
      <button type="submit">Add</button>
    </form>

    <div className="category-list">
      <div className="category-item">
        <span className="name">Food</span>
        <span className="type expense">Expense</span>
        <div className="actions">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>

      <div className="category-item">
        <span className="name">Salary</span>
        <span className="type income">Income</span>
        <div className="actions">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>

    </div>
  </div>
    </>
  )
}
