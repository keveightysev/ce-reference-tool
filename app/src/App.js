import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { AppContext } from './Context';

import Global from './styles/Global';
import Home from './components/Home';
import Login from './components/Admin/Login';
import Verify from './components/Admin/Verify';
import Admin from './components/Admin';

const App = props => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    let didCancel = false;
    const getData = async () => {
      dispatch({ type: 'GET_START' });
      try {
        const res = await axios.get(
          'https://shrouded-dusk-14111.herokuapp.com/api/boards',
        );
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
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Verify path='/admin' exact component={Admin} />
    </>
  );
};

export default App;
