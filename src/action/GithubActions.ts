import { getGithubSearchUrl, getGithubToken } from '../service/config';

const githubSearchUrl = getGithubSearchUrl();
const githubToken = getGithubToken();

export const searchUsers = async (text: string) => {
  const response = await fetch(`${githubSearchUrl}/search/users?q=${text}`, {
    headers: {
      Authorization: `token ${githubToken}`,
    },
  });

  const data = await response.json();

  return data.items;
};
