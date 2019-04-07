import React, { useEffect, useContext } from 'react';
import axios from 'axios';

import { AppContext } from './Context';

import Global from './styles/Global';
import Header from './styles/Header';

import Selector from './components/Selector';
import BoardList from './components/BoardList';

const App = props => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    let didCancel = false;
    const getData = async () => {
      dispatch({ type: 'GET_START' });
      try {
        const res = await axios.get('http://localhost:5000/api/boards');
        if (!didCancel) {
          dispatch({ type: 'GET_SUCCESS', payload: res.data });
        }
      } catch (err) {
        if (!didCancel) {
          dispatch({ type: 'GET_FAILURE' });
        }
      }
    };
    getData();
    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <>
      <Global />
      <Header>
        <h1>CE Reference Tool</h1>
      </Header>
      <Selector />
      <BoardList />
    </>
  );
};

export default App;
