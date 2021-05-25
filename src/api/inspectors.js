import axios from 'axios';
import localStorageService from '../services/localStorageService';
import { paths } from '../config';
/* eslint-disable no-param-reassign, no-underscore-dangle, consistent-return */

const StartAxiosInterceptors = (pushHistory) => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorageService.getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  axios.interceptors.response.use((response) => response, (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401
            && originalRequest.url === 'http://13.232.130.60:8081/v1/auth/token') {
      pushHistory(paths.signIn);
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorageService.getRefreshToken();
      return axios.post('/auth/token',
        {
          refresh_token: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            localStorageService.setToken(res.data);
            axios.defaults.headers.common.Authorization = `Bearer ${localStorageService.getAccessToken()}`;
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  });
};

export default StartAxiosInterceptors;