import { Nav, Navbar, Container } from "react-bootstrap";
import "../css/NavBar.css";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/lebit.magar",
    icon: "fa-facebook",
    color: "#3b5998",
  },
  {
    name: "LinkedIn",
    url: "https:linkedin.com/in/basanta0lebitmgr/",
    icon: "fa-linkedin",
    color: "#0077b5",
  },
  {
    name: "Gmail",
    url: "mailto:lebitmagar@gmail.com",
    icon: "fa-envelope",
    color: "#db4437",
  },
];

export default function NavBar() {
  return (
    <Navbar expand="lg" className="nav">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="#home">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/portfolio-illustration-download-in-svg-png-gif-file-formats--actress-making-multimedia-industry-pack-illustrations-5624195.png"
            className="imgg"
            alt="logo"
          />
        </Navbar.Brand>

        {/* Responsive Toggle Button */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Collapsible Navbar */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#portfolio">MyPortfolio</Nav.Link>
          </Nav>

          {/* Social Links (Dynamically Generated) */}
          <Nav>
            {socialLinks.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.url}
                target="blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center" ,  outline: "none",
                  boxShadow: "none"}}
              >
                <i
                  className={`fa ${link.icon}`}
                  style={{
                    fontSize: "20px",
                    color: link.color,
                    marginRight: "10px",
                  }}
                  aria-hidden="true"
                ></i>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
