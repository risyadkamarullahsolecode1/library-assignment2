import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const Header = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">Library Assignment Project
          </Navbar.Brand>
          <p className="text-white">{`Today's date: ${currentDate}`}</p>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;