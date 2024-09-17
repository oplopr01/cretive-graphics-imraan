// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Get in Touch</h5>
            <p>
              <i className="fas fa-phone"></i> +966 12 345 6789
              <br />
              <i className="fas fa-envelope"></i> <a href="mailto:info@alphagraphics.com">info@alphagraphics.com</a>
            </p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Follow Us</h5>
            <p>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="copyright">
            <p>&copy; 2023 Alpha Graphics. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;