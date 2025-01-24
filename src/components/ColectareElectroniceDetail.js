import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function ColectareElectroniceDetail() {
  const [formData, setFormData] = useState({
    contactName: '',
    timeInterval: '',
    items: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aici poți trimite datele către un backend / EmailJS etc.
    console.log('Date formular colectare electronice:', formData);
    alert('Solicitarea a fost trimisă! Vă vom contacta în cel mai scurt timp.');
    // Reset form (opțional)
    setFormData({
      contactName: '',
      timeInterval: '',
      items: '',
      phone: '',
      address: ''
    });
  };

  return (
    <section id="colectare-electronice-detail" className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="p-4 shadow">
              <Card.Body>
                <h2 className="mb-4">Colectare Electronice - Detalii</h2>
                <p>
                  Vă oferim servicii de colectare a aparaturii electronice 
                  (calculatoare, televizoare, frigidere etc.) în mod gratuit. 
                  Completați formularul de mai jos pentru a programa ridicarea.
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formContactName">
                    <Form.Label>Nume persoană de contact</Form.Label>
                    <Form.Control
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formTimeInterval">
                    <Form.Label>Interval orar preferat</Form.Label>
                    <Form.Control
                      type="text"
                      name="timeInterval"
                      placeholder="Ex: Luni - Vineri, 9-12"
                      value={formData.timeInterval}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formItems">
                    <Form.Label>Produsele pentru predare</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="items"
                      placeholder="Ex: 2 monitoare, 1 laptop, 1 frigider"
                      value={formData.items}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Număr de telefon</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Adresă pentru ridicare</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="success" type="submit">
                    Solicită ridicarea
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ColectareElectroniceDetail;
