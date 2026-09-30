# @impulse-ui-native/pagination

Token-aware page navigation for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/pagination
```

Render the component inside `ThemeProvider` from `@impulse-ui-native/theme`.
The package expects compatible `react`, `react-native`, and `react-native-svg`
peer dependencies in the host application.

## Usage

```tsx
import { Pagination } from "@impulse-ui-native/pagination";

export function ResultsPagination() {
  return <Pagination defaultPage={1} pageCount={12} />;
}
```

Use `page` and `onPageChange` for controlled state, or `defaultPage` for
uncontrolled state. Page values are normalized to the available range.

Set `compact` for the mobile-friendly previous/status/next layout:

```tsx
<Pagination compact defaultPage={3} pageCount={12} />
```

The control supports `small`, `medium`, and `large` sizes. Its visible page
window adapts to the measured width: it shows up to seven page items, condenses
to five items around the current page, and falls back to the compact status
layout when space is tighter. Set `compact` to force that layout. Override
`getCompactLabel` to localize the visible compact status text.

Pagination items use the shared primitives `Pressable`; pressed feedback comes
from that primitive and is not modeled as Pagination state or theme tokens.
