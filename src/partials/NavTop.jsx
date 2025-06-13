import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CSS/NavTop.css";
import { FiMenu, FiHome, FiUser, FiBookOpen, FiAward, FiUsers, FiBriefcase, FiStar, FiMail, FiEdit3, FiChevronDown, FiChevronUp } from "react-icons/fi";

function isMobile() {
  return window.innerWidth <= 992;
}

function NavTop() {
  const [mobile, setMobile] = useState(isMobile());
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const handleResize = () => setMobile(isMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Accordion toggle for mobile
  const handleAccordion = (key) => setOpen(open === key ? null : key);

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="navtop py-3">
      <Container fluid className="px-4">
        <Navbar.Brand className="navtop-brand">
          <Link to="/" className="navbar-brand">
            Dr.Muragadoss <i id="normal">R</i>.
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FiMenu size={28} />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navtop-list">
            <Nav.Link as={NavLink} to="/" className="accordion-toggle">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="accordion-toggle">About</Nav.Link>

            {mobile ? (
              <>
                {/* Journal Accordion */}
                <div className="mobile-accordion">
                  <button className="accordion-toggle" onClick={() => handleAccordion("journal")}>
                    Journal {open === "journal" ? "▲" : "▼"}
                  </button>
                  {open === "journal" && (
                    <div className="accordion-content">
                      <NavLink to="/journal/national">National</NavLink>
                      <NavLink to="/journal/international">International</NavLink>
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
                      <NavLink to="/conference/national">National</NavLink>
                      <NavLink to="/conference/international">International</NavLink>
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
                      <NavLink to="/patent/published">Published</NavLink>
                      <NavLink to="/patent/granted">Granted</NavLink>
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
                      <NavLink to="/book/published">Published</NavLink>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <NavDropdown title="Journal" id="journal-dropdown">
                  <NavDropdown.Item as={NavLink} to="/journal/national">National</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/journal/international">International</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Conference" id="conference-dropdown">
                  <NavDropdown.Item as={NavLink} to="/conference/national">National</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/conference/international">International</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Patent" id="patent-dropdown">
                  <NavDropdown.Item as={NavLink} to="/patent/published">Published</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/patent/granted">Granted</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Book" id="book-dropdown">
                  <NavDropdown.Item as={NavLink} to="/book/published">Published</NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            <Nav.Link as={NavLink} to="/fdp" className="accordion-toggle">FDP</Nav.Link>
            <Nav.Link as={NavLink} to="/membership "className="accordion-toggle">Membership</Nav.Link>
            <Nav.Link as={NavLink} to="/experience"className="accordion-toggle">Experience</Nav.Link>
            <Nav.Link as={NavLink} to="/awards"className="accordion-toggle">Awards</Nav.Link>
            <Nav.Link as={NavLink} to="/contact"className="accordion-toggle">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/Studentreviews"className="accordion-toggle">Student Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTop;