import "reflect-metadata";
import { Container } from "inversify";
import { ServiceTypes } from "./types";
import { IAuthServices, AuthServices } from "./auth.services";
import { IUserServices, UserServices } from "./user.services";

const container = new Container({ defaultScope: "Singleton" });
container.bind<IAuthServices>(ServiceTypes.authServices).to(AuthServices);
container.bind<IUserServices>(ServiceTypes.userServices).to(UserServices);

export default container;