import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useSelector = selectorFn => {
  const { state } = useContext(AppContext);
  return selectorFn(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const useId = () => {
  const { searchId } = useContext(AppContext);
  return searchId;
  // /:id
};
