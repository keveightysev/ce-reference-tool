import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

axios.interceptors.request.use(config => {
  config.headers.authorization = localStorage.getItem('token');
  return config;
});

const Verify = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default Verify;
