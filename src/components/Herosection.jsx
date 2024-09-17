// HeroSection.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg={6} className="hero-text">
            <h1>Welcome to Alpha Graphics</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </Col>
          <Col lg={6} className="hero-image">
            <Image src="hero-image.jpg" alt="Hero Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;