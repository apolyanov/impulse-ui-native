# @impulse-ui-native/tabs: capability guide

Switch between a few related content panels.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- Flat items API, controlled/uncontrolled value and disabled items.
- Clip/scroll overflow; initially selected tab reveal and tone-aware underline.

## Boundaries and composition

- Only the active panel is rendered; preserve application state outside unmounted panels if necessary.
- Tabs is not a Root/Item compound namespace and has no filled/outlined/soft variant axis.

Exact contracts: [API reference](../api/tabs.md). Machine facts: [package JSON](tabs.json) or [full catalog](../capabilities.json).

## Recipes

- [onboarding](../recipes.md#onboarding)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### Tabs

Source: `packages/tabs/src/components/tabs.tsx:16`. Direct defaults: `disabled=false`, `initialScrollToSelected=true`, `overflow="scroll"`, `size="medium"`, `tone="primary"`.

- **mountPolicy**: Only the active panel is rendered; items are a flat array, not Tabs.Item children.

Discriminated/value alternatives (do not mix incompatible modes):

- Required: `value`, `items`; `value: string`; `defaultValue: undefined`.
- Required: `items`; `value: undefined`; `defaultValue: string | undefined`.

| Prop                      | Required | Type / choices                                         |
| ------------------------- | -------- | ------------------------------------------------------ |
| `defaultValue`            | No       | `string \| undefined`                                  |
| `disabled`                | No       | `boolean \| undefined`                                 |
| `initialScrollToSelected` | No       | `boolean \| undefined`                                 |
| `items`                   | Yes      | `readonly TabsItem[]`                                  |
| `onLayout`                | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `onValueChange`           | No       | `((value: string) => void) \| undefined`               |
| `panelStyle`              | No       | `StyleProp<ViewStyle> \| undefined`                    |
| `size`                    | No       | `large / medium / small`                               |
| `style`                   | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`                  | No       | `string \| undefined`                                  |
| `tone`                    | No       | `neutral / primary / secondary`                        |
| `value`                   | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

## Public exports

- `Tabs` (value)
  - `(props: TabsProps): import("react").ReactNode`
- `TabsItem` (type)
- `TabsOverflow` (type)
- `TabsProps` (type)
