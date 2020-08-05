import React, { useReducer } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';

// eslint-disable-next-line react/prop-types
export default function AppProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={state, dispatch} >
      {children}
    </AppContext.Provider>
  );
}
