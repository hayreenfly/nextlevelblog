import React, { useEffect } from 'react';
import router from 'next/router';
import { isAuth } from '../../actions/userActions';

const Admin = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      router.push('/signin');
    } else if (isAuth().role !== 1) {
      router.push('/');
    }
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default Admin;
