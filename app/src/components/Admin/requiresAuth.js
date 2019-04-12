import React from 'react';
import { Link } from 'react-router-dom';

export default function(Component) {
  return function Authenticated(props) {
    return localStorage.getItem('token') ? (
      <Component {...props} />
    ) : (
      <h2>
        Please <Link to='/login'>log in</Link> to access this page
      </h2>
    );
  };
}
