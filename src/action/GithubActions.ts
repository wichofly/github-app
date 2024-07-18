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

// Get single User
export const getUser = async (login: string) => {
  try {
    const response = await github(`/users/${login}`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      document.location.href = '/notfound';
    } else {
      throw error;
    }
  }
};

// Get User Repos
export const getUserRepos = async (login: string) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: '10',
  });

  const response = await github(`/users/${login}/repos?${params}`);
  return response.data;
};
