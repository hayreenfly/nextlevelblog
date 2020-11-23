import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { APP_NAME } from '../config';
import { logout } from '../actions/userActions';

const Header = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const logoutHandler = () => {
    dispatch(logout());
    router.push('/signin');
  };
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
              {userInfo ? (
                <>
                  <Nav.Item>
                    <Link
                      href={
                        userInfo && userInfo.role !== 1 ? '/user' : '/admin'
                      }
                      passHref
                    >
                      <Nav.Link>
                        <i class='fas fa-laptop-house'></i>
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                  <NavDropdown title={userInfo.name} id='username'>
                    <Link href='/profile' passHref>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
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
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
