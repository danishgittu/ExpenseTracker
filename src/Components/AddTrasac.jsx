import React, { useState } from 'react'
import "./AddTrasac.css"
import Navbar from './Navbar'
import { useData } from '../Context/context'
export default function AddTrasac() {
  const {HandleChange,state,HandleSubmit,HandleClear,DarkMode} = useData()
  // const [DarkMode,setDarkMode] = useState("Light")
  return (
    <>
    {/* <Navbar></Navbar> */}
      <div className={`form-container ${DarkMode === true ? "DarkMode":"LightMode" }`}>
    <h2>Add Transaction</h2>
    <form onSubmit={HandleSubmit} className='form'>
      <div className='FormWrapper'>
      <div className="input-group">
        <label htmlFor="type">Type</label>
        <select id="type" name="type" required value={state.type} onChange={HandleChange} >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" value={state.amount} placeholder="Enter amount" required onChange={HandleChange} />
      </div>

      <div className="input-group">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" required value={state.category} onChange={HandleChange}>
          <option value="">-- Select Category --</option>         
          {state.type === "Expense" && <option value="food">Food</option>}
          {state.type === "Expense" && <option value="Rent">Rent</option>}
          {state.type === "Expense" && <option value="transport">transport</option>}
          {state.type === "Expense" && <option value="entertainment">entertainment</option>}
          {state.type === "Income" && <option value="salary">salary</option>}
          {state.type === "Income" && <option value="Business">Business</option>}
         
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date"  required value={state.date} onChange={HandleChange} />
      </div>

      <div className="input-group">
        <label htmlFor="notes">Notes (optional)</label>
        <textarea id="notes" name="notes" placeholder="Add any additional details..." value={state.notes} onChange={HandleChange} ></textarea>
      </div>
      </div>
      <div className='actions'>
      <div className='ActionBtns'>
      <button type="submit" className="submit-btn">Add Transaction</button>
      <button onClick={HandleClear} className="submit-btn">Reset</button>
      </div>
      </div>
    </form>
  </div>  
    </>
  )
}
