import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ServicesSection() {
  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="mb-4 text-center">Serviciile Noastre</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/400x200" alt="Deseuri Electr."/>
              <Card.Body>
                <Card.Title>Colectare Deșeuri Electronice</Card.Title>
                <Card.Text>
                  Ridicăm gratuit computere vechi, televizoare, frigidere etc.
                </Card.Text>
                <Button variant="success">Află mai multe</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/400x200" alt="Alte Deseuri"/>
              <Card.Body>
                <Card.Title>Alte Deșeuri</Card.Title>
                <Card.Text>
                  Acceptăm plastic, hârtie, metal și multe altele, cu preluare rapidă.
                </Card.Text>
                <Button variant="success">Contactează-ne</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/400x200" alt="Metale Pretioase"/>
              <Card.Body>
                <Card.Title>Extragere Metale Prețioase</Card.Title>
                <Card.Text>
                  <strong>În curând</strong>: tratare pentru extragerea aurului și altor metale valoroase.
                </Card.Text>
                <Button variant="success" disabled>În curând</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;
