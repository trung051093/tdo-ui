import Axios, { AxiosStatic, AxiosError, AxiosRequestConfig } from 'axios';

type AxiosConfig = {
  baseUrl: string;
  custom?: (axios: AxiosStatic) => void;
  onRequest?: (config: AxiosRequestConfig) => void;
};

export const bootstrap = async (options?: AxiosConfig) => {
  Axios.defaults.baseURL = options?.baseUrl as string;
  Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  Axios.defaults.headers.common['Access-Control-Allow-Methods'] =
    'DELETE, POST, GET, OPTIONS';
  Axios.defaults.headers.common['Access-Control-Allow-Headers'] =
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With';

  options?.custom?.(Axios);

  Axios.interceptors.request.use(
    (config) => {
      options?.onRequest?.(config);
      return config;
    },
    (error) => {
      return error;
    }
  );

  Axios.interceptors.response.use(
    (response) => {
      if (response.status < 200 || response.status > 299) {
        Promise.reject(response);
      }
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.data) {
        throw error.response.data;
      }
      throw error;
    }
  );
};
