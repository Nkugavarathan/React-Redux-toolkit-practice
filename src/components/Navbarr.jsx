import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function Navbarr() {
  const countProduct = useSelector((state) => state.cart)

  const [scrolled, setScrolled] = useState(false)

  // Handle the scroll event and change the navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Navbar
      className={`navbar ${scrolled ? "navbar-sticky bg-dark" : ""}`}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="/">
              Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end me-2 cart">
          <Navbar.Text>
            <Nav.Link
              as={Link}
              to="cart"
              className={scrolled ? "text-white" : ""}
            >
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
