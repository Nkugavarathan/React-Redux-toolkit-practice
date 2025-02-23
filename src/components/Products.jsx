import React, { useState, useEffect } from "react"

export default function Products() {
  const [products, getProducts] = useState([])
  useEffect(() => {
    //api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result))
  }, [])
  return (
    <div>
      Products
      {/* check fetch or not  console inside useEffect or this method  {JSON.stringify(products)} */}
    </div>
  )
}
