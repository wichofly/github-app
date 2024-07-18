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
  user: any;
  users: User[];
  repos: Repo[];
  loading: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  users: [],
  user: {},
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
      };
    default:
      return state;
  }
};

export { initialState, githubReducer };
