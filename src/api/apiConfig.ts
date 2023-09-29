import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NA.2HjdmMRAOHt6uRi-yHGmgRfbMr1GqdFtYDNshGpgInuwmCNWz7m2l7Q4dJR7',
  },
});
