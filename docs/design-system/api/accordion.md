# @impulse-ui-native/accordion

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

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
- `Accordion.Indicator` rotates supplied indicator content with its item's expanded state.
- `Accordion.Content` animates measured height while keeping nested content mounted.
- Public prop types are available for every compound part.

## Usage

```tsx
import { Accordion } from "@impulse-ui-native/accordion";
import { Icon } from "@impulse-ui-native/icon";
import { CaretDownIcon } from "@impulse-ui-native/icon/icons/caret-down";
import { Typography } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

export function FrequentlyAskedQuestions() {
  const tokens = useComponentsTokens().accordion;

  return (
    <Accordion.Root defaultValue="shipping">
      <Accordion.Item value="shipping">
        <Accordion.Trigger>
          <Typography.Label flex={1}>
            How long does shipping take?
          </Typography.Label>
          <Accordion.Indicator>
            <Icon
              icon={CaretDownIcon}
              size={tokens.iconSize}
              color={tokens.trigger.states.default.iconColor}
            />
          </Accordion.Indicator>
        </Accordion.Trigger>
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

## Explicit trigger content

`Accordion.Trigger` renders supplied children without adding a chevron. Supply
`Accordion.Indicator` with an icon or custom node to retain the animated rotation;
omit that part for an indicator-free trigger. Strings and numbers supplied
directly to Trigger still receive its themed label styling. When supplying a
custom label, use the trigger state tokens for the desired text and icon colors.

Migrate the removed `indicator` and `hideIndicator` props to explicit children.
The indicator part does not choose an icon or replace empty supplied content.


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/accordion/src/components/accordion.ts

```tsx
import { AccordionContent } from "./content";
import { AccordionIndicator } from "./indicator";
import { AccordionItem } from "./item";
import { AccordionRoot } from "./root";
import { AccordionTrigger } from "./trigger";

export const Accordion = {
  Content: AccordionContent,
  Item: AccordionItem,
  Indicator: AccordionIndicator,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
};
```

### packages/accordion/src/components/index.ts

```tsx
export { Accordion } from "./accordion";
```

### packages/accordion/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/accordion/src/types/accordion.types.ts

```tsx
import type { ReactNode } from "react";
import type { PressableProps, ViewProps } from "react-native";

interface AccordionRootCommonProps extends ViewProps {
  children?: ReactNode;
  collapsible?: boolean;
  disabled?: boolean;
}

export interface AccordionSingleRootProps extends AccordionRootCommonProps {
  defaultValue?: string;
  onValueChange?: (value: string | undefined) => void;
  type?: "single";
  value?: string;
}

export interface AccordionMultipleRootProps extends AccordionRootCommonProps {
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  type: "multiple";
  value?: string[];
}

export type AccordionRootProps =
  | AccordionSingleRootProps
  | AccordionMultipleRootProps;

export interface AccordionItemProps extends ViewProps {
  children?: ReactNode;
  disabled?: boolean;
  value: string;
}

export interface AccordionTriggerProps extends Omit<
  PressableProps,
  "children"
> {
  children?: ReactNode;
}

export interface AccordionIndicatorProps extends ViewProps {
  children?: ReactNode;
}

export interface AccordionContentProps extends ViewProps {
  children?: ReactNode;
}
```

### packages/accordion/src/types/index.ts

```tsx
export * from "./accordion.types";
```
