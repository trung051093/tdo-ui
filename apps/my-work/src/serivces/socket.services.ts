import { injectable, inject } from 'inversify';
import io from 'socket.io-client';
import { ServiceTypes } from './types';

export interface ISocketServices {
  test: () => void;
}

@injectable()
export class SocketServices implements ISocketServices {
  private _socket: SocketIOClient.Socket | null;
  private _wsConnectionString: string;

  public constructor(
    @inject(ServiceTypes.wsConnectionString) wsConnectionString: string
  ) {
    this._socket = null;
    this._wsConnectionString = wsConnectionString;
    this.connect();
  }

  private connect() {
    this._socket = io(this._wsConnectionString, {
      transports: ['websocket'],
    });
    console.log(
      '🚀 ~ file: socket.services.ts ~ line 27 ~ SocketServices ~ connect ~ this._socket',
      this._socket
    );
    this._socket.on('connect', () => {
      console.log('connect id:', this._socket?.id);
    });
    this._socket.emit('/');
    this._socket.emit('/reply', (msg: any) => {
      console.log('msg', msg);
    });
  }

  test = () => {
    console.log('test function:', this);
  }
}
