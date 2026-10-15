# @impulse-ui-native/popover

Local package version: 9.1.1. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/popover

Native anchored overlays with theme tokens and Portal rendering. Tooltip and Popover share measurement and collision handling; no Overlay store or animation runtime is required.

## Installation and providers

```sh
pnpm add @impulse-ui-native/popover @impulse-ui-native/portal @impulse-ui-native/theme react-native-safe-area-context
```

Install `SafeAreaProvider`, `ThemeProvider`, and `PortalProvider` at the app root. Render `PortalsHost` last, inside a full-screen native View and the same theme/safe-area providers. Create the `PortalStore` once outside render. A custom `portalName` must match its host's `name`. Positioning measures both anchor and host in window coordinates, so an inset host also works within its own bounds.

## Compound popover

```tsx
import { Popover, Tooltip } from "@impulse-ui-native/popover";
import { Typography } from "@impulse-ui-native/primitives";

<Popover.Root placement="bottom">
  <Popover.Trigger>
    <Typography.Label>Visibility</Typography.Label>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Title>Project visibility</Popover.Title>
    <Popover.Description>Choose who can view this project.</Popover.Description>
    {/* Supply any selection controls or actions here. */}
    <Popover.Close>
      <Typography.Label>Done</Typography.Label>
    </Popover.Close>
  </Popover.Content>
</Popover.Root>;

<Tooltip content="Syncs when you’re online">
  <Typography.Label>Auto-sync info</Typography.Label>
</Tooltip>;
```

All compound parts render supplied children. `Popover.Content` owns Portal rendering and carries popover context to the host, so `Close` can dismiss there. Header, Footer, Title, and Description use independent theme styling. Other app-local React providers around an anchor do not automatically move with it; put those providers above the host or inside Content.

The convenience form composes Trigger, Content, Header, Title, Close, and Footer:

```tsx
<Popover
  trigger={<Typography.Label>Details</Typography.Label>}
  title="Project details"
>
  <Popover.Description>Updated just now.</Popover.Description>
</Popover>
```

A truthy header replaces the generated title. The header includes a neutral X close icon by default; hideClose omits it. A truthy footer renders Popover.Footer with trailing, wrapping actions. Header and Footer are child-only View parts available for compound composition. Pass body content as children; triggerProps and contentProps continue to customize the trigger and positioned panel. Titles can wrap beside the close control instead of pushing it outside the header.

## Contract

- `open`, `defaultOpen` (false), and `onOpenChange` support controlled and uncontrolled state. Controlled consumers must apply requested changes.
- `placement` accepts `top`, `bottom`, `left`, and `right`. Popover defaults to bottom; Tooltip defaults to top. Left/right are physical placements.
- A press toggles Popover. Tooltip defaults to long-press. `triggerProps.trigger` or `Popover.Trigger`'s `trigger` selects either behavior. Consumer press/long-press callbacks are preserved.
- Root `disabled` suppresses the overlay and blocks trigger changes. Trigger/Close `disabled` or `loading` blocks that part's interaction. Supply a single Trigger and Content per Root; use non-interactive visual children inside Trigger rather than nesting another pressable.
- Outside taps and Android Back request dismissal. Outside taps are consumed; there is no dim scrim. Content sizes naturally without internal scrolling. Keep popovers compact; use a sheet, dialog, or screen for larger content. Keyboard avoidance and nested overlay coordination are outside this initial API.
- Tooltip `duration` defaults to 3000ms from opening; zero persists until dismissal. Timers clean up on close/unmount. Supply strings/numbers for token-styled text or a React node for custom content.
- Popover uses one flat secondary surface with a subtle border and no default shadow. Override `components.popover` on ThemeProvider for geometry, typography, and panel styling. Tooltip owns its compact inverse styling through `components.popover.tooltip`, without a surface variant in Root or context.
- Popover content defaults to 320dp wide; Tooltip sizes to its content. Both are constrained to the available host width. Content spacing and width can be customized with primitive style props or `style`.
- Anchors and host bounds are measured on opening and polled every 100ms while open, following scrolling and layout changes. Only one measurement is in flight; slow native callbacks are allowed to finish. Closed overlays have no measurement timer. Content stays hidden until measured and when its anchor is outside the usable host bounds.
- Popover and Tooltip use rounded panels without arrows. Collision handling flips to the opposite side when it has more space, then shifts into safe-area bounds. Extremely large content can overlap the anchor after clamping.

## Exports and verification

`Popover`, `Tooltip`, and their prop and placement types are available directly or through `@impulse-ui-native/toolkit`. Storybook covers composition, controlled state, disabled triggers, long-press, and edge placements. Use the on-device Storybook host to verify rendering and interaction on iOS and Android.

## Surface migration

The surface prop and PopoverSurface type have been removed. Move former
components.popover.surfaces.elevated customizations to the flat panel tokens
(backgroundColor, borderColor, borderWidth, borderRadius, paddingHorizontal,
and paddingVertical). Move inverse hint styling to components.popover.tooltip;
its text color is named color. Customize Popover.Content directly for custom
panel styling.


## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/popover/src/components/index.ts

