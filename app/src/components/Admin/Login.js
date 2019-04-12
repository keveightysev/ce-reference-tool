import React, { useState, useContext } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { AppContext } from '../../Context';

import { LoginPage } from '../../styles/LoginPage';

const Login = props => {
  const credentials = {
    username: '',
    password: '',
  };

  const [creds, setCreds] = useState(credentials);

  const { state, dispatch } = useContext(AppContext);

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        'https://shrouded-dusk-14111.herokuapp.com/api/users/login',
        creds,
      );
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.role });
      localStorage.setItem('token', res.data.token);
      setCreds(credentials);
      props.history.push('/admin');
    } catch (err) {
      if (err.response.status === 401) {
        dispatch({ type: 'INVALID_CREDENTIALS' });
      } else {
        console.log(err.response);
        dispatch({ type: 'LOGIN_FAILURE' });
      }
      setCreds(credentials);
    }
  };

  return (
    <LoginPage>
      <h2>Admin Login</h2>
      <p
        style={
          state.invalidCreds
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      >
        Invalid Credentials
      </p>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='username' className='sr'>
            Username
          </label>
          <input
            type='text'
            id='username'
            value={creds.username}
            onChange={handleChange}
            placeholder='Username'
          />
        </div>
        <div>
          <label htmlFor='password' className='sr'>
            Password
          </label>
          <input
            type='password'
            id='password'
            value={creds.password}
            onChange={handleChange}
            placeholder='Password'
          />
        </div>
        <button>Login</button>
      </form>
    </LoginPage>
  );
};

export default withRouter(Login);
