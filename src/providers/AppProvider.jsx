import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { setInitialState } from '../actions/markdownActions';

// eslint-disable-next-line react/prop-types
export default function AppProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialState = localStorage.getItem('FILE_STORAGE'); 
    dispatch(setInitialState(JSON.parse(initialState)));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }} >
      {children}
    </AppContext.Provider>
  );
}
