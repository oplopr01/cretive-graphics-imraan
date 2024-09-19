import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      {/* Top Layer */}
      <Navbar className="top-header py-2" style={{ backgroundColor: '#fff', borderBottom: '2px solid #ff0000' }}>
        <Container className="d-flex justify-content-between align-items-center">
          <div className="logo d-flex align-items-center">
            <img src="/demo.jpg" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <h2 style={{ color: '#ff0000', marginBottom: 0 }}>Creative Graphics</h2>
          </div>
          <div className="d-flex align-items-center">
            <a href="https://facebook.com" className="me-3 text-dark" style={{ fontSize: '20px' }}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="me-3 text-dark" style={{ fontSize: '20px' }}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="me-3 text-dark" style={{ fontSize: '20px' }}>
              <FaInstagram />
            </a>
            <Button variant="outline-danger">Request Qoutation</Button>
          </div>
        </Container>
      </Navbar>

      {/* Bottom Layer */}
      <Navbar expand="lg" className="bottom-header" style={{ backgroundColor: '#ff0000' }}>
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#about" style={{ color: '#fff' }}>About Us</Nav.Link>

              {/* Custom Dropdown for Services */}
              <div className="nav-item dropdown" style={{ position: 'relative' }}>
                <Nav.Link
                  href="#services"
                  className="dropdown-toggle"
                  style={{ color: '#fff' }}
                >
                  Services
                </Nav.Link>
                <div className="dropdown-menu">
                  <div className="row">
                    <div className="col">
                      <a href="#service1" className="dropdown-item">Graphic Design</a>
                      <a href="#service2" className="dropdown-item">Logo Creation</a>
                      <a href="#service3" className="dropdown-item">Web Design</a>
                      <a href="#service4" className="dropdown-item">Business Cards</a>
                    </div>
                    <div className="col">
                      <a href="#service5" className="dropdown-item">Flyers & Brochures</a>
                      <a href="#service6" className="dropdown-item">Poster Design</a>
                      <a href="#service7" className="dropdown-item">Packaging Design</a>
                      <a href="#service8" className="dropdown-item">Social Media Graphics</a>
                    </div>
                  </div>
                </div>
              </div>

              <Nav.Link href="#packages" style={{ color: '#fff' }}>Packages</Nav.Link>
              <Nav.Link href="#portfolio" style={{ color: '#fff' }}>Portfolio</Nav.Link>
              <Nav.Link href="#blog" style={{ color: '#fff' }}>Blog</Nav.Link>
              <Nav.Link href="#faqs" style={{ color: '#fff' }}>FAQs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
