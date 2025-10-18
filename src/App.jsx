import React from 'react'
import AddTrasac from './Components/AddTrasac'
import AppLayout from './Components/AppLayout'
import DashBoard from './Components/DashBoard'
import Filtering from './Components/Filtering'
import ListOfTransaction from './Components/ListOfTransaction'
import CategoriesManagement from './Components/CategoriesManagement'
import BugdetingAlerts from './Components/BugdetingAlerts'
import Setting from './Components/Setting'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Landing from './Components/Landingv-2'
import Login from './Components/Login'
import { Context } from './Context/Context'
import "./index.css"

export default function App() {
  return (
    <Context>
    <HashRouter>
    <Routes>
        {/* Define AppLayout as a layout route */}
        <Route path="/" element={<AppLayout />}>

          {/* These are child routes that render inside AppLayout */}
          <Route index element={<Landing></Landing>} />
          <Route path="Login" element={<Login></Login>} />
          <Route path='AddTransac' element={<AddTrasac />} />
          <Route path="DashBoard" element={<DashBoard />} />
          <Route path="Filtering" element={<Filtering />} />
          <Route path="ListOfTransaction" element={<ListOfTransaction />} />
          <Route path="CategoriesManagement" element={<CategoriesManagement />} />
          <Route path="BugdetingAlerts" element={<BugdetingAlerts />} />
          <Route path="Setting" element={<Setting />} />
          {/* <Route path="*" element={<PageNotFound></PageNotFound>} */}

        </Route>
   </Routes>
    </HashRouter>
    </Context>
   
   
  )
}
