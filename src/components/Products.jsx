import React, { useState, useEffect } from "react"

export default function Products() {
  const [products, getProducts] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result))
  }, [])
  return (
    <div>
      Products hi
      {/* {JSON.stringify(products)} */}
    </div>
  )
}
