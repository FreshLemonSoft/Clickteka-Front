import axios from 'axios';
import BASE_URL from '../config';

const signupUser = async (userData) => axios.post(`${BASE_URL}/signup`, userData);

const signinUser = async (userData) => axios.post(`${BASE_URL}/auth/login`, userData);

export { signupUser, signinUser };
