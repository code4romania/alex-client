import '../app/globals.css';
import { AppProps } from 'next/app';

function AlexApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default AlexApp;
