import { useContainer, ServiceTypes } from './useContainer';
import { ISocketServices } from '@my-work/serivces';
import { useMount, useUnmount } from 'react-use';

export const EVENT = {
  Notification: 'notification',
};

export const ROOM = {
  Notification: 'notification',
};

export type Notification = {
  id: string;
  event: string;
  message: string;
  data: any;
  createdTime: string;
};

export type UseNotificationOptions = {
  room: string;
  eventName: string;
  callback: (args?: any) => void;
};

export const useNotification = (options: UseNotificationOptions) => {
  const { joinRoom, leaveRoom, onEvent, offEvent } =
    useContainer<ISocketServices>(ServiceTypes.socketServices);

  useMount(() => {
    joinRoom(options.room);
    onEvent(options.eventName, options.callback);
  });

  useUnmount(() => {
    leaveRoom(options.room);
    offEvent(options.eventName);
  });
};

export const useConnectWebsocket = () => {
  const { connect, disconnect } = useContainer<ISocketServices>(
    ServiceTypes.socketServices
  );

  useMount(() => {
    connect();
  });

  useUnmount(() => {
    disconnect();
  });
};
