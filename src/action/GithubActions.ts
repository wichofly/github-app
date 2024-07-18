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

// Get single User
export const getUser = async (login: string) => {
  const response = await fetch(`${githubSearchUrl}/users/${login}`, {
    headers: {
      Authorization: `token ${githubToken}`,
    },
  });

  if (response.status === 404) {
    document.location.href = '/notfound';
  } else {
    const data = await response.json();

    return data;
  }
};

// Get User Repos
export const getUserRepos = async (login: string) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: '10',
  });

  const response = await fetch(
    `${githubSearchUrl}/users/${login}/repos?${params}`,
    {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
