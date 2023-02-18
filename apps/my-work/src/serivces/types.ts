import { interfaces } from 'inversify'
import { IAuthServices } from "./auth.services";
import { IFileServices } from './file.services';
import { IUserServices } from "./user.services";
import { ISocketServices } from './socket.services';
import { ISrpAuthServices } from './srp_auth.services';

export const ServiceTypes = {
    srpAuthServices: Symbol.for("srpAuthServices") as interfaces.ServiceIdentifier<ISrpAuthServices>,
    authServices: Symbol.for("authServices") as interfaces.ServiceIdentifier<IAuthServices>,
    userServices: Symbol.for("userServices") as interfaces.ServiceIdentifier<IUserServices>,
    fileServices: Symbol.for("fileServices") as interfaces.ServiceIdentifier<IFileServices>,
    wsConnectionString: "wsConnectionString",
    socketServices: Symbol.for("socketServices") as interfaces.ServiceIdentifier<ISocketServices>,
};

