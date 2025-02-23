import React, { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Fetch API data
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result))
  }, [])

  const card = products.map((product) => {
    // Limit the description to 40 words
    const description =
      product.description.split(" ").slice(0, 20).join(" ") + "..."

    return (
      <div className="col-lg-3 col-md-4 col-sm-6 my-3" key={product.id}>
        <Card className="product-card">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            className="card-img"
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row">{card}</div>
    </div>
  )
}
