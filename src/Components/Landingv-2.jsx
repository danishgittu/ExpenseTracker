// src/pages/Landing.jsx
import React, { useState } from 'react';
import styles from './Landingv-2.module.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import DashBoard from "./DashBoard";
import ListOfTransaction from "./ListOfTransaction"
import { useData } from '../Context/Context'



export default function Landing() {
  const {DarkMode} = useData()
  return (
    <>
    
    <div className={`${styles.container} ${DarkMode === true ? styles.DarkMode : styles.LightMode}`}>
      <div className={styles.center}>
       <h1>💸 Smart Expense Tracker</h1>
        <p>Manage your money smarter — track, budget, and grow your savings.</p>
        </div>
        <div className={`${styles.GetStarted} `}>
          <Link to={"/Dashboard"} className={`${styles.link} `}>Get Started</Link>
        </div>



      



    </div>
    {/* <DashBoard></DashBoard> */}
    {/* <ListOfTransaction></ListOfTransaction> */}
    </>
  );
}
