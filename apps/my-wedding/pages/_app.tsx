import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ScrollingProvider } from 'react-scroll-section';
import { theme } from '@my-wedding/themes';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ScrollingProvider>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ScrollingProvider>
    </ChakraProvider>
  );
}

export default CustomApp;
