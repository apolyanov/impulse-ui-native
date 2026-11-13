# @impulse-ui-native/form-field: capability guide

Add a label, description and validation to a custom control.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- Render-prop children receive controlProps and invalid/required flags.

## Boundaries and composition

- Spread supplied controlProps into the custom control.
- FormField does not own the control value or perform validation; do not duplicate labels already supplied to Input.

Exact contracts: [API reference](../api/form-field.md). Machine facts: [package JSON](form-field.json) or [full catalog](../capabilities.json).

## Recipes

- [account-form](../recipes.md#account-form)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer           | Range    | Optional |
| -------------- | -------- | -------- |
| `react`        | `>=18`   | No       |
| `react-native` | `>=0.73` | No       |

### FormField

Source: `packages/form-field/src/components/form-field.tsx:13`. Direct defaults: `disabled=false`, `required=false`.

| Prop          | Required | Type / choices                                         |
| ------------- | -------- | ------------------------------------------------------ |
| `children`    | Yes      | `(props: FormFieldRenderProps) => ReactNode`           |
| `description` | No       | `string \| undefined`                                  |
| `disabled`    | No       | `boolean \| undefined`                                 |
| `error`       | No       | `string \| undefined`                                  |
| `label`       | Yes      | `string`                                               |
| `onLayout`    | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `ref`         | No       | `Ref<ReactNativeElement> \| undefined`                 |
| `required`    | No       | `boolean \| undefined`                                 |
| `style`       | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`      | No       | `string \| undefined`                                  |

Style props: `alignContent`, `alignItems`, `alignSelf`, `aspectRatio`, `backgroundColor`, `borderBottomColor`, `borderBottomLeftRadius`, `borderBottomRightRadius`, `borderBottomWidth`, `borderColor`, `borderLeftColor`, `borderLeftWidth`, `borderRadius`, `borderRightColor`, `borderRightWidth`, `borderStyle`, `borderTopColor`, `borderTopLeftRadius`, `borderTopRightRadius`, `borderTopWidth`, `borderWidth`, `bottom`, `color`, `columnGap`, `elevation`, `flex`, `flexBasis`, `flexDirection`, `flexGrow`, `flexShrink`, `flexWrap`, `gap`, `height`, `justifyContent`, `left`, `margin`, `marginBottom`, `marginHorizontal`, `marginLeft`, `marginRight`, `marginTop`, `marginVertical`, `maxHeight`, `maxWidth`, `minHeight`, `minWidth`, `opacity`, `overflow`, `padding`, `paddingBottom`, `paddingHorizontal`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingVertical`, `position`, `right`, `rowGap`, `shadow`, `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowPosition`, `shadowRadius`, `top`, `width`, `zIndex`. Additional inherited native props: 110. See exact API types for these inherited contracts.

## Public exports

- `FormField` (value)
  - `(props: FormFieldProps): import("react").ReactNode`
- `FormFieldControlProps` (type)
- `FormFieldProps` (type)
- `FormFieldRenderProps` (type)
