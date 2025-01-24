import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import { Navbar, Nav, Container, Button, Row, Col, Card } from 'react-bootstrap';

// Importăm noile componente
import ColectareElectroniceDetail from './components/ColectareElectroniceDetail';
import ColectareDeseuriDetail from './components/ColectareDeseuriDetail';
import ExtragereMetaleDetail from './components/ExtragereMetaleDetail';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* NAVBAR - transparent glass effect */}
      <Navbar
        expand="lg"
        fixed="top"
        className="shadow"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="text-dark">
            Ioconprez SRL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#hero" className="text-dark">Acasă</Nav.Link>
              <Nav.Link href="#services" className="text-dark">Servicii</Nav.Link>
              <Nav.Link href="#about" className="text-dark">Despre</Nav.Link>
              <Nav.Link href="#testimonials" className="text-dark">Testimoniale</Nav.Link>
              <Nav.Link href="#contact" className="text-dark">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO SECTION */}
      <section
        id="hero"
        style={{
          marginTop: '56px', 
          height: '100vh',
          background: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
            url("/images/hero-bg.png") center/cover
          `,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}
      >
        <Container className="text-center" data-aos="fade-down">
          <h1 className="mb-3">Reciclează cu noi!</h1>
          <p className="mb-4">Ioconprez SRL - ridicări gratuite, mediu mai curat</p>
          <Button variant="light" size="lg" data-aos="zoom-in">
            Contactează-ne
          </Button>
        </Container>
      </section>


      {/* STATS SECTION */}
      <section id="stats" className="py-5 bg-white">
        <Container>
          <h2 data-aos="fade-up" className="mb-4 text-center">Statistici</h2>
          <Row className="text-center">
            <Col md={4} className="mb-4" data-aos="fade-right">
              <h1 className="display-4 text-success">10K+</h1>
              <p>Kg de deșeuri reciclate anual</p>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-up">
              <h1 className="display-4 text-success">500+</h1>
              <p>Clienți mulțumiți</p>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-left">
              <h1 className="display-4 text-success">15</h1>
              <p>Ani de experiență</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-5">
        <Container>
          <h2 data-aos="fade-up" className="mb-4 text-center">Serviciile Noastre</h2>
          <Row>
            <Col md={4} className="mb-4" data-aos="fade-right">
              <Card className="shadow h-100">
                <Card.Img variant="top" src="/images/services-1.png" alt="deseuri electronice" />
                <Card.Body>
                  <Card.Title>Colectare Electronice</Card.Title>
                  <Card.Text>
                    Ridicăm gratuit computere, televizoare, frigidere etc.
                  </Card.Text>
                  {/* Buton Detalii -> ancoră */}
                  <Button variant="success" href="#colectare-electronice-detail">
                    Detalii
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4" data-aos="fade-up">
              <Card className="shadow h-100">
                <Card.Img variant="top" src="/images/services-2.png" alt="alte deseuri" />
                <Card.Body>
                  <Card.Title>Colectare Deșeuri</Card.Title>
                  <Card.Text>
                    Plastic, hârtie, metal, sticlă... avem soluții profesionale.
                  </Card.Text>
                  <Button variant="success" href="#colectare-deseuri-detail">
                    Detalii
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4" data-aos="fade-left">
              <Card className="shadow h-100">
                <Card.Img variant="top" src="/images/services-3.png" alt="metale pretioase" />
                <Card.Body>
                  <Card.Title>Extragere Metale</Card.Title>
                  <Card.Text>
                    <strong>În curând</strong>: recuperare metale prețioase
                  </Card.Text>
                  <Button variant="success" href="#extragere-metale-detail">
                    Detalii
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-5 bg-light">
        <Container>
          <h2 data-aos="fade-up" className="mb-4 text-center">Despre noi</h2>
          <Row>
            <Col md={{ span: 8, offset: 2 }} data-aos="zoom-in">
              <p>
                Ioconprez SRL este o companie din Brăila, specializată în colectarea
                și comercializarea deșeurilor de diverse tipuri...
              </p>
              <p>
                <strong>În curând:</strong> Tratare pentru extragerea metalelor 
                prețioase din plăci de bază, procesoare, mufe, pini placați și altele!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-5">
        <Container>
          <h2 data-aos="fade-up" className="mb-4 text-center">Ce spun clienții</h2>
          <Row>
            <Col md={6} className="mb-4" data-aos="fade-right">
              <Card className="border-0 shadow-sm p-3">
                <Card.Body>
                  <Card.Text>
                    "Foarte prompt și eficient. Au ridicat frigiderul fără cost suplimentar!"
                  </Card.Text>
                  <Card.Footer className="bg-transparent border-0">
                    <h5 className="text-muted mb-0">— Andrei Popescu</h5>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4" data-aos="fade-left">
              <Card className="border-0 shadow-sm p-3">
                <Card.Body>
                  <Card.Text>
                    "Profesioniști. Recomand tuturor celor care vor să scape de DEEE.”
                  </Card.Text>
                  <Card.Footer className="bg-transparent border-0">
                    <h5 className="text-muted mb-0">— Maria Ionescu</h5>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      

      {/* SECTIUNI DETALIATE (ancore) */}
      <ColectareElectroniceDetail />
      <ColectareDeseuriDetail />
      <ExtragereMetaleDetail />

{/* CONTACT SECTION (fara formular) */}
<section id="contact" className="py-5 bg-success text-white">
        <Container data-aos="fade-up">
          <h2 className="mb-4 text-center">Contactează-ne</h2>
          <Row className="text-center">
            <Col>
              <p>Str. Odessa, nr. 10, Brăila, România</p>
              <p>Telefon: 0727XXXXXX</p>
              <p>Email: ioconprez@example.com</p>
              {/* Buton WhatsApp & buton Email */}
              <div className="d-flex justify-content-center gap-3 mt-3">
                <Button
                  variant="light"
                  onClick={() => window.open('https://wa.me/40727XXXXXX', '_blank')}
                >
                  WhatsApp
                </Button>
                <Button
                  variant="light"
                  onClick={() => window.open('mailto:ioconprez@example.com', '_blank')}
                >
                  Email
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* FOOTER */}
      <footer className="bg-dark text-white py-3">
        <Container className="text-center">
          <p className="mb-0">Ioconprez SRL &copy; 2025. Toate drepturile rezervate.</p>
        </Container>
      </footer>
    </>
  );
}

export default App;
