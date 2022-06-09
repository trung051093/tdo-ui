import { injectable, inject } from 'inversify';
import { io, Socket } from 'socket.io-client';
import type { IUserServices } from './user.services';
import { ServiceTypes } from '@my-work/serivces/types';

export interface ISocketServices {
  test: () => void;
}

@injectable()
export class SocketServices implements ISocketServices {
  private _socket: Socket | null;
  private _wsConnectionString: string;

  public constructor(
    @inject(ServiceTypes.wsConnectionString) wsConnectionString: string
  ) {
    this._socket = null;
    this._wsConnectionString = wsConnectionString;
    this.connect();
  }

  private connect() {
    this._socket = io(this._wsConnectionString);
    this._socket.on('connect', () => {
      console.log('connect id:', this._socket?.id);
    });
    this._socket.emit('msg', () => {
      console.log('msg');
    });
  }

  test = () => {
    console.log(
      '🚀 ~ file: socket.services.ts ~ line 33 ~ SocketServices ~ test ~ this',
      this
    );
  };
}
