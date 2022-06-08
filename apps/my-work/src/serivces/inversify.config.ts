import 'reflect-metadata';

import { Container, interfaces } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import { ServiceTypes } from './types';
import { IAuthServices, AuthServices } from './auth.services';
import { IUserServices, UserServices } from './user.services';
import { FileServices, IFileServices } from './file.services';
import { ISocketServices, SocketServices } from './socket.services';

const container = new Container({
  defaultScope: 'Singleton',
});
let { lazyInject } = getDecorators(container);

container.bind<IAuthServices>(ServiceTypes.authServices).to(AuthServices);
container.bind<IUserServices>(ServiceTypes.userServices).to(UserServices);
container.bind<IFileServices>(ServiceTypes.fileServices).to(FileServices);
container
  .bind<string>(ServiceTypes.wsConnectionString)
  .toConstantValue('ws://localhost:8080/socket.io/');
container.bind<ISocketServices>(ServiceTypes.socketServices).to(SocketServices);

const DECORATORS = getDecorators(container);

interface IBabelPropertyDescriptor extends PropertyDescriptor {
  initializer(): any;
}

const injectProperty = function (
  serviceIdentifier: interfaces.ServiceIdentifier<any>
) {
  const original = DECORATORS.lazyInject(serviceIdentifier);
  // the 'descriptor' parameter is actually always defined for class fields for Babel, but is considered undefined for TSC
  // so we just hack it with ?/! combination to avoid "TS1240: Unable to resolve signature of property decorator when called as an expression"
  return function (
    this: any,
    proto: any,
    key: string,
    descriptor?: IBabelPropertyDescriptor
  ): void {
    // make it work as usual
    original.call(this, proto, key);
    // return link to proto, so own value wont be 'undefined' after component's creation
    descriptor!.initializer = function () {
      return proto[key];
    };
  };
};

export { container, lazyInject, injectProperty };
