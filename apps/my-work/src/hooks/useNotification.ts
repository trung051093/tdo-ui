import { useContainer, ServiceTypes } from './useContainer';
import { ISocketServices } from '@my-work/serivces';
import React from 'react';

export const QUERY_KEYS = {};

export const useNotification = () => {
  const { connect } = useContainer<ISocketServices>(
    ServiceTypes.socketServices
  );

  return {
    connect,
  };
};

export const useConnectNotification = () => {
  const { connect } = useContainer<ISocketServices>(
    ServiceTypes.socketServices
  );
  const connected = React.useRef(false);

  React.useEffect(() => {
    if (!connected.current) {
      connect();
      connected.current = true;
    }
  }, []);

  return {};
};
