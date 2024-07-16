export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export interface Repo {
  id: number;
  name: string;
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
  GET_USER = 'GET_USER',
  GET_REPOS = 'GET_REPOS',
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
    case ACTION_TYPES.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case ACTION_TYPES.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
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
