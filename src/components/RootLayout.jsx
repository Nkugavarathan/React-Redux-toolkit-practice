import React from "react"
import { Outlet } from "react-router-dom"
import Navbarr from "./Navbarr"
import { Provider } from "react-redux"

import store from "./../store/store"
export default function RootLayout() {
  return (
    <Provider store={store}>
      <div>
        <Navbarr />
        <div>
          <Outlet />
        </div>
      </div>
    </Provider>
  )
}
