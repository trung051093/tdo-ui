import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { bootstrap } from '@tdo-ui/core/plugins/axios';
import QueryClient from '@tdo-ui/core/plugins/react-query';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { App } from './app';
import { ContainerProvider } from './hooks/useContainer';
import { container } from './serivces/inversify.config';
import { CookieServices } from '@tdo-ui/core';
import { ApiPaths } from './constants';

bootstrap({
  baseUrl: '',
  onRequest: (config) => {
    // minio has another authentication
    const isUploadRequest = config.url?.includes(ApiPaths.file.upload);
    const accessToken = CookieServices.getAccessToken();
    if (accessToken && !isUploadRequest) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (config as any).headers.common = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(config as any).headers.common,
        Authorization: `Bearer ${accessToken}`,
      };
    }
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ContainerProvider.Provider value={container}>
      <ColorModeScript />
      <BrowserRouter>
        <QueryClientProvider client={QueryClient}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </ContainerProvider.Provider>
  </StrictMode>
);
