import { useEffect, useReducer } from 'react';
import { getGithubUrl, getGithubToken } from '../service/config';
import { initialState, githubReducer } from '../reducer/GithubReducer';

const useGithub = () => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const githubUrl = getGithubUrl();
    const githubToken = getGithubToken();

    const response = await fetch(`${githubUrl}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    const data = await response.json();

    dispatch({ type: 'SET_USERS', payload: data });
  };

  return { users: state.users, loading: state.loading };
};

export default useGithub;
