import React from 'react';
import { container } from '@my-work/serivces/inversify.config';
import { ServiceTypes } from '@my-work/serivces/types';
import { interfaces, Container } from 'inversify';

export const ContainerProvider = React.createContext<
  interfaces.Container | Container
>(new Container());

export const useContainer = <Type>(
  type: interfaces.ServiceIdentifier<Type>
) => {
  const context = React.useContext(ContainerProvider);
  if (!context) {
    console.warn('Cannot found container context: ', type);
  }
  if (!context.isBound(type)) {
    console.warn('Cannot found service: ', type);
  }
  return container.get<Type>(type);
};

export { ServiceTypes };
