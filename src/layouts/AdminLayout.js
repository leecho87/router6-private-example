import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout({children}) {
  return (
    <>
      <h1>AdminLayout</h1>
      <Outlet />
    </>
  )
}

export default AdminLayout