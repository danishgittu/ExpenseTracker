import React from 'react'
import { Outlet } from 'react-router-dom'
import style from "./AppLayout.module.css"
import Navbar from './Navbar'
export default function AppLayout({children}) {
  return (
    // {width: "100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }
     <>
    <div className={style.wrapper}>
     <Navbar></Navbar>
      {children}
        <Outlet></Outlet>
    </div>
     </> 
  )
}
