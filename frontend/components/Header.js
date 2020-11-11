import { useState } from 'react';
import { APP_NAME } from '../config';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

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
              <Nav.Link>
                <Link href='/signup' passHref>
                  <Nav.Link>Signup</Nav.Link>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href='/signin' passHref>
                  <Nav.Link>Signin</Nav.Link>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
