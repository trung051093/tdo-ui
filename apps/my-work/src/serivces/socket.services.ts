import { injectable, inject } from 'inversify';
import noop from 'lodash/noop';
import io from 'socket.io-client';
import { ServiceTypes } from './types';

export interface ISocketServices {
  connect: () => void;
  disconnect: () => void;
  joinRoom: (room: string, callback?: <T>(args?: T) => void) => void;
  leaveRoom: (room: string, callback?: <T>(args?: T) => void) => void;
  onEvent: (eventName: string, callback?: <T>(args?: T) => void) => void;
  offEvent: (eventName: string, callback?: <T>(args?: T) => void) => void;
}

export type SocketCallback = <T>(args?: T) => void;

export type EventQueue = {
  eventName: string;
  callback?: SocketCallback;
};

export type JoinRoomQueue = {
  room: string;
};

@injectable()
export class SocketServices implements ISocketServices {
  private _socket: SocketIOClient.Socket | null;
  private _wsConnectionString: string;
  private _eventQueue: EventQueue[] = [];
  private _roomQueue: JoinRoomQueue[] = [];

  public constructor(
    @inject(ServiceTypes.wsConnectionString) wsConnectionString: string
  ) {
    this._socket = null;
    this._wsConnectionString = wsConnectionString;
  }

  connect = () => {
    this._socket = io(this._wsConnectionString, {
      transports: ['websocket'],
    });
    this._socket.once('connect', () => {
      console.log('connect id:', this._socket?.id);
    });
  };

  disconnect = () => {
    this._socket?.disconnect();
  };

  joinRoom = (room: string) => {
    if (!this._socket) {
      this._roomQueue.push({ room: room });
      this.flushRoomQueue();
      return;
    }
    this._socket.emit(`join:${room}`);
  };

  leaveRoom = (room: string) => {
    this._socket?.emit(`leave:${room}`);
  };

  onEvent = (
    eventName: string,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    callback: <T>(args?: T) => void = () => {}
  ) => {
    if (!this._socket) {
      this._eventQueue.push({ eventName, callback });
      this.flushEventQueue();
      return;
    }
    this._socket.on(eventName, callback);
  };

  offEvent = (
    eventName: string,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    callback: <T>(args?: T) => void = () => {}
  ) => {
    this._socket?.off(eventName, callback);
  };

  flushEventQueue = () => {
    const eventTimer = setInterval(() => {
      if (!this._socket) {
        return;
      }
      if (!this._eventQueue.length) {
        clearInterval(eventTimer);
        return;
      }
      const item = this._eventQueue.pop();
      if (item) {
        this._socket.on(item.eventName, item.callback ?? noop);
      }
    }, 1000);
  };

  flushRoomQueue = () => {
    const eventTimer = setInterval(() => {
      if (!this._socket) {
        return;
      }
      if (!this._roomQueue.length) {
        clearInterval(eventTimer);
        return;
      }
      const item = this._roomQueue.pop();
      if (item) {
        this._socket.emit(item.room);
      }
    }, 1000);
  };
}
