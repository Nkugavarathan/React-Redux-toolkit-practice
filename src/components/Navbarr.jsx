import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Navbarr() {
  const countProduct = useSelector((state) => state.cart)
  const [scrolling, setScrolling] = useState(false)
  const [hidden, setHidden] = useState(false)
  let lastScrollTop = 0

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY

      if (scrollTop > lastScrollTop && scrollTop > 50) {
        setHidden(true) // Hide navbar when scrolling down
      } else {
        setHidden(false) // Show navbar when scrolling up
      }

      setScrolling(scrollTop > 50) // Change background after scrolling 50px
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${scrolling ? "scrolled" : ""} ${
        hidden ? "hidden" : ""
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse>
          <Nav.Link to="/" as={Link}>
            Products
          </Nav.Link>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end me-2">
          <Navbar.Text>
            <Nav.Link to="cart" as={Link}>
              {/* // The "as" prop makes it render as a React Router Link component.
              // This enables client-side navigation without a full page reload. */}
              My Bag {countProduct.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr
