import axios from 'axios';
import { getGithubSearchUrl, getGithubToken } from '../service/config';

const githubURL = getGithubSearchUrl();
const githubToken = getGithubToken();

const github = axios.create({
  baseURL: githubURL,
  headers: { Authorization: `token ${githubToken}` },
});

export const searchUsers = async (text: string) => {
  const response = await github(`/search/users?q=${text}`);
  return response.data.items;
};

export const getUserAndRepos = async (login: string) => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      github(`/users/${login}`),
      github(`/users/${login}/repos`, {
        params: {
          sort: 'created',
          per_page: '10',
        },
      }),
    ]);

    return {
      user: userResponse.data,
      repos: reposResponse.data,
    };
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      document.location.href = '/notfound';
    } else {
      throw error;
    }
  }
};
