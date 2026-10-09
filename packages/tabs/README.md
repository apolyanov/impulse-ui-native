# @impulse-ui-native/tabs

Token-aware underline tabs for native iOS and Android. Tabs uses a flat `items` API and renders only the active panel.

## Installation

```sh
pnpm add @impulse-ui-native/tabs
```

Install React and React Native in the host application and wrap the application in `ThemeProvider` from `@impulse-ui-native/theme`. Tabs is also exported by `@impulse-ui-native/toolkit`.

## Usage

```tsx
import { Typography } from "@impulse-ui-native/primitives";
import { Tabs } from "@impulse-ui-native/tabs";

<Tabs
  defaultValue="overview"
  items={[
    {
      value: "overview",
      label: "Overview",
      content: <Typography.Master>Project overview</Typography.Master>,
    },
    {
      value: "activity",
      label: "Activity",
      content: <Typography.Master>Recent activity</Typography.Master>,
    },
    {
      value: "files",
      label: "Files",
      disabled: true,
      content: <Typography.Master>Files</Typography.Master>,
    },
  ]}
/>;
```

## API

- `items: readonly TabsItem[]`: unique string values, labels, panel content, and optional per-item `disabled`.
- `value` / `onValueChange`: controlled selection. Requests do not change the panel until the parent updates `value`.
- `defaultValue`: initial uncontrolled selection; omitted values select the first enabled item on mount.
- `disabled`: prevents all tab presses while keeping the selected panel visible.
- `size`: `small`, `medium` (default), or `large`.
- `overflow`: `scroll` (default) or `clip`. Tabs have content-width labels; scrolling uses a horizontal native ScrollView.
- `panelStyle`: styles the active panel container. Root primitive `ViewProps` are forwarded, except `children`; the `overflow` prop controls the tab list instead of the root View.

String and number labels use the default token-aware typography. Custom React nodes own their label styling. Panels are supplied content; card chrome and padding belong to the consumer.

An empty list or a value missing from the list renders no panel. Selecting the current tab does not notify again. Disabled items cannot be pressed but an explicitly selected disabled item can still display its panel. Changing items does not silently change the selection.

Only the active panel is mounted. Switching values unmounts its content, including local component state; returning mounts it again. Inactive React elements are not mounted or prerendered. There is no lazy loading, caching, or keep-mounted mode. Creating the `items` array still evaluates ordinary JavaScript expressions; put panel effects and work inside its components.

Visuals come from `theme.components.tabs`, generated with `createTabsTokens`: primary selected text and underline, secondary inactive text, disabled text, a subtle baseline, shared sizes, and panel spacing. The `states` map defines `unselected`, `selected`, `disabledUnselected`, and `disabledSelected` appearances. `getTabsItemTokens` resolves these states together with size tokens, including label color and indicator color/opacity. Both default light and dark themes are supported.

Exports: `Tabs`, `TabsProps`, `TabsItem`, and `TabsOverflow`.
