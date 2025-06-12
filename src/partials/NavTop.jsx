import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import "./CSS/NavTop.css";
function NavTop() {
  const [toogleMenu, setToogleMenu] = useState(false);

  function toogleOpen() {
    setToogleMenu(true);
  }

  function toogleClose() {
    setToogleMenu(false);
  }

  if (toogleMenu) {
    return (
      <>
        <NavTop />
        <div className="menu">
          <Container fluid className="menu-close">
            <button className="toogle-menu ms-auto" onClick={toogleClose}>
              <GrClose />
            </button>
            <div className="menu-list">
              <NavLink to="/" onClick={toogleClose}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={toogleClose}>
                About
              </NavLink>
                
              <NavLink to="/Professional Memberships" onClick={toogleClose}>
              Professional Memberships
              </NavLink>
              <NavLink to="/contact" onClick={toogleClose}>
                Contact
              </NavLink>
              <NavLink to="/journal"onClick={toogleClose}>
                Journal
              </NavLink>
            </div>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar className="navtop py-3" expand="lg">
        <Container fluid className="px-4">
          <Navbar.Brand className="navtop-brand">
            <Link to="/">
              Dr.Muragadoss <i id="normal">R</i>.
            </Link>
          </Navbar.Brand>
          <button className="toogle-menu" onClick={toogleOpen}>
            <FaAlignRight />
          </button>
          <Nav className="navtop-list ms-auto">
            <Nav.Link className="pe-3">
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </Nav.Link>
       <Nav.Link className="pe-3">
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </Nav.Link>

            <NavDropdown title="Journal" id="journal-dropdown" className="pe-3">
              <NavDropdown.Item as={NavLink} to="/journal/national">
                National
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/journal/international">
                International
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Conference" id="conference-dropdown" className="pe-3">
              <NavDropdown.Item as={NavLink} to="/conference/national">
                National
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/conference/international">
                International
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Patent" id="patent-dropdown" className="pe-3">
              <NavDropdown.Item as={NavLink} to="/patent/published">
                Published
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/patent/granted">
                Granted
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Book" id="book-dropdown" className="pe-3">
              <NavDropdown.Item as={NavLink} to="/book/published">
                Published
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="pe-3">
              <NavLink to="/fdp" className={({ isActive }) => (isActive ? "active" : "")}>
                FDP
              </NavLink>
            </Nav.Link>

            <Nav.Link className="pe-3">
              <NavLink to="/membership" className={({ isActive }) => (isActive ? "active" : "")}>
                Membership
              </NavLink>
            </Nav.Link>

            <Nav.Link className="pe-3">
              <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>
                Experience
              </NavLink>
            </Nav.Link>

 

            <Nav.Link className="pe-3">
              <NavLink to="/awards" className={({ isActive }) => (isActive ? "active" : "")}>
                Awards
              </NavLink>
            </Nav.Link>
              <Nav.Link className="pe-3">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </Nav.Link>
              <Nav.Link className="pe-3">
              <NavLink to="/Studentreviews" className={({ isActive }) => (isActive ? "active" : "")}>
                Student Reviews
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTop;
