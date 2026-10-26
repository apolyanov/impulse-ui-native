# @impulse-ui-native/accordion: capability guide

Reveal or collapse sections without changing screens.

## Setup

- ThemeProvider; install the owning package peer dependencies.

## Capabilities

- Single or multiple expansion; controlled/uncontrolled values.
- Item-level disabling and animated content; custom trigger/indicator children.

## Boundaries and composition

- Root owns expansion; Item owns item context. Trigger, Indicator and Content require the matching Item.
- There is no visual variant/tone axis; do not invent one.

Exact contracts: [API reference](../api/accordion.md). Machine facts: [package JSON](accordion.json) or [full catalog](../capabilities.json).

## Recipes

- [disclosure-settings](../recipes.md#disclosure-settings)

## Public components

## Manifest peer requirements

Optional refers to the package manifest; individual features may still require that peer at runtime.

| Peer                      | Range     | Optional |
| ------------------------- | --------- | -------- |
| `react`                   | `>=18`    | No       |
| `react-native`            | `>=0.73`  | No       |
| `react-native-reanimated` | `>=3.6.0` | No       |
| `react-native-worklets`   | `>=0.5`   | No       |

### Accordion.Content

Source: `packages/accordion/src/components/content.tsx:17`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Accordion.Item inside Accordion.Root
- **contentContract**: Render supplied children; the part does not invent label/icon content.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `ReactNode`                                            |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: none detected. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Accordion.Indicator

Source: `packages/accordion/src/components/indicator.tsx:12`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Accordion.Item inside Accordion.Root
- **contentContract**: Render supplied children; the part does not invent label/icon content.

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `ReactNode`                                            |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |

Style props: none detected. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Accordion.Item

Source: `packages/accordion/src/components/item.tsx:13`. Direct defaults: `disabled=false`.

- **requiresParent**: Accordion.Root

| Prop       | Required | Type / choices                                         |
| ---------- | -------- | ------------------------------------------------------ |
| `children` | No       | `ReactNode`                                            |
| `disabled` | No       | `boolean \| undefined`                                 |
| `onLayout` | No       | `((event: LayoutChangeEvent) => unknown) \| undefined` |
| `style`    | No       | `____ViewStyleProp_Internal \| undefined`              |
| `testID`   | No       | `string \| undefined`                                  |
| `value`    | Yes      | `string`                                               |

Style props: none detected. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Accordion.Root

Source: `packages/accordion/src/components/root.tsx:21`. Direct defaults: `collapsible=true`, `disabled=false`, `type="single"`.

- **valueContract**: Single mode uses string; multiple mode uses string[].

Discriminated/value alternatives (do not mix incompatible modes):

- Required: none; `defaultValue: string | undefined`; `type: "single" | undefined`; `value: string | undefined`.
- Required: `type`; `defaultValue: string[] | undefined`; `type: "multiple"`; `value: string[] | undefined`.

| Prop            | Required | Type / choices                                                                       |
| --------------- | -------- | ------------------------------------------------------------------------------------ |
| `children`      | No       | `ReactNode`                                                                          |
| `collapsible`   | No       | `boolean \| undefined`                                                               |
| `defaultValue`  | No       | `string \| string[] \| undefined`                                                    |
| `disabled`      | No       | `boolean \| undefined`                                                               |
| `onLayout`      | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                               |
| `onValueChange` | No       | `((value: string \| undefined) => void) \| ((value: string[]) => void) \| undefined` |
| `style`         | No       | `____ViewStyleProp_Internal \| undefined`                                            |
| `testID`        | No       | `string \| undefined`                                                                |
| `type`          | No       | `multiple / single`                                                                  |
| `value`         | No       | `string \| string[] \| undefined`                                                    |

Style props: none detected. Additional inherited native props: 110. See exact API types for these inherited contracts.

### Accordion.Trigger

Source: `packages/accordion/src/components/trigger.tsx:22`. Direct defaults: not statically resolved here; consult the owning implementation or inherited defaults.

- **requiresParent**: Accordion.Item inside Accordion.Root
- **contentContract**: Render supplied children; the part does not invent label/icon content.

| Prop          | Required | Type / choices                                                                                      |
| ------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `children`    | No       | `ReactNode`                                                                                         |
| `onLayout`    | No       | `((event: LayoutChangeEvent) => unknown) \| undefined`                                              |
| `onLongPress` | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `onPress`     | No       | `((event: GestureResponderEvent) => unknown) \| undefined`                                          |
| `style`       | No       | `____ViewStyleProp_Internal \| ((state: PressableStateCallbackType) => ViewStyleProp) \| undefined` |
| `testID`      | No       | `string \| undefined`                                                                               |

Style props: none detected. Additional inherited native props: 124. See exact API types for these inherited contracts.

## Public exports

- `Accordion` (value)
- `AccordionContentProps` (type)
- `AccordionIndicatorProps` (type)
- `AccordionItemProps` (type)
- `AccordionMultipleRootProps` (type)
- `AccordionRootProps` (type)
- `AccordionSingleRootProps` (type)
- `AccordionTriggerProps` (type)
