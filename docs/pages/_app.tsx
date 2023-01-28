import { FC } from 'react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { AppProps as Props } from 'next/app';
import 'nifty-ui/nifty-ui.css';
import seo from '../next-seo.config';

const App: FC<Props> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
