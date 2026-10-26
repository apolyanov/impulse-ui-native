# @impulse-ui-native/pagination: capability guide

Navigate numbered pages with a controlled or uncontrolled page.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- Full/compact/adaptive layout, counts and navigation buttons.
- Shared sizes and tone-aware active page styling.

## Boundaries and composition

- Pagination changes page state; it does not fetch or slice data.
- Read page/pageCount prop names instead of assuming value/items.

Exact contracts: [API reference](../api/pagination.md). Machine facts: [package JSON](pagination.json) or [full catalog](../capabilities.json).

## Recipes

- [data-list](../recipes.md#data-list)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer               | Range      | Optional |
| ------------------ | ---------- | -------- |
| `react`            | `>=18`     | No       |
| `react-native`     | `>=0.73`   | No       |
| `react-native-svg` | `>=13.9.0` | No       |

### Pagination

Source: `packages/pagination/src/components/pagination.tsx:29`. Direct defaults: `compact=false`, `defaultPage=1`, `disabled=false`, `getCompactLabel=getDefaultCompactLabel`, `size="medium"`, `tone="primary"`.

Discriminated/value alternatives (do not mix incompatible modes):

- Required: `page`, `pageCount`; .
- Required: `pageCount`; .

| Prop              | Required | Type / choices                                         |
| ----------------- | -------- | ------------------------------------------------------ |
| `compact`         | No       | `boolean \| undefined`                                 |
| `defaultPage`     | No       | `number \| undefined`                                  |
| `disabled`        | No       | `boolean \| undefined`                                 |
| `getCompactLabel` | No       | `PaginationCompactLabelFormatter \| undefined`         |
| `onLayout`        | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `onPageChange`    | No       | `((page: number) => void) \| undefined`                |
| `page`            | No       | `number \| undefined`                                  |
| `pageCount`       | Yes      | `number`                                               |
| `size`            | No       | `large / medium / small`                               |
| `style`           | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`          | No       | `string \| undefined`                                  |
| `tone`            | No       | `neutral / primary / secondary`                        |

Style props: none detected. Additional inherited native props: 110. See exact API types for these inherited contracts.

## Public exports

- `Pagination` (value)
  - `(props: PaginationProps): import("react").ReactNode`
- `PaginationButtonThemeProps` (type)
- `PaginationCompactLabelFormatter` (type)
- `PaginationItemValue` (type)
- `PaginationProps` (type)
- `PaginationThemeProps` (type)
