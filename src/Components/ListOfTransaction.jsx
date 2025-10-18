import React from 'react'
import "./ListOfTransaction.css"
import Navbar from './Navbar'
import { useData } from '../Context/Context'
export default function ListOfTransaction() {
  const {Transaction,HandleDelete,SortedList,SetSortBy,SortBy,DarkMode} = useData()
  console.log(Transaction)
  return (
    <>
    {/* <Navbar></Navbar> */}
    <div className={`transactions-container ${DarkMode === true ? "DarkMode":"LightMode"}`}>
    <h2>Transaction History</h2>
    <div className="Options">
      <div>
        <span>Sort by : </span>
      <select className='select' name="Choice" onChange={(e)=> SetSortBy(e.target.value)} value={SortBy}>
        <option className='opt' value="date">Date</option>
        <option className='opt' value="amount">Amount</option>
        <option className='opt' value="Category">Category</option>
        <option className='opt' value="type">Type</option>
      </select>
      </div>
    </div>
    <div className="transaction-table">
      <div className="table-header">
        <span>Date</span>
        <span>Category</span>
        <span>Type</span>
        <span>Amount</span>
        <span>Actions</span>
      </div>
      {SortedList.map((item)=> <Data key={item.ID} item={item} HandleDelete={HandleDelete}></Data>)}

      

      
    </div>
  </div>
    </>
  )
}


function Data({item,HandleDelete}){
  const {ID,amount,date,notes,type,category} = item
  return(
      <div className="table-row">
        <span className='Date'>{date}</span>
        <span>{category}</span>
        <span className={`type ${type}`}>{type}</span>
        <span className='Amount'>${amount}</span>
        <span className="actions center">
          {/* <button className="edit-btn">Edit</button> */}
          <button className="delete-btn" onClick={()=>HandleDelete(item)}>Delete</button>
        </span>
      </div>
  )
}