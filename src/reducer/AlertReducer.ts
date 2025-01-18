export interface AlertState {
  msg: string;
  type: string;
}

export type AlertAction =
  | { type: 'SET_ALERT'; payload: AlertState }
  | { type: 'REMOVE_ALERT' };

const AlertReducer = (state: AlertState | null, action: AlertAction) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload;
    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
};

export default AlertReducer;
