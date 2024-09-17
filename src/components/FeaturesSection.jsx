// FeaturesSection.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <Container>
        <h2>Our Features</h2>
        <Row>
          <Col lg={6} className="feature-text">
            <h3>Feature 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </Col>
          <Col lg={6} className="feature-image">
            <Image src="feature-image1.jpg" alt="Feature Image" />
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="feature-text">
            <h3>Feature 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </Col>
          <Col lg={6} className="feature-image">
            <Image src="feature-image2.jpg" alt="Feature Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;