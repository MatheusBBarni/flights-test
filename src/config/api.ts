import axios from 'axios';

import { API_URL, API_VERSION } from './constants';

const api = axios.create({
  baseURL: `${API_URL}/${API_VERSION}`,
});

export default api;
