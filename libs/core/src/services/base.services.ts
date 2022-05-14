import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export abstract class BaseService {
  async post<T, R extends AxiosResponse>(
    path: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return Axios.post(path, data, config);
  }

  async put<T, R>(
    path: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return Axios.put(path, data, config);
  }

  async patch<T, R>(
    path: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return Axios.patch(path, data, config);
  }

  async get<T, R>(path: string, params?: T, config?: AxiosRequestConfig): Promise<R> {
    return Axios.get(path, { ...config, params: params });
  }

  async delete<T, R>(
    path: string,
    params?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return Axios.delete(path, { ...config, params });
  }
}
