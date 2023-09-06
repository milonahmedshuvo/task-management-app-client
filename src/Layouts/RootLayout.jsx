import React from 'react'
import Navber from '../Components/Navber/Navber'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  )
}

export default RootLayout
