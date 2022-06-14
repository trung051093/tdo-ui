import React from 'react';
import {
  ROOM,
  EVENT,
  Notification,
  useConnectWebsocket,
  useNotification,
  useConfirmMessage,
  useSearchUser,
} from '@my-work/hooks';

const NotificationComponent = () => {
  const { refetch } = useSearchUser({});
  const { showMessage } = useConfirmMessage({
    title: 'Refresh data',
    description: 'New user just added. Do you want refresh table?',
    onConfirm: () => refetch(),
  });
  useConnectWebsocket();
  useNotification({
    room: ROOM.Notification,
    eventName: EVENT.Notification,
    callback: (agrs: Notification) => {
      console.log('notification:', agrs);
      showMessage();
    },
  });
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};

export default React.memo(NotificationComponent);
