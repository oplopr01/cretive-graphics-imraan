// HeroSection.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg={12} className="hero-text">
            <h1 className=''>Welcome to Creative Graphics</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          
          </Col>
          <Col lg={12} className="hero-image">
            <Image src="/demo.jpg" alt="Hero Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;