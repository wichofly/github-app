import { useReducer } from 'react';
import { initialState, githubReducer } from '../reducer/GithubReducer';

const useGithub = () => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return {
    ...state,
    dispatch,
  };
};

export default useGithub;
