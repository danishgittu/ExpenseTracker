import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useData } from '../Context/Context'

export default function Navbar() {
  const {DarkMode} = useData()
  const [showDropdown, setShowDropdown] = useState(false);
  const [HamburgerOpen,setHamburgerOpen] = useState(false)
  const handleClose= ()=>{
    setHamburgerOpen(false)
  }
  return (
    <>
    <nav className={`${styles.navbar} ${DarkMode === true ? styles.DarkMode : styles.LightMode}`}>
      <div className={`${styles.logo} logo`} ><span>💸</span> ExpenseTracker</div>
       <div  className={styles.hamburger} onClick={()=> setHamburgerOpen((prev)=>!prev)}>
        <img src="/Logos/ham.svg" alt="" width={"40px"}/>
       </div>
      {/* <Hamburger HamburgerOpen={HamburgerOpen} setHamburgerOpen={setHamburgerOpen} ></Hamburger> */}
      <ul className={styles.navLinks}>
        <li><Link to={"/"} className='MainOpt'>Home</Link></li>
        <li> <Link to={"/AddTransac"} className='MainOpt'>Add Transaction</Link></li>
        
        <li><Link to={"/ListOfTransaction"} className='MainOpt'>View Transactions</Link></li>
        

        {/* Dropdown Wrapper */}
        <div 
          className={styles.dropdownWrapper}
          onClick={() => setShowDropdown((prev)=>!prev)}
          
        >
          <li>More ▾</li>
          {showDropdown && (
            <ul className={styles.dropdownMenu}>
              {/* <li><Link to={"/Filtering"}>Filtering</Link></li> */}
              {/* <li><Link to={"/ListOfTransaction"}>Transactions</Link></li> */}
              <li><Link to={"/CategoriesManagement"}>Categories</Link></li>
              <li><Link to={"/BugdetingAlerts"}>Budget Alerts</Link></li>
              <li><Link to={"/Setting"}>Settings</Link></li>
            </ul>
          )}
        </div>
      </ul>
    </nav>
    <Hamburger HamburgerOpen={HamburgerOpen} setHamburgerOpen={setHamburgerOpen} handleClose={handleClose}></Hamburger>
    </>
  );
}


function Hamburger({HamburgerOpen,setHamburgerOpen,handleClose}){
  return(
    <>
     <div className={`${styles.hammm} ${HamburgerOpen ? styles.animate : ""}`}>
       <ul className={styles.navLinksMob}>
        <li onClick={handleClose}><Link to={"/"} className='MainOpt'>Home</Link></li>
        <li onClick={handleClose}> <Link to={"/AddTransac"} className='MainOpt'>Add Transaction</Link></li>
        
        <li onClick={handleClose}><Link to={"/ListOfTransaction"} className='MainOpt'>View Transactions</Link></li>
        
      </ul>
    </div>
    </>
  )
}