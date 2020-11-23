import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Message from '../Message';
import { signup } from '../../actions/userActions';

const SignupComponent = () => {
  const router = useRouter();

  const [name, setName] = useState('Dummy Dumdum');
  const [email, setEmail] = useState('dummy@localhost.com');
  const [password, setPassword] = useState('123456');
  const [confirmPassword, setConfirmPassword] = useState('123456');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, userInfo } = userSignup;

  useEffect(() => {
    if (userInfo) {
      if (userInfo.role === 1) {
        router.push('/admin');
      } else {
        router.push('/user');
      }
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signup(name, email, password));
  };

  return (
    <Form className='mt-5' onSubmit={submitHandler}>
      <h2>Sign Up Page</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}

      <Form.Group className='mt-4' controlId='email'>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group className='mt-4' controlId='email'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='confirmPassword'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter confirm password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button type='submit' variant='primary'>
        Sign Up
      </Button>
    </Form>
  );
};

export default SignupComponent;
