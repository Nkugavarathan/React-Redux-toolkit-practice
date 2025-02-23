import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom"

import Cart from "./components/Cart"
import Dashboard from "./components/Dashboard"
import RootLayout from "./components/RootLayout"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
