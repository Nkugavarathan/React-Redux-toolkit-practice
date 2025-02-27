import React from "react"
import { useSelector } from "react-redux"
export default function Cart() {
  const productCart = useSelector((state) => state.cart)
  return <div>Cart</div>
}
