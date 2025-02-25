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
      //React needs the key on the direct child of .map().
      <div
        className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center"
        key={product.id}
      >
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
          </Card.Body>
          <Card.Footer className="btn">
            <Button variant="primary">Add to Cart</Button>
          </Card.Footer>
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

/*
[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},

*/
