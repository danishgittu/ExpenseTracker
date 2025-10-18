import React from 'react'
import styles from './Setting.module.css'
// import { useData } from '../Context/context'
import { useData } from '../Context/Context'

export default function Setting() {
  const { HandleToggle, DarkMode,SetAppData,AppData } = useData()
  // console.log("Current AppData.Currency:", AppData.Currency);

  return (
    <div className={`${styles["settings-container"]} ${DarkMode ? styles["dark-mode"] : styles["light-mode"]}`}>
      <h2>Settings</h2>

      <div className={styles["setting-group"]}>
        <h3>Appearance</h3>
        <div className={styles["setting-item"]}>
          <label htmlFor="darkModeToggle">Dark Mode</label>
          <div className={styles["toggle-switch"]}>
            <input
              type="checkbox"
              id="darkModeToggle"
              checked={DarkMode}
              onChange={HandleToggle}
            />
            <span className={styles["slider"]}></span>
          </div>
        </div>
      </div>

      <div className={styles["setting-group"]}>
        <h3>Preferences</h3>

        <div className={styles["setting-item"]}>
          <label htmlFor="currency">Default Currency</label>
          <select id="currency" value={AppData.Currency} onChange={(e)=>SetAppData((prev)=> ({...prev,Currency:e.target.value}))}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <div className={styles["setting-item"]}>
          <label htmlFor="reset">Monthly Reset Date</label>
          <input type="date" id="reset" disabled />
        </div>
      </div>
    </div>
  )
}
