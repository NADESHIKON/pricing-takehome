import 'windi.css';

import type { AppProps } from 'next/app';
import AccessibilityProvider from '@nadeshikon/accessibility/provider';

function PricingTakehome({ Component, pageProps }: AppProps) {
  return (<AccessibilityProvider>
    <Component {...pageProps} />
  </AccessibilityProvider>)
}

export default PricingTakehome;
