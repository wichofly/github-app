export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

interface State {
  user: any;
  users: User[];
  loading: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  users: [],
  user: {},
  loading: false,
};

export enum ACTION_TYPES {
  SET_USERS = 'SET_USERS',
  SET_LOADING = 'SET_LOADING',
  SET_CLEAR = 'SET_CLEAR',
  GET_USER = 'GET_USER',
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
