import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.XQPu21lQOnqwFLaOxzLZe_kLXTAFdPgIqqS9lE4XWaY44vnOmx8eHLJCII1u',
  },
});
