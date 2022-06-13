# Ranking-based Accessibility Takehome

## Usage
`npm install @nadeshikon/accessibility`

For Next.js Users:
In _app.tsx
```tsx
import type { AppProps } from 'next/app';
import AccessibilityProvider from '@nadeshikon/accessibility/provider';

function PricingTakehome({ Component, pageProps }: AppProps) {
    return (<AccessibilityProvider>
        <Component {...pageProps} />
    </AccessibilityProvider>)
}
```

React users can use ``AccessibilityProvider`` as a Higher-Order-Component

Then, in any of the pages/components, you can use the following API
`has(rank: number)` - Checks if the user currently has a rank or a higher version of that rank (defined by number)
`promote()` - Promote the user to next rank
`demote()` - Demote the user to a lower rank
`change(rank: number)` - Switches the user's current rank to a target rank

## React Hooks
`useRank()` - Returns the user's current rank

## Project Structure
`apps/website` - Demo
`packages/library` - Actual portion