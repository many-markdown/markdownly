import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useSelector = selectorFn => {
  const { state } = useContext(AppContext);
  return selectorFn(state);
};
