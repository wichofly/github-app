export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks: number;
  open_issues: number;
}
