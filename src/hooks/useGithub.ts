import { useReducer } from 'react';
import { getGithubSearchUrl, getGithubToken } from '../service/config';
import { initialState, githubReducer } from '../reducer/GithubReducer';

const useGithub = () => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text: string) => {
    const githubSearchUrl = getGithubSearchUrl();
    const githubToken = getGithubToken();

    setLoading();
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${githubSearchUrl}/search/users?${params}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    const { items } = await response.json();

    dispatch({ type: 'SET_USERS', payload: items });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return { users: state.users, loading: state.loading, searchUsers };
};

export default useGithub;
