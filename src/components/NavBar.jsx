import {Nav,Navbar,NavDropdown, Container} from "react-bootstrap";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <Navbar className="nav">
      <Container>
        <Navbar.Brand href="#home"><img src={'https://cdni.iconscout.com/illustration/premium/thumb/portfolio-illustration-download-in-svg-png-gif-file-formats--actress-making-multimedia-industry-pack-illustrations-5624195.png'} className="imgg" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>MyPortfolio</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="https://facebook.com" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa fa-facebook" style={{ fontSize: '20px', color: '#3b5998', marginRight: '10px' }}></i>
            Facebook
          </Nav.Link>
          <Nav.Link href="https://linkedin.com" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa fa-linkedin" style={{ fontSize: '20px', color: '#0077b5', marginRight: '10px' }}></i>
            LinkedIn
          </Nav.Link>
          <Nav.Link href="mailto:example@gmail.com" style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa fa-envelope" style={{ fontSize: '20px', color: '#db4437', marginRight: '10px' }}></i>
            Gmail
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};