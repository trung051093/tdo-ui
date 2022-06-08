import { ServiceTypes } from '@my-work/hooks';
import { BaseService } from '@tdo-ui/core';
import { inject, injectable } from 'inversify';
import { io, Socket } from 'socket.io-client';

export interface ISocketServices {
  connect: () => void;
}

@injectable()
export class SocketServices implements ISocketServices {
  private _socket: Socket | null = null;

  constructor() {} // @inject(ServiceTypes.wsConnectionString) wsConnectionString: string

  public connect() {
    // this._socket = io('http://localhost:8080/socket.io/');
    // this._socket.on('connect', () => {
    //   console.log('connect id:', this._socket?.id);
    // });
    // this._socket.emit('msg', () => {
    //   console.log('msg');
    // });
  }
}
