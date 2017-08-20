import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

const INITIAL_STATE = {
  user: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload || false };
    case LOGOUT_USER:
      return { ...state, user: false };
    default:
      return state;
  }
}
