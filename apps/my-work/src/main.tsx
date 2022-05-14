import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { bootstrap } from '@tdo-ui/core/plugins/axios';
import QueryClient from '@tdo-ui/core/plugins/react-query';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { App } from './app';

bootstrap({
  baseUrl: process.env['NX_API_URL'] as string,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <QueryClientProvider client={QueryClient}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
