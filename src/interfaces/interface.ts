export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string; // URL to the user's GitHub profile
  name?: string; 
  type: string; // Account type (e.g., "User" or "Organization")
  location?: string; 
  bio?: string;
  blog?: string; 
  followers: number; 
  following: number; 
  public_repos: number; 
  public_gists: number; 
  hireable?: boolean; // Whether the user is hireable (optional)
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
