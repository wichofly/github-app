import { Repo, User } from '../interfaces/interface';

interface State {
  user: User | null;
  users: User[];
  repos: Repo[];
  loading: boolean;
}

export type Action =
  | { type: ACTION_TYPES.SET_USERS; payload: User[] }
  | {
      type: ACTION_TYPES.GET_USER_AND_REPOS;
      payload: { user: User; repos: Repo[] };
    }
  | { type: ACTION_TYPES.SET_LOADING; payload: boolean }
  | { type: ACTION_TYPES.SET_CLEAR };

const initialState: State = {
  users: [],
  user: null,
  repos: [],
  loading: false,
};

export enum ACTION_TYPES {
  SET_USERS = 'SET_USERS',
  SET_LOADING = 'SET_LOADING',
  SET_CLEAR = 'SET_CLEAR',
  GET_USER_AND_REPOS = 'GET_USER_AND_REPOS',
}

const githubReducer = (state: State = initialState, action: Action) => {
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
        repos: [], // Also clear repos
      };
    default:
      return state;
  }
};

export { initialState, githubReducer };
