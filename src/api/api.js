import axios from 'axios';
import BASE_URL from '../config';

// eslint-disable-next-line import/prefer-default-export
export const createRequest = (options, config) => {
  const {
    onRequestStart = () => {},
    onRequestData = () => {},
    onRequestEnd = () => {},
    onError = () => {},
  } = config;
  onRequestStart();
  axios
    .request({
      headers: {
        'Content-Type': 'application/json',
      },
      baseURL: BASE_URL,
      ...options,
    })
    .then((response) => onRequestData(response.data))
    .catch((error) => { onError(error); })
    .finally(() => onRequestEnd());
};
