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

interface State {
  user: User | null;
  users: User[];
  repos: Repo[];
  loading: boolean;
}

// Define the different payload types based on action types
interface SetUsersAction {
  type: ACTION_TYPES.SET_USERS;
  payload: User[]; // Users will be an array of User objects
}

interface GetUserAndReposAction {
  type: ACTION_TYPES.GET_USER_AND_REPOS;
  payload: { user: User; repos: Repo[] }; // Payload will have a user and repos
}

interface SetLoadingAction {
  type: ACTION_TYPES.SET_LOADING;
}

interface SetClearAction {
  type: ACTION_TYPES.SET_CLEAR;
}

// Use union types for Action to account for different actions
type Action =
  | SetUsersAction
  | GetUserAndReposAction
  | SetLoadingAction
  | SetClearAction;

const initialState: State = {
  users: [],
  user: null, // Use null initially instead of an empty object
  repos: [],
  loading: false,
};

export enum ACTION_TYPES {
  SET_USERS = 'SET_USERS',
  SET_LOADING = 'SET_LOADING',
  SET_CLEAR = 'SET_CLEAR',
  GET_USER_AND_REPOS = 'GET_USER_AND_REPOS',
}

const githubReducer = (state: State, action: Action): State => {
  console.log('payload: ', action.type);
  console.log('type: ', typeof action);

  switch (action.type) {
    case ACTION_TYPES.SET_USERS:
      console.log('in case...');
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ACTION_TYPES.GET_USER_AND_REPOS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.SET_CLEAR:
      return {
        ...state,
        users: [],
        user: null, // Reset user to null when clearing users
        repos: [], // Clear repos as well
      };
    default:
      return state;
  }
};

export { initialState, githubReducer };
