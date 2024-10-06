import axios, { AxiosError } from 'axios';
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
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 404) {
        window.location.href = '/notfound';
      } else {
        throw axiosError;
      }
    } else {
      throw error;
    }
  }
};

/**
 * error: unknown: In TypeScript, it's recommended to use unknown instead of any in catch blocks since unknown forces you to narrow down the type.
 * axios.isAxiosError(error): This is a type guard provided by Axios to check if the error is an AxiosError. It helps safely determine if the error is related to an Axios request.
 * throw error: If the error isn't an Axios error, we still rethrow it, maintaining the original error handling behavior.
 
 * This approach satisfies ESLint's rule against using any and makes the error handling more precise for Axios requests.
 */
