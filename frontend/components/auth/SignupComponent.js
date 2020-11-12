import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignupComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('handle submit');
  };
  return (
    <Form className='mt-5' onSubmit={submitHandler}>
      <h2>Sign Up Page</h2>

      <Form.Group className='mt-4' controlId='email'>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type='email'
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

      <Form.Group controlId='password'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter password'
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
