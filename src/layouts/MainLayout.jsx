import React from 'react'
import Slidebar from '../components/Slidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Slidebar />
        <Outlet />
    </>
  )
}

export default MainLayout