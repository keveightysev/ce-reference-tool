import React, { createContext, useReducer } from 'react';

import { initialState, reducer } from './reducer';

const AppContext = createContext(initialState);

const AppProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
