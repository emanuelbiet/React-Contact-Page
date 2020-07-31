import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:80/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'multipart/form-data'
  }
});

export default api;
