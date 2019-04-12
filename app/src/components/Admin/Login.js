import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  const credentials = {
    username: '',
    password: '',
  };

  const [creds, setCreds] = useState(credentials);

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://shrouded-dusk-14111.herokuapp.com/api/users/login',
        creds,
      );
      localStorage.setItem('token', res.data.token);
      setCreds(credentials);
      props.history.push('/admin');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h2>login page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={creds.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={creds.password}
            onChange={handleChange}
          />
        </div>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
