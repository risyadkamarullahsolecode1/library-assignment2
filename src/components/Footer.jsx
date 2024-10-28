import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary py-4 mt-auto">
      <Container>
        <Row className="align-items-center justify-content-between flex-column flex-sm-row">
          <Col className="col-auto text-white small m-0">Copyright &copy; Restaurant Website 2024</Col>
          <Col className="col-auto">
            <a className="text-white small" href="https://www.facebook.com">Facebook</a>
            <span className="text-white mx-1">&middot;</span>
            <a className="text-white small" href="https://www.instagram.com">Instagram</a>
            <span className="text-white mx-1">&middot;</span>
            <a className="text-white small" href="https://www.twitter.com">Twitter</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
