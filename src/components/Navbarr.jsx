import Container from "react-bootstrap/Container"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
              My Bag 0
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr
