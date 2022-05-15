import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { bootstrap } from '@tdo-ui/core/plugins/axios';
import QueryClient from '@tdo-ui/core/plugins/react-query';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { App } from './app';
import { ContainerProvider } from './hooks/useContainer';
import container from './serivces/inversify.config';

bootstrap({
  baseUrl: '',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <ContainerProvider.Provider value={container}>
        <QueryClientProvider client={QueryClient}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ContainerProvider.Provider>
    </BrowserRouter>
  </StrictMode>
);
