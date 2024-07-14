import { useReducer } from 'react';
import { getGithubSearchUrl, getGithubToken } from '../service/config';
import {
  initialState,
  githubReducer,
  ACTION_TYPES,
} from '../reducer/GithubReducer';

const githubSearchUrl = getGithubSearchUrl();
const githubToken = getGithubToken();

const useGithub = () => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text: string) => {
    setLoading();

    const response = await fetch(`${githubSearchUrl}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    const data = await response.json();

    dispatch({ type: ACTION_TYPES.SET_USERS, payload: data.items });
  };

  // Get single User
  const getUser = async (login: string) => {
    setLoading();

    const response = await fetch(`${githubSearchUrl}/users/${login}`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const data = await response.json();

      dispatch({ type: ACTION_TYPES.GET_USER, payload: data });
    }
  };

  // Set Loading
  const setLoading = () => dispatch({ type: ACTION_TYPES.SET_LOADING });

  // Clear Users
  const clearUsers = () => dispatch({ type: ACTION_TYPES.SET_CLEAR });

  return {
    users: state.users,
    loading: state.loading,
    user: state.user,
    searchUsers,
    clearUsers,
    getUser,
  };
};

export default useGithub;
