import { useContainer, ServiceTypes } from './useContainer';
import { ISocketServices } from '@my-work/serivces';
import React from 'react';

export const QUERY_KEYS = {};

export const useNotification = () => {
  return {};
};

export const useConnectNotification = () => {
  const { test } = useContainer(ServiceTypes.socketServices);
  test();
  return {};
};
