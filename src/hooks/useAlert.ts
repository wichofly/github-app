import { useReducer } from 'react';
import AlertReducer from '../reducer/AlertReducer';

const useAlert = () => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set an Alert
  const setAlert = (msg: string, type: string) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });

    // setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  return {
    alert: state,
    setAlert
  };
};

export default useAlert;
