import { interfaces } from 'inversify'
import { IAuthServices } from "./auth.services";
import { IFileServices } from './file.services';
import { IUserServices } from "./user.services";

export const ServiceTypes = {
    authServices: Symbol("authServices") as interfaces.ServiceIdentifier<IAuthServices>,
    userServices: Symbol("userServices") as interfaces.ServiceIdentifier<IUserServices>,
    fileServices: Symbol("fileServices") as interfaces.ServiceIdentifier<IFileServices>
};

