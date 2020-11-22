import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Message from '../Message';
import { signin } from '../../actions/userActions';

const SigninComponent = () => {
  const router = useRouter();

  const [email, setEmail] = useState('user@localhost.com');
  const [password, setPassword] = useState('123456');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  useEffect(() => {
    console.log(userInfo);
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
    dispatch(signin(email, password));
  };

  return (
    <Form className='mt-5' onSubmit={submitHandler}>
      <h2>Sign In Page</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}

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

      <Button type='submit' variant='primary'>
        Sign In
      </Button>
    </Form>
  );
};

export default SigninComponent;
