import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: ''
  });

  // Handle form field change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission and redirect to email client
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Let's Be Connected - Inquiry from ${formData.name}`;
    const body = `
      Name: ${formData.name}
      Company Name: ${formData.companyName}
      Email: ${formData.email}
      Phone: ${formData.phone}
    `;
    window.location.href = `mailto:demo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer className="footer" style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
      <Container>
         
          <Row className="m-4">
          <Col lg={12}>
            <h5 className="text-center" style={{ color: '#dc3545' }}>Let's Be Connected</h5>
            <Form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <Row>
                <Col lg={6} md={6}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label style={{ color: '#dc3545' }}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ borderColor: '#dc3545' }}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group controlId="formCompanyName" className="mb-3">
                    <Form.Label style={{ color: '#dc3545' }}>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your company name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      style={{ borderColor: '#dc3545' }}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label style={{ color: '#dc3545' }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ borderColor: '#dc3545' }}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label style={{ color: '#dc3545' }}>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{ borderColor: '#dc3545' }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center">
                <Button variant="danger" type="submit" style={{ padding: '10px 20px' }}>
                  Let's Be Connected
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
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
              <FaPhoneAlt style={{ marginRight: '8px' }} /> +966 12 345 6789
              <br />
              <FaEnvelope style={{ marginRight: '8px' }} />{' '}
              <a href="mailto:info@alphagraphics.com">info@alphagraphics.com</a>
            </p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Follow Us</h5>
            <p>
              <a href="https://facebook.com" className="me-3 text-dark" style={{ fontSize: '20px' }}>
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="me-3 text-dark" style={{ fontSize: '20px' }}>
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="me-3 text-dark" style={{ fontSize: '20px' }}>
                <FaInstagram />
              </a>
            </p>
          </Col>
        </Row>

          <Row className="mt-4">
          <Col lg={12} className="text-center">
            <p>&copy; 2023 Alpha Graphics. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
