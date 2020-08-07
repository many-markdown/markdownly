import React, { useReducer } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { useParams } from 'react-router-dom';
import { updateCurrentId } from '../actions/markdownActions';

// eslint-disable-next-line react/prop-types
export default function AppProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }} >
      {children}
    </AppContext.Provider>
  );
}
