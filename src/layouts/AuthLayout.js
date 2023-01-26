import React from 'react'
import { Outlet } from 'react-router-dom'

function AuthLayout({children}) {
  return (
    <>
      <h1>AuthLayout</h1>
      <Outlet />
    </>
  )
}

export default AuthLayout