import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ColectareDeseuriDetail() {
  const handleRequestPrices = () => {
    // Redirecționare către apel telefonic
    window.location.href = 'tel:0727XXXXXX'; 
  };

  return (
    <section id="colectare-deseuri-detail" className="py-5">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="p-4 shadow">
              <Card.Body>
                <h2 className="mb-4">Colectare Deșeuri - Detalii</h2>
                <p>
                  Oferim servicii de colectare pentru diferite tipuri de deșeuri 
                  (plastic, hârtie, metal, sticlă etc.). Odată colectate, le 
                  sortăm și valorificăm în mod responsabil, contribuind la 
                  protecția mediului.
                </p>
                <p>
                  Pentru a afla tarifele actuale și a beneficia de o ofertă personalizată,
                  contactează-ne telefonic.
                </p>
                <Button variant="success" onClick={handleRequestPrices}>
                  Solicită listă prețuri
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ColectareDeseuriDetail;
