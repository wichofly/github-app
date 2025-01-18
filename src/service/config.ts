export const getGithubSearchUrl = (): string => {
  return 'https://api.github.com';
};

export const getGithubToken = (): string => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (!token) {
    throw new Error(
      'GitHub token is not defined in the environment variables.'
    );
  }
  return token;
};
