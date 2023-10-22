import axios from 'axios';
import { getItem, saveItem } from '../utils/storage'


export const axiosDefault = () => {
  const token = getItem('TOKEN');
  const configs = {
    baseURL: 'http://10.0.21.110:6969/api',
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      withCredentials: true,
    },
    withCredentials: true,
  };

  return axios.create(configs);
};
