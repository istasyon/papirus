import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER } from './types';

export const loginUser = (token = null, user = null) => {
  if (token && user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
  return { type: LOGIN_USER, payload: user };
};

export const logoutUser = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return { type: LOGOUT_USER };
};
