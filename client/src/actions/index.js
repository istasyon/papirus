import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER } from './types';

export const loginUser = (token = null, user = null) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', user ? JSON.stringify(user) : null);
  return { type: LOGIN_USER, payload: user };
};

export const logoutUser = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return { type: LOGOUT_USER };
};
