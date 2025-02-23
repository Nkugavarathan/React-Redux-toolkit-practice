import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Modal from "react-bootstrap/Modal"

export default function CardComponent({ product }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className="card-description">
            {product.description.length > 100
              ? product.description.substring(0, 100) + "..."
              : product.description}
          </Card.Text>
          {product.description.length > 100 && (
            <Button variant="link" onClick={handleShow}>
              Read More
            </Button>
          )}
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{product.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
