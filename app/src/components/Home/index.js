import React from 'react';

import Selector from './Selector';
import BoardList from './BoardList';

import Header from '../../styles/Header';
import { LoginBtn } from '../../styles/LoginBtn';

const Home = props => {
  const handleLogin = e => {
    e.preventDefault();
    props.history.push('/login');
  };
  return (
    <>
      <LoginBtn onClick={handleLogin}>Admin Login</LoginBtn>
      <Header>
        <h1>CE Reference Tool</h1>
      </Header>
      <Selector />
      <BoardList />
    </>
  );
};

export default Home;
