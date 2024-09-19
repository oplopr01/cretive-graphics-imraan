// Services.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './services.css'; // Add a custom CSS file for styles

const Services = () => {
  return (
    <section className="services-section">
      <Container>
        <h2 className="services-main-heading">Our Services</h2>
        
        <Row className="service-row">
          <Col lg={12} className="services-text">
            <h3 className="service-heading">Advertising, <span className="sub-heading">designing / printing</span></h3>
            <h6 className="sub-section-heading">Advertising and Marketing Plan</h6>
            <p className="service-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, 
              vestibulum magna sed, convallis ex.
            </p>
            <h6 className="sub-section-heading">Graphic Design Copy Writing and Printing</h6>
            <p className="service-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, 
              vestibulum magna sed, convallis ex.
            </p>
          </Col>
          <Col lg={12} className="services-image">
            <Image src="/demo.jpg" alt="services Image" />
          </Col>
        </Row>
        
        <Row className="service-row">
          <Col lg={12} className="services-text">
            <h3 className="service-heading">Outdoor Advertising, <span className="sub-heading">media / printing</span></h3>
            <h6 className="sub-section-heading">Outdoor Printing</h6>
            <p className="service-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, 
              vestibulum magna sed, convallis ex.
            </p>
            <h6 className="sub-section-heading">Indoor Printing</h6>
            <p className="service-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, 
              vestibulum magna sed, convallis ex.
            </p>
          </Col>
          <Col lg={12} className="services-image">
            <Image src="/demo.jpg" alt="services Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
