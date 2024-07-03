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
  loading: true,
};

const githubReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, githubReducer };
