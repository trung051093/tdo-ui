import getDecorators from 'inversify-inject-decorators';
import { Container, decorate, injectable } from 'inversify';
import { IAuthServices, AuthServices } from './auth.services';
import { IUserServices, UserServices } from './user.services';
import { FileServices, IFileServices } from './file.services';
import { ISocketServices, SocketServices } from './socket.services';
import { BaseService } from '@tdo-ui/core';
import { ServiceTypes } from './types';

const container = new Container({ defaultScope: 'Singleton' });

decorate(injectable(), BaseService);

// const { lazyInject } = getDecorators(container);

container.bind<IAuthServices>(ServiceTypes.authServices).to(AuthServices);
container.bind<IUserServices>(ServiceTypes.userServices).to(UserServices);
container.bind<IFileServices>(ServiceTypes.fileServices).to(FileServices);
container
  .bind<string>(ServiceTypes.wsConnectionString)
  .toConstantValue('http://localhost:8080/socket.io/');
container.bind<ISocketServices>(ServiceTypes.socketServices).to(SocketServices).inSingletonScope();

export { container };
