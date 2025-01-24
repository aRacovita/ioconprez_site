import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ExtragereMetaleDetail() {
  return (
    <section id="extragere-metale-detail" className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="p-4 shadow">
              <Card.Body>
                <h2 className="mb-4">Extragere Metale Prețioase - Detalii</h2>
                <p>
                  Ne pregătim să oferim un serviciu de tratare și extragere 
                  a metalelor prețioase din plăci de bază, procesoare, mufe, 
                  pini placați, și alte echipamente electronice. 
                </p>
                <p>
                  Prin acest proces, valorificăm resursele valoroase și, 
                  totodată, reducem impactul asupra mediului. 
                  Rămâi aproape pentru anunțul oficial de lansare!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ExtragereMetaleDetail;