```tsx
import { PopoverComponent } from "./popover";
import { PopoverClose } from "./popover-close";
import { PopoverContent } from "./popover-content";
import { PopoverDescription } from "./popover-description";
import { PopoverFooter } from "./popover-footer";
import { PopoverHeader } from "./popover-header";
import { PopoverRoot } from "./popover-root";
import { PopoverTitle } from "./popover-title";
import { PopoverTrigger } from "./popover-trigger";

export const Popover = Object.assign(PopoverComponent, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Header: PopoverHeader,
  Footer: PopoverFooter,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Close: PopoverClose,
});

export { Tooltip } from "./tooltip";
```

### packages/popover/src/components/tooltip.tsx

```tsx
import { memo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import {
  useControllableState,
  useEventCallback,
  useTimer,
} from "@impulse-ui-native/core";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { TooltipProps } from "../types";
import { TooltipDuration } from "../constants/popover.constants";
import { PopoverContent } from "./popover-content";
import { PopoverDescription } from "./popover-description";
import { PopoverRoot } from "./popover-root";
import { PopoverTrigger } from "./popover-trigger";

export const Tooltip = memo(function Tooltip({
  children,
  content,
  triggerProps,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled,
  placement = "top",
  duration = TooltipDuration,
  ...props
}: TooltipProps) {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const styles = useThemedStyles(themedStyles);

  const dismiss = useEventCallback(() => setOpen(false));

  useTimer({ enabled: open && !disabled, duration, callback: dismiss });

  return (
    <PopoverRoot
      {...props}
      open={open}
      onOpenChange={setOpen}
      disabled={disabled}
      placement={placement}
    >
      <PopoverTrigger trigger="longPress" {...triggerProps}>
        {children}
      </PopoverTrigger>
      <PopoverContent shadow="sm" style={styles.content}>
        {typeof content === "string" || typeof content === "number" ? (
          <PopoverDescription style={styles.description}>
            {content}
          </PopoverDescription>
        ) : (
          content
        )}
      </PopoverContent>
    </PopoverRoot>
  );
});

function themedStyles(theme: AppTheme) {
  const tokens = theme.components.popover.tooltip;

  return StyleSheet.create({
    content: {
      width: "auto",
      backgroundColor: tokens.backgroundColor,
      borderColor: tokens.backgroundColor,
      borderWidth: 0,
      borderRadius: tokens.borderRadius,
      paddingHorizontal: tokens.paddingHorizontal,
      paddingVertical: tokens.paddingVertical,
    },
    description: {
      color: tokens.color,
    },
  });
}
```

### packages/popover/src/index.ts

```tsx
export * from "./components";
export * from "./types";
```

### packages/popover/src/types/index.ts

```tsx
export type {
  PopoverPlacement,
  PopoverRootProps,
  PopoverTriggerProps,
  PopoverContentProps,
  PopoverHeaderProps,
  PopoverFooterProps,
  PopoverTitleProps,
  PopoverDescriptionProps,
  PopoverCloseProps,
  PopoverProps,
  TooltipProps,
} from "./popover.types";
```

### packages/popover/src/types/popover.types.ts

```tsx
import type { PropsWithChildren, ReactNode, RefObject } from "react";
import type { View as NativeView } from "react-native";

import type {
  PressableCoreProps,
  TextProps,
  ViewProps,
} from "@impulse-ui-native/primitives";

export type PopoverPlacement = "top" | "bottom" | "left" | "right";

export interface PopoverRootProps extends PropsWithChildren {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;

  disabled?: boolean;

  placement?: PopoverPlacement;
  portalName?: string;
}

export interface PopoverTriggerProps
  extends Omit<PressableCoreProps, "children">, PropsWithChildren {
  trigger?: "press" | "longPress";
}

export type PopoverContentProps = ViewProps;
export type PopoverHeaderProps = ViewProps;
export type PopoverFooterProps = ViewProps;
export type PopoverTitleProps = TextProps;
export type PopoverDescriptionProps = TextProps;
export type PopoverCloseProps = Omit<PressableCoreProps, "children"> &
  PropsWithChildren;

export interface PopoverProps extends PopoverRootProps {
  title?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  hideClose?: boolean;
  trigger: ReactNode;
  triggerProps?: PopoverTriggerProps;
  contentProps?: PopoverContentProps;
}

export interface TooltipProps extends PopoverRootProps {
  content: ReactNode;
  triggerProps?: PopoverTriggerProps;

  /** Milliseconds before dismissal. Zero keeps the hint open. */
  duration?: number;
}

export interface PopoverContextValue {
  open: boolean;
  disabled: boolean;

  setOpen: (open: boolean) => void;

  anchorRef: RefObject<NativeView | null>;
  placement: PopoverPlacement;
  portalName?: string;
}

export interface PopoverRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PopoverPosition {
  x: number;
  y: number;
  placement: PopoverPlacement;
}

export interface PopoverPositionOptions {
  anchor: PopoverRect;
  bounds: PopoverRect;
  width: number;
  height: number;

  placement: PopoverPlacement;
  gap: number;
}

export interface PopoverSurfaceStyleProps {
  bounds: PopoverRect;
  host?: PopoverRect;
  position: PopoverPosition | null;
  ready: boolean;
}
```
