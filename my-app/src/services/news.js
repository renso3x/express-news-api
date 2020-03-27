import axios from 'axios';

import { API_URL } from '../config/api';

export const getAllNews = (query) => {
  const queryString = `page=${query.page}`;
  return axios.get(`${API_URL}/news?${queryString}`);
}
