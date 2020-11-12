import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { APP_NAME } from '../config';

const Header = () => {
  return (
    <div>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link href='/' passHref>
            <Navbar.Brand>{APP_NAME}</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Item>
                <Link href='/signup' passHref>
                  <Nav.Link>Sign Up</Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href='/signin' passHref>
                  <Nav.Link>Signin</Nav.Link>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
