# @impulse-ui-native/accordion

Compound accordion and collapsible sections for React Native mobile applications.

## Installation

```sh
pnpm add @impulse-ui-native/accordion react-native-reanimated react-native-worklets
```

Render the component inside `ThemeProvider` from `@impulse-ui-native/theme` and configure Reanimated for your host application.

## Main exports

- `Accordion.Root` manages controlled or uncontrolled single/multiple expansion.
- `Accordion.Item` provides an independently disabled disclosure item.
- `Accordion.Trigger` toggles its item's expanded state.
- `Accordion.Content` animates measured height while keeping nested content mounted.
- Public prop types are available for every compound part.

## Usage

```tsx
import { Accordion } from "@impulse-ui-native/accordion";
import { Typography } from "@impulse-ui-native/primitives";

export function FrequentlyAskedQuestions() {
  return (
    <Accordion.Root defaultValue="shipping">
      <Accordion.Item value="shipping">
        <Accordion.Trigger>How long does shipping take?</Accordion.Trigger>
        <Accordion.Content>
          <Typography.Body>
            Standard shipping normally arrives in three to five business days.
          </Typography.Body>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

Set `type="multiple"` and use string arrays for `value`, `defaultValue`, and `onValueChange` when several items may be open. Single accordions collapse an open item by default; use `collapsible={false}` when one item must remain open.

Content remains mounted during collapse, which preserves local and nested component state.
