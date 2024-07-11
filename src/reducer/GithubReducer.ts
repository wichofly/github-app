export interface User {
  id: number;
  login: string;
  avatar_url: string;
}

interface State {
  users: User[];
  loading: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  users: [],
  loading: false,
};

export enum ACTION_TYPES {
  SET_USERS = 'SET_USERS',
  SET_LOADING = 'SET_LOADING',
}

const githubReducer = (state: State, action: Action): State => {
  console.log('payload: ', action.type);
  console.log('type: ', typeof action);
  switch (action.type) {
    case ACTION_TYPES.SET_USERS:
      console.log('in case...')
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export { initialState, githubReducer };
