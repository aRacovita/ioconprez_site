import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css'; // dacă vrei CSS suplimentar

function HeroSection() {
  return (
    <div className="hero-section d-flex align-items-center" id="hero">
      <Container className="text-center">
        <h1 className="text-white">Ridicări gratuite de la domiciliu</h1>
        <p className="text-white mb-4">
          Deșeuri electrice și electrocasnice
        </p>
        <Button variant="light" size="lg">Contactează-ne</Button>
      </Container>
    </div>
  );
}

export default HeroSection;
