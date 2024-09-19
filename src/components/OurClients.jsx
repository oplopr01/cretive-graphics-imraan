import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import heroImage from '../.'; // Placeholder logo image
import './OurClients.css'; // For custom animations and styles

const OurClients = () => {
  const clients = [
   { name: 'Company 2', logo: "demo.jpg" },
   { name: 'Company 2', logo: "demo.jpg" },
   { name: 'Company 2', logo: "demo.jpg" },
   { name: 'Company 2', logo: "demo.jpg" },
    
  ];

  return (
    <section className="happy-clients-section">
      <Container>
        <h2 className="text-center ourclient-main-heading">Our Happy Clients</h2>
        <Row className="mt-4">
          {clients.map((client, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
              <Card className="client-card">
                <Card.Img variant="top" src={client.logo} alt={client.name} />
                <Card.Body>
                  <Card.Title className="text-center">{client.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurClients;
