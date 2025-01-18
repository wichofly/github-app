import { useReducer, Dispatch } from 'react';
import { initialState, githubReducer, Action } from '../reducer/GithubReducer';

const useGithub = () => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return {
    ...state,
    dispatch: dispatch as Dispatch<Action>,
  };
};

export default useGithub;
