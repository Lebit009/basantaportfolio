import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../css/NavBar.css";

export default function NavBar() {
  const [navbarClass, setNavbarClass] = useState("nav");
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarClass("nav scrolled");
      } else {
        setNavbarClass("nav");
      }

      // ScrollSpy logic
      const sections = ["intro", "skills", "education", "experience", "practice"];
      let found = "intro";
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 5) {
            found = sections[i];
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={navbarClass}>
      <Container className="cont">
        <Nav className="me-auto">
          <Nav.Link href="#intro">myPortfolio</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-links">
            <a
              href="#education"
              className={`nav-btn ${activeSection === "education" ? "active" : ""}`}
            >
              <span>Education</span>
            </a>
            <a
              href="#experience"
              className={`nav-btn ${activeSection === "experience" ? "active" : ""}`}
            >
              <span>Experience</span>
            </a>
            <a
              href="#skills"
              className={`nav-btn ${activeSection === "skills" ? "active" : ""}`}
            >
              <span>Skills</span>
            </a>
            <a
              href="#practice"
              className={`nav-btn ${activeSection === "practice" ? "active" : ""}`}
            >
              <span>My Practice</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}