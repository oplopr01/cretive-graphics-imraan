// CallToActionSection.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToActionSection = () => {
  return (
    <section className="call-to-action-section">
      <Container>
        <h2>Get Started Today!</h2>
        <Row>
          <Col lg={12} className="call-to-action-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionSection;