import 'windi.css';

import type { AppProps } from 'next/app';
import AccessibilityProvider from 'library/provider';

function PricingTakehome({ Component, pageProps }: AppProps) {
  return (<AccessibilityProvider>
    <Component {...pageProps} />
  </AccessibilityProvider>)
}

export default PricingTakehome;
