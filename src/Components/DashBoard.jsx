import React from 'react'
import "./DashBoard.css"
import Navbar from './Navbar'
import { useData } from '../Context/context'
import PieChartComponent from './PieChartComponent'
export default function DashBoard() {
  const {TotalIncom,Totalexp,Balance,Transaction,DarkMode,CurrencySymbol} = useData()

  return (
    <>
    {/* <Navbar></Navbar> */}
      <div className={`dashboard-container ${DarkMode === true ? "DarkMode": "LightMode"}`}>
    <h1>Dashboard</h1>
    <div className="summary-cards">
       <div className="card income">
        <p className="label">Total Income</p>
        <p className="amount Income">{CurrencySymbol}{TotalIncom}</p>
      </div>
      <div className="card balance">
        <p className="label">Total Balance</p>
        <p className={`amount ${Balance === 0 ? "red" : Balance > (TotalIncom / 2) ? "green": "yellow"}`}>{CurrencySymbol}{Balance}</p>
      </div>

     

      <div className="card expense">
        <p className="label">Total Expenses</p>
        <p className="amount Expenses">{CurrencySymbol}{Totalexp}</p>
      </div>
    </div>

    {Transaction.length > 0 && <div className="charts">
      <div className="chart-box">
        <h2>Spending Breakdown</h2>
        <div className="chart-placeholder"><PieChartComponent></PieChartComponent></div>
      </div>

      <div className="chart-box">
        <h2>Monthly Trend</h2>
        <div className="chart-placeholder">[ Bar Chart Goes Here ]</div>
      </div>
    </div>}
  </div>
    </>
  )
}
