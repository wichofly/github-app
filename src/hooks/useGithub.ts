import { useReducer } from 'react';
import { getGithubUrl, getGithubToken } from '../service/config';
import { initialState, githubReducer } from '../reducer/GithubReducer';

const useGithub = () => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const githubUrl = getGithubUrl();
    const githubToken = getGithubToken();

    setLoading();
    const response = await fetch(`${githubUrl}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    const data = await response.json();

    dispatch({ type: 'SET_USERS', payload: data });
  };

  fetchUsers();

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return { users: state.users, loading: state.loading };
};

export default useGithub;
