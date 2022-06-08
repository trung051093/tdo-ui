import { interfaces } from 'inversify'
import { IAuthServices } from "./auth.services";
import { IFileServices } from './file.services';
import { IUserServices } from "./user.services";
import { ISocketServices } from './socket.services';

export const ServiceTypes = {
    authServices: Symbol.for("authServices") as interfaces.ServiceIdentifier<IAuthServices>,
    userServices: Symbol.for("userServices") as interfaces.ServiceIdentifier<IUserServices>,
    fileServices: Symbol.for("fileServices") as interfaces.ServiceIdentifier<IFileServices>,
    wsConnectionString: "wsConnectionString",
    socketServices: Symbol.for("socketServices") as interfaces.ServiceIdentifier<ISocketServices>,
};

