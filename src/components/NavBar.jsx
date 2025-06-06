import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  const [navbarClass, setNavbarClass] = useState("nav");
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarClass("nav scrolled");
      } else {
        setNavbarClass("nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={navbarClass}>
      <Container className="cont">
        <Nav className="me-auto">
          <Nav.Link href="/">myPortfolio</Nav.Link>
        </Nav>
        {/* Responsive Toggle Button */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Collapsible Navbar */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Navigation Links with Icons */}
          <Nav className="nav-links">
            <Link
              to="/education"
              className={`nav-btn ${
                currentPath === "/education" ? "active" : ""
              }`}
            >
              <span>Education</span>
            </Link>
            <Link
              to="/experience"
              className={`nav-btn ${
                currentPath === "/experience" ? "active" : ""
              }`}
            >
              <span>Experience</span>
            </Link>
            <Link
              to="/skills"
              className={`nav-btn ${currentPath === "/skills" ? "active" : ""}`}
            >
              <span>Skills</span>
            </Link>
            <Link
              to="/practice"
              className={`nav-btn ${
                currentPath === "/practice" ? "active" : ""
              }`}
            >
              <span>My Practice</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
