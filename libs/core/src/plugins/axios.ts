import Axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

type AxiosConfig = {
  baseUrl: string
}

export const bootstrap = async (config: AxiosConfig) => {
  Axios.defaults.baseURL = config.baseUrl as string;
  Axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config;
    },
    (error) => {
      return error;
    },
  );

  Axios.interceptors.response.use(
    (response: AxiosResponse) => {
      if(response.status < 200 || response.status > 299) {
        Promise.reject(response)
      }
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.data) {
        throw error.response.data;
      }
      throw error;
    },
  );
};
