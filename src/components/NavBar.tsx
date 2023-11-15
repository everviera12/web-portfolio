// react router
import { Route, Link, Routes } from "react-router-dom";

// bootstrap components
import { Container, Nav, Navbar } from "react-bootstrap";

// react components
import Portafolio from "../Portafolio";

// import scss Styles
import "../scss/Portafolio.scss";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="w-100 position-absolute nav__class ">
        <Container>
          <Navbar.Brand as={Link} to="/" className="nav__links">
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav__container z-1  justify-content-end text-center w-100 align-items-center gap-3">
              <Nav.Link as={Link} to="/" className="nav__links">
                Home
              </Nav.Link>
              <Nav.Link className="nav__links">Sobre mi</Nav.Link>
              <Nav.Link className="nav__links">Empleos</Nav.Link>
              <Nav.Link className="nav__links">Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact-me" className="nav__links">
                Contactame
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Portafolio />} />
        <Route path="/contact-me" />
      </Routes>
    </>
  );
};

export default NavBar;
