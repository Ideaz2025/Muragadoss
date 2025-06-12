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

  function MenuList({ onClick, asDropdown = false }) {
    // Only for mobile: track which accordion is open
    const [open, setOpen] = useState(null);

    // Helper for toggling accordion
    const handleAccordion = (key) => setOpen(open === key ? null : key);

    // If not mobile, use Bootstrap NavDropdown as before
    if (!asDropdown) {
      return (
        <>
          <Nav.Link >
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link >
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
              About
            </NavLink>
          </Nav.Link>
          <NavDropdown title="Journal" id={`journal-dropdown${asDropdown ? "-mobile" : ""}`} className="pe-3">
            <NavDropdown.Item as={NavLink} to="/journal/national" onClick={onClick}>
              National
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/journal/international" onClick={onClick}>
              International
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Conference" id={`conference-dropdown${asDropdown ? "-mobile" : ""}`} className="pe-3">
            <NavDropdown.Item as={NavLink} to="/conference/national" onClick={onClick}>
              National
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/conference/international" onClick={onClick}>
              International
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Patent" id={`patent-dropdown${asDropdown ? "-mobile" : ""}`} className="pe-3">
            <NavDropdown.Item as={NavLink} to="/patent/published" onClick={onClick}>
              Published
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/patent/granted" onClick={onClick}>
              Granted
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Book" id={`book-dropdown${asDropdown ? "-mobile" : ""}`} className="pe-3">
            <NavDropdown.Item as={NavLink} to="/book/published" onClick={onClick}>
              Published
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="pe-3">
            <NavLink to="/fdp" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
              FDP
            </NavLink>
          </Nav.Link>
          <Nav.Link className="pe-3">
            <NavLink to="/membership" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
              Membership
            </NavLink>
          </Nav.Link>
          <Nav.Link className="pe-3">
            <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
              Experience
            </NavLink>
          </Nav.Link>
          <Nav.Link className="pe-3">
            <NavLink to="/awards" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
              Awards
            </NavLink>
          </Nav.Link>
          <Nav.Link className="pe-3">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
              Contact
            </NavLink>
          </Nav.Link>
          <Nav.Link className="pe-3">
            <NavLink to="/Studentreviews" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
              Student Reviews
            </NavLink>
          </Nav.Link>
        </>
      );
    }

    // Mobile: Use accordion style for dropdowns
    return (
      <>
        <Nav.Link>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
            Home
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
            About
          </NavLink>
        </Nav.Link>

        {/* Journal Accordion */}
        <div className="mobile-accordion">
          <button className="accordion-toggle" onClick={() => handleAccordion("journal")}>
            Journal {open === "journal" ? "▲" : "▼"}
          </button>
          {open === "journal" && (
            <div className="accordion-content">
              <NavLink to="/journal/national" onClick={onClick}>National</NavLink>
              <NavLink to="/journal/international" onClick={onClick}>International</NavLink>
            </div>
          )}
        </div>

        {/* Conference Accordion */}
        <div className="mobile-accordion">
          <button className="accordion-toggle" onClick={() => handleAccordion("conference")}>
            Conference {open === "conference" ? "▲" : "▼"}
          </button>
          {open === "conference" && (
            <div className="accordion-content">
              <NavLink to="/conference/national" onClick={onClick}>National</NavLink>
              <NavLink to="/conference/international" onClick={onClick}>International</NavLink>
            </div>
          )}
        </div>

        {/* Patent Accordion */}
        <div className="mobile-accordion">
          <button className="accordion-toggle" onClick={() => handleAccordion("patent")}>
            Patent {open === "patent" ? "▲" : "▼"}
          </button>
          {open === "patent" && (
            <div className="accordion-content">
              <NavLink to="/patent/published" onClick={onClick}>Published</NavLink>
              <NavLink to="/patent/granted" onClick={onClick}>Granted</NavLink>
            </div>
          )}
        </div>

        {/* Book Accordion */}
        <div className="mobile-accordion">
          <button className="accordion-toggle" onClick={() => handleAccordion("book")}>
            Book {open === "book" ? "▲" : "▼"}
          </button>
          {open === "book" && (
            <div className="accordion-content">
              <NavLink to="/book/published" onClick={onClick}>Published</NavLink>
            </div>
          )}
        </div>

        {/* The rest are simple links */}
        <Nav.Link>
          <NavLink to="/fdp" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>FDP</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/membership" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>Membership</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>Experience</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/awards" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>Awards</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>Contact</NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink to="/Studentreviews" className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>Student Reviews</NavLink>
        </Nav.Link>
      </>
    );
  }

  return (
    <>
      <Navbar className="navtop py-3" expand="lg" >
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
            <MenuList />
          </Nav>
        </Container>
      </Navbar>
      {toogleMenu && (
        <div className="menu menu-mobile-theme">
          <Container fluid className="menu-close">
            <button className="toogle-menu ms-auto" onClick={toogleClose}>
              <GrClose />
            </button>
            <Nav className="menu-list" style={{ display: "block" }}>
              <MenuList onClick={toogleClose} asDropdown />
            </Nav>
          </Container>
        </div>
      )}
    </>
  );
}

export default NavTop;
