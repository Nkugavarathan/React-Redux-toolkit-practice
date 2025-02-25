import React from "react"
import { Outlet } from "react-router-dom"
import Navbarr from "./Navbarr"
export default function RootLayout() {
  return (
    <div>
      <Navbarr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
