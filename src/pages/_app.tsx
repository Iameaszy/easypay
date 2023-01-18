import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import themes from '../../global/theme';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
const breakpoints = {
  base: '0em',
  sm: '62em',
  md: '90em',
  '2xl': '100em',
};
const theme = extendTheme({ breakpoints, ...themes }) as typeof themes &
  Record<string, any>;

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
