// ServicesSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <Container>
        <h2>Our Services</h2>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <Card.Img variant="top" src="service-icon1.png" />
              <Card.Body>
                <Card.Title>Service 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <Card.Img variant="top" src="service-icon2.png" />
              <Card.Body>
                <Card.Title>Service 2</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card>
              <Card.Img variant="top" src="service-icon3.png" />
              <Card.Body>
                <Card.Title>Service 3</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section> 
  );
};

export default ServicesSection;