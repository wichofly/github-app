import { useReducer } from 'react';
import { getGithubSearchUrl, getGithubToken } from '../service/config';
import { initialState, githubReducer } from '../reducer/GithubReducer';
import { ACTION_TYPES } from '../reducer/GithubReducer';

const useGithub = () => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text: string) => {
    const githubSearchUrl = getGithubSearchUrl();
    const githubToken = getGithubToken();

    setLoading();    
    const response = await fetch(`${githubSearchUrl}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    const data = await response.json();

    dispatch({ type: ACTION_TYPES.SET_USERS, payload: data.items });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: ACTION_TYPES.SET_LOADING });

  return { users: state.users, loading: state.loading, searchUsers };
};

export default useGithub
