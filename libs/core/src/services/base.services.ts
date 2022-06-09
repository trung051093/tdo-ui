import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

abstract class BaseService {
  async post<T, R>(
    path: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const result = await Axios.post<T, AxiosResponse<R>>(path, data, config);
    return result.data;
  }

  async put<T, R>(
    path: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const result = await Axios.put<T, AxiosResponse<R>>(path, data, config);
    return result.data;
  }

  async patch<T, R>(
    path: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const result = await Axios.patch<T, AxiosResponse<R>>(path, data, config);
    return result.data;
  }

  async get<T, R>(
    path: string,
    params?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const result = await Axios.get(path, { ...config, params: params });
    return result.data;
  }

  async delete<T, R>(
    path: string,
    params?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    const result = await Axios.delete(path, { ...config, params });
    return result.data;
  }
}

export default BaseService
