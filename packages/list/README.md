# @impulse-ui-native/list

Presentation rows with a ready-made List and child-only composable parts. Applications own selection and indicators.

## Installation

`pnpm add @impulse-ui-native/list`

Install the React and React Native peers and render inside `ThemeProvider` from `@impulse-ui-native/theme`.

## Ready-made List

```tsx
import { List } from "@impulse-ui-native/list";

const items = [
  { id: "account", title: "Account", description: "Personal details" },
  { id: "preferences", title: "Preferences", onPress: openPreferences },
];

<List items={items} />;
```

Keep the items array stable when passed across renders. Every item requires a stable `id`. List assembles `List.Root`, a `List.Item` or `List.Pressable` row, optional `List.Leading` and `List.Trailing`, and `List.Content` with title, description, and custom children. Items with `onPress` use Pressable; `disabled` blocks those actions. `leading` and `trailing` accept React nodes. List's own children render after its items. It adds no selection state, scrolling, virtualization, or automatic separators.

## Custom composition

```tsx
import { Divider, Typography } from "@impulse-ui-native/primitives";

<List.Root>
  <List.Item>
    <List.Content>
      <Typography.Title6>Account</Typography.Title6>
    </List.Content>
  </List.Item>
  <Divider />
  <List.Pressable onPress={openPreferences}>
    <List.Content>
      <Typography.Body>Preferences</Typography.Body>
    </List.Content>
  </List.Pressable>
</List.Root>;
```

All namespaced parts render supplied children and accept their underlying primitive props and style overrides. Leading and Trailing keep their natural size while Content fills remaining width. Parts can be used without Root for standalone rows. Tokens come from `theme.components.list`.

List and its prop types are also exported by `@impulse-ui-native/toolkit`. Migrate imports from primitives to this package or the toolkit. Native Storybook covers ready-made rows and custom compositions.
