import React, { useEffect } from 'react';
import router from 'next/router';
import { isAuth } from '../../actions/userActions';

const Private = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      router.push('/signin');
    }
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default Private;
