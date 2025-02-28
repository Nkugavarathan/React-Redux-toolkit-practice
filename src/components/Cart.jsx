import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { remove } from "../store/cartSlice"
import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa" // Import icons

export default function Cart() {
  const productCart = useSelector((state) => state.cart)
  //useSelector reads the cart state from Redux.
  // state.cart is an array of products in the cart.
  const dispatch = useDispatch() //This initializes Redux dispatch so we can send actions to the store.

  const removeToCard = (productId) => {
    dispatch(remove(productId))
  } //when the user clicks "Add to Cart", it dispatches an action to Redux.

  // calculate total amount
  const totalAmount = productCart
    .reduce((total, product) => {
      return total + product.price
    }, 0)
    .toFixed(2)

  const card = productCart.map((product) => {
    // Limit the description to 40 words
    const description =
      product.description.split(" ").slice(0, 10).join(" ") + "..."

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
            <Card.Text> Price: Rs {product.price.toFixed(2)}</Card.Text>
          </Card.Body>
          <Card.Footer
            className="btn"
            style={{ backgroundColor: "whitesmoke" }}
          >
            <Button variant="danger" onClick={() => removeToCard(product.id)}>
              Remove to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row">{card}</div>

      {/* Checkout Box */}
      <div className="checkout-box mt-5">
        <Card>
          <Card.Body>
            <Card.Title>Total Amount</Card.Title>
            <Card.Text>
              <strong>Rs {totalAmount}</strong>
            </Card.Text>

            {/* Display Payment Methods with Icons */}
            <Card.Text>
              <strong>Payment Methods:</strong>
              <div className="payment-methods">
                <FaCcVisa
                  size={30}
                  color="#0056b3"
                  className="payment-icon  "
                />
                <FaCcMastercard
                  size={30}
                  color="#ff5f00"
                  className="payment-icon "
                />
                <FaPaypal size={30} color="#003b5c" className="payment-icon " />
              </div>
            </Card.Text>

            {/* Checkout Button */}
            <Button variant="primary">Proceed to Checkout</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
