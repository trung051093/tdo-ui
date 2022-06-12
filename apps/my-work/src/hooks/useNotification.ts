import { useContainer, ServiceTypes } from './useContainer';
import { ISocketServices } from '@my-work/serivces';

export const QUERY_KEYS = {};

export const useNotification = () => {
  return {};
};

export const useConnectNotification = () => {
  useContainer<ISocketServices>(ServiceTypes.socketServices);
  return {};
};
