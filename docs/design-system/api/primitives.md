# @impulse-ui-native/primitives

Local package version: 17.3.0. This is a repository snapshot, not a claim about the latest published package.

## Package guide

# @impulse-ui-native/primitives

Token-aware React Native building blocks used directly by applications and by the higher-level Impulse UI Native packages.

## Installation

```sh
pnpm add @impulse-ui-native/primitives
```

Render primitives inside `ThemeProvider` from `@impulse-ui-native/theme`.

`SafeAreaView` additionally requires `react-native-safe-area-context` and a `SafeAreaProvider` near the application root. Icon-based primitives require `react-native-svg`:

```sh
pnpm add react-native-safe-area-context react-native-svg
```

## Main exports

- `View` adds theme spacing, dimensions, flex, borders, colors, and shadow props to React Native's view.
- `SafeAreaView` maps safe-area edges to the theme spacing scale.
- `Typography` exposes named text presets such as `DisplayLarge`, `Title1`, `Body`, `Caption`, and `Code`. All presets accept the same direct margin and padding props as `View`, including side, horizontal, and vertical props. Explicit `style` values take precedence.
- `Button`, `IconButton`, and `Pressable` provide themed interaction primitives.
- `Tag` labels categories, filters, and metadata, with optional press and close behavior.
- `Badge` provides compact semantic labels with visual variants and Input-style prefix and suffix addons.
- `Spinner` provides token-aware sizes and semantic colors for indeterminate loading states.
- `Divider` separates content horizontally or vertically with logical insets and semantic colors.
- `Avatar` represents identity with shared visual variants, images, initials, custom fallbacks, and semantic presence status.
- `Control` is a compound control system with `Provider`, `Root`, `Label`, `Container`, `Addon`, `Input`, `Placeholder`, `Value`, `Loader`, and `Error` parts.
- `createPreset` creates reusable themed typography presets.
- Public prop types describe every primitive and control part.

All Typography presets support direct spacing props:

```tsx
<Typography.Body marginBottom={8} paddingHorizontal={16}>
  Spaced text
</Typography.Body>
```

Typography presets update their colors with the active theme:

- `Subtitle1`, `Subtitle2`, `BodySmall`, `Caption`, `Helper`, `Overline`, and
  `Eyebrow` use `theme.colors.text.secondary` for supporting text.
- The other presets use `theme.colors.text.primary` for headings and main content.

`createPreset` accepts a theme-based `color` in its configuration and falls back
to `text.primary` when omitted. Explicit `color` props override the preset color;
`style.color` takes precedence over both. Use tertiary, disabled, inverse, and
feedback colors explicitly when the surrounding component or state requires them.
Preset and explicit `fontFamily` and `fontVariant` values are honored, including
monospace Code. `numeric` selects tabular numbers; style overrides apply last.

## Example

```tsx
import { Card } from "@impulse-ui-native/card";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Spinner,
  Tag,
  Typography,
  View,
} from "@impulse-ui-native/primitives";
import { Progress } from "@impulse-ui-native/progress";
import { useSpace } from "@impulse-ui-native/theme";

export function ProfileSummary() {
  const space = useSpace();

  return (
    <View gap={space.md} padding={space.lg}>
      <Typography.Title3>Profile</Typography.Title3>
      <Avatar initials="AK" status="online" variant="soft" />
      <Tag label="Active" tone="success" />
      <Badge tone="success" variant="soft">
        Active
      </Badge>
      <Spinner size="small" tone="secondary" />
      <Progress value={65} />
      <Card.Root>
        <Card.Header>
          <Typography.Title4>Account activity</Typography.Title4>
        </Card.Header>
        <Card.Content>
          <Typography.Body>Three new updates are available.</Typography.Body>
        </Card.Content>
      </Card.Root>
      <Divider inset="both" />
      <Button variant="filled" onPress={() => {}}>
        Continue
      </Button>
    </View>
  );
}
```

Use the compound `Control` when building a custom field that should share the same label, addon, error, size, and variant behavior as `Input` and `Select`.

`Control.Input` forwards its ref to the native React Native `TextInput`. Pass an
object or callback ref to access native methods such as `focus()`, `blur()`, and
`clear()`, or connect a form library's field ref.

`Control.Trigger` combines the field container's themed geometry with a
Pressable. It respects group and local disabling and accepts supplied children,
style props, and function-valued pressable styles. `Control.Icon` renders a
caller-selected icon with the current field's addon color.

`Control.Field` assembles a label, trigger, optional prefix/suffix slots, and an
error label for a read-only selection field. The caller supplies the value,
placeholder, icons, and behavior; this convenience component does not choose
default icons or manage selection state.

```tsx
<Control.Field
  label="Destination"
  onPress={openDestinationPicker}
  prefix={<Control.Icon icon={LocationIcon} />}
>
  <Control.Value>{destination}</Control.Value>
</Control.Field>
```

`Control.Addon` and `Control.Error` render supplied children. Addons own spacing
and optional press behavior, including group/local disabling; the parent chooses
and renders icons or custom content. Error owns error-label styling; the parent
chooses the text and whether to render the slot. `Input`, `Select`, date/time
pickers, `Textarea`, and `FormField` assemble these children explicitly.

For direct composition, migrate `icon` and `Content` props to addon children and
supply error text instead of relying on `Control.Provider.error` to render it:

```tsx
<>
  <Control.Addon onPress={onPressPrefix}>
    <Icon icon={PrefixIcon} color={addonColor} />
  </Control.Addon>
  {error ? <Control.Error>{error}</Control.Error> : null}
</>
```

Resolve `addonColor` from
`getFieldStateTokens(theme.components.controlAddon.variants[variant], { disabled, error: Boolean(error) }).iconColor`
using the current theme. The provider's error value continues to drive field
appearance, but does not inject label content.

`Button` and `IconButton` replace their content with a loading indicator when `loading` is true. Loading controls block interaction until loading ends.

`Spinner` defaults to the primary theme tone and medium size. Use `tone="inverse"` on inverse surfaces, or provide `color` when the indicator must match contextual content.

`Divider` defaults to a horizontal separator using `tone="default"`. Use start/end insets to align it with surrounding content, switch to vertical orientation inside a container with a defined height, and use `color` only when the semantic tones do not fit the surrounding surface.

`Avatar` supports `filled`, `outlined`, and `soft` display variants. It renders fallback content below its image so initials or a custom fallback remain visible while the image loads or when it fails. Avatar grouping and overflow counts are intentionally handled separately.

Use `Badge` for compact states and metadata. It supports `filled`, `outlined`, and `soft` display variants and semantic tones. Its addons follow Input: use `PrefixIcon` or `Prefix`, `SuffixIcon` or `Suffix`, and optionally `onPressPrefix` or `onPressSuffix`. A custom component takes precedence over its corresponding icon. Use `Tag` when the whole label needs built-in press or close behavior.

Badge text and Tag labels stay on one line and truncate with a trailing ellipsis when constrained by available width. Their containers shrink within rows while icons and close actions retain their space. Use `style.width` or `style.maxWidth` for a specific limit; custom Badge children own their text overflow behavior.

Badges follow their parent's `alignItems` for cross-axis alignment. For example,
use `alignItems="center"` on a column to center badges horizontally. Use
`alignSelf` on a badge when it needs a different alignment from its siblings.

## Dedicated component packages

Card, List, Progress, and their prop types are exported from `@impulse-ui-native/card`, `@impulse-ui-native/list`, and `@impulse-ui-native/progress`, respectively. They remain available through `@impulse-ui-native/toolkit`. Migrate direct primitives imports to their owning packages.

## Shared shadow and code-font defaults

`View` and `Pressable` resolve semantic shadow levels from the active
`theme.shadows` scale, including Android elevation. Explicit shadow style props
and style overrides still take precedence. Configure `theme.codeFontFamily`
to change `Typography.Code` globally; its default remains `monospace`.

## Field layout

`Control.Root` uses normal parent stretching rather than a forced width.
`Control.Field` accepts flex, dimension, and spacing props on its outer root.
In a column, fields stretch horizontally by default without growing vertically.
In a row, set `flex={1}` on each field to share the available width. If the
parent centers its children, use `alignSelf="stretch"` or an explicit `width`.

## Pressable styling

`Pressable` accepts the same direct styling props as `View`: spacing, colors,
opacity, shadows, borders, radii, flex layout, positioning, and dimensions. Both
share the exported `ViewStyleProps` contract. Native `style` objects or callbacks override
direct style props; `pressedStyle` applies last while pressed.

```tsx
<Pressable
  flex={1}
  flexDirection="row"
  alignItems="center"
  gap={8}
  padding={16}
  backgroundColor={colors.surface.subtle.value}
  borderColor={colors.border.default.value}
  borderWidth={1}
  borderRadius={radii.md}
>
  <Typography.Master>Continue</Typography.Master>
</Pressable>
```

Text and icons keep their own foreground styling, as with `View`.

## Field appearance

Rectangular fields support `variant="outlined" | "soft" | "filled"` and
`tone="neutral" | "primary" | "secondary"`. The default is `outlined` / `neutral`.
Outlined uses a transparent surface with a tone border; soft uses a subtle tone
surface; filled uses the tone fill with its paired foreground. Colors come from
the active theme in both schemes. Error styling overrides the selected tone;
disabled fields use neutral styling and block interaction.

Customize `components.controlContainer.colors[tone][variant][state]`,
`controlInput.colors[tone][variant][state]`, and
`controlAddon.colors[tone][variant][state]` together. These tone-aware maps replace
the previous `variants[variant][state]` maps.

## Button tones

`Button` and `IconButton` accept `tone="neutral" | "primary" | "secondary"`
independently of `variant="filled" | "outlined" | "soft" | "ghost"`.
The default tone is `primary`, preserving the existing default appearances.
Neutral uses the neutral palette; secondary uses the secondary brand palette.
Filled uses the tone fill and paired foreground, outlined uses a tone border,
soft uses a subtle tone surface, and ghost uses tone content on a transparent surface.
Loading indicators inherit the resolved foreground. Disabled appearances remain
neutral and both disabled and loading states prevent interaction.

```tsx
<Button variant="soft" tone="neutral">Cancel</Button>
<Button variant="filled" tone="primary">Save</Button>
<IconButton icon={SparkleIcon} variant="outlined" tone="secondary" />
```

Custom action tokens move from `variants[variant][state]` to
`components.button.colors[tone][variant][state]` and
`components.iconButton.colors[tone][variant][state]`. Each map is authored
explicitly for direct lookup. For custom Button children, style their foreground
using the matching resolved action tokens; string children are styled automatically.

## Tag and Avatar tones

`Tag` now uses `tone` instead of `color`, with the exported `TagTone` type replacing
`TagColor`. It supports `neutral`, `primary`, `secondary`, `error`, `warning`,
`success`, and `info`; existing feedback palettes remain available. The default is
`primary`. Use `<Tag label="Active" tone="success" />`.

`Avatar` accepts `tone="neutral" | "primary" | "secondary"`, defaulting to
`primary`, across filled, outlined, and soft variants. Tone affects the fallback
surface, initials, and border; images and presence/status colors retain their own
meaning. Avatar appearance tokens move to `components.avatar.colors[tone][variant]`.

Badge, Tag, IconView, and field addon icons share the enabled variant/tone palette with Button and IconButton: primary soft uses secondary fill/contrast, secondary soft uses subtle fill with secondary contrast, and neutral soft uses subtle neutral fill with primary text.

Selected control surfaces and disabled selected surfaces share the Button palette, including field borders, Tag borders, slider thumbs/bubbles, and segmented items. Entered text and validation retain their own semantic roles.

## Repository palette consistency

Spinner uses the shared primary/secondary/neutral stroke accents, plus inverse.
Divider adds neutral and secondary tones alongside primary/inverse and the existing
subtle/default/strong border-intensity aliases. Its default is `tone="default"`.
Feedback tone names are shared through FeedbackTone; generic brand tones through
ComponentTone. Typography foregrounds and raw Icon color/fill remain explicit
semantic or caller-selected colors, rather than a second tone API.

## Agent and design reference

Start with the [capability guide](../capabilities/primitives.md) for supported exports, props, defaults, composition rules, setup, and recipes. Use the [component chooser](../component-chooser.md) to select a package. These references describe the repository source; verify your installed package version before copying examples.

## Public export and source reference

The following modules are reachable through relative re-exports from this package's root. Their imports refer to the original package layout. This appendix preserves exact prop contracts, composition namespaces, defaults, hooks, and behavior for an implementing agent; it is reference text, not standalone executable code. An exported module may also contain private declarations. Internal modules that are only imported are not copied. React Native and dependency types remain defined by those dependencies.

### packages/primitives/src/components/atoms/avatar.tsx

```tsx
import type { ImageProps } from "react-native";
import { memo, useCallback, useMemo, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

import type { AvatarProps } from "../../types";
import { View } from "./view";

export const Avatar = memo(function Avatar({
  fallback,
  imageProps,
  initials,
  size = "medium",
  source,
  status,
  statusColor,
  style,
  variant = "filled",
  tone = "primary",
  ...props
}: AvatarProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(
    themedStyles,
    { size, status, statusColor, variant, tone },
    [size, status, statusColor, variant, tone],
  );

  const sourceKey = useMemo(() => JSON.stringify(source), [source]);

  const containerStyle = useMemo(
    () => [styles.container, extractedStyleProps, style],
    [extractedStyleProps, style, styles.container],
  );

  const showInitials =
    (fallback === null || fallback === undefined) && initials;

  return (
    <View {...props} style={containerStyle}>
      <View style={styles.content}>
        {fallback}
        {showInitials ? <Text style={styles.initials}>{initials}</Text> : null}

        {source ? (
          <AvatarImageLayer
            key={sourceKey}
            imageProps={imageProps}
            source={source}
          />
        ) : null}
      </View>

      {status ? <View style={styles.status} /> : null}
    </View>
  );
});

interface AvatarImageLayerProps {
  imageProps: AvatarProps["imageProps"];
  source: NonNullable<AvatarProps["source"]>;
}

const AvatarImageLayer = memo(function AvatarImageLayer({
  imageProps,
  source,
}: AvatarImageLayerProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback<NonNullable<ImageProps["onError"]>>(
    (event) => {
      setHasError(true);
      imageProps?.onError?.(event);
    },
    [imageProps],
  );

  const imageStyle = useMemo(
    () => [staticStyles.image, imageProps?.style],
    [imageProps?.style],
  );

  if (hasError) {
    return null;
  }

  return (
    <Image
      resizeMode="cover"
      {...imageProps}
      onError={handleError}
      source={source}
      style={imageStyle}
    />
  );
});

interface AvatarThemeProps {
  size: NonNullable<AvatarProps["size"]>;
  status: AvatarProps["status"];
  statusColor: AvatarProps["statusColor"];
  variant: NonNullable<AvatarProps["variant"]>;
  tone: NonNullable<AvatarProps["tone"]>;
}

function themedStyles(theme: AppTheme, props: AvatarThemeProps) {
  const { size, status, statusColor, variant, tone } = props;
  const avatarTokens = theme.components.avatar;
  const sizeTokens = avatarTokens.sizes[size];
  const variantTokens = avatarTokens.colors[tone][variant];

  return StyleSheet.create({
    container: {
      flexShrink: 0,
      height: sizeTokens.size,
      position: "relative",
      width: sizeTokens.size,
    },
    content: {
      alignItems: "center",
      backgroundColor: variantTokens.backgroundColor,
      borderColor: variantTokens.borderColor,
      borderRadius: sizeTokens.size / 2,
      borderWidth: avatarTokens.borderWidth,
      height: "100%",
      justifyContent: "center",
      overflow: "hidden",
      width: "100%",
    },
    initials: {
      color: variantTokens.color,
      fontFamily: avatarTokens.fontFamily,
      fontSize: sizeTokens.fontSize,
      textAlign: "center",
    },
    status: {
      backgroundColor:
        statusColor ?? (status ? avatarTokens.statusColors[status] : undefined),
      borderColor: avatarTokens.statusBorderColor,
      borderRadius: sizeTokens.statusSize / 2,
      borderWidth: sizeTokens.statusBorderWidth,
      bottom: 0,
      height: sizeTokens.statusSize,
      position: "absolute",
      right: 0,
      width: sizeTokens.statusSize,
    },
  });
}

const staticStyles = StyleSheet.create({
  image: {
    bottom: 0,
    height: "100%",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
  },
});
```

### packages/primitives/src/components/atoms/badge/index.ts

```tsx
export { BadgeRoot as Badge } from "./root";
```

### packages/primitives/src/components/atoms/badge/root.tsx

```tsx
import { memo, useMemo } from "react";
import { StyleSheet, Text } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import {
  useComponentsTokens,
  useStyleProps,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { BadgeProps, BadgeThemeProps } from "../../../types";
import { View } from "../view";
import { BadgeAddon } from "./addon";

export const BadgeRoot = memo(function BadgeRoot({
  backgroundColor,
  children,
  color,
  Prefix,
  PrefixIcon,
  onPressPrefix,
  onPressSuffix,
  size = "medium",
  style,
  Suffix,
  SuffixIcon,
  tone = "primary",
  variant = "filled",
  ...props
}: BadgeProps) {
  const tokens = useComponentsTokens();

  const badgeTokens = tokens.badge;
  const sizeTokens = badgeTokens.sizes[size];

  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(
    themedStyles,
    { backgroundColor, color, size, tone, variant },
    [backgroundColor, color, size, tone, variant],
  );

  const containerStyle = useMemo(
    () => [styles.container, extractedStyleProps, style],
    [extractedStyleProps, style, styles.container],
  );

  const affixColor =
    typeof styles.label.color === "string" ? styles.label.color : undefined;

  const isTextChild =
    typeof children === "string" || typeof children === "number";

  return (
    <View {...props} style={containerStyle}>
      <BadgeAddon
        Content={Prefix}
        IconComponent={PrefixIcon}
        color={affixColor}
        hitSlop={badgeTokens.addonHitSlop}
        iconSize={sizeTokens.iconSize}
        onPress={onPressPrefix}
      />

      {isTextChild ? (
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.label}>
          {children}
        </Text>
      ) : (
        children
      )}

      <BadgeAddon
        Content={Suffix}
        IconComponent={SuffixIcon}
        color={affixColor}
        hitSlop={badgeTokens.addonHitSlop}
        iconSize={sizeTokens.iconSize}
        onPress={onPressSuffix}
      />
    </View>
  );
});

function themedStyles(theme: AppTheme, props: BadgeThemeProps) {
  const { backgroundColor, color, size, tone, variant } = props;

  const badgeTokens = theme.components.badge;
  const sizeTokens = badgeTokens.sizes[size];
  const variantTokens = badgeTokens.colors[tone][variant];

  return StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      flexShrink: 1,
      maxWidth: "100%",
      justifyContent: "center",

      borderRadius: badgeTokens.borderRadius,
      borderWidth: badgeTokens.borderWidth,
      gap: badgeTokens.gap,
      height: sizeTokens.height,
      minWidth: sizeTokens.minWidth,
      paddingHorizontal: sizeTokens.paddingHorizontal,

      backgroundColor: backgroundColor ?? variantTokens.backgroundColor,
      borderColor: variantTokens.borderColor,
    },

    label: {
      flexShrink: 1,
      minWidth: 0,
      textAlign: "center",

      fontFamily: badgeTokens.fontFamily,
      fontSize: sizeTokens.fontSize,
      lineHeight: sizeTokens.lineHeight,

      color: color ?? variantTokens.color,
    },
  });
}
```

### packages/primitives/src/components/atoms/button.tsx

```tsx
import { memo, PropsWithChildren, useMemo } from "react";
import { StyleSheet } from "react-native";

import {
  AppTheme,
  getActionStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { ButtonProps, ButtonThemeProps } from "../../types";
import { Pressable } from "./pressable";
import { Spinner } from "./spinner";
import { Typography } from "./typography";

export const Button = memo(function Button({
  size = "medium",
  variant = "filled",
  tone = "primary",
  disabled,
  loading = false,
  children,
  style,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const styles = useThemedStyles(
    themedStyles,
    { size, variant, tone, disabled, loading },
    [size, variant, tone, disabled, loading],
  );

  const interactionDisabled = disabled === true || loading;

  const buttonStyles = useMemo(
    () => [styles.button, style],
    [styles.button, style],
  );

  const content = useMemo(() => {
    if (loading) {
      return <Spinner color={styles.text.color} size={size} />;
    }

    return typeof children === "string" ? (
      <Typography.Master style={styles.text}>{children}</Typography.Master>
    ) : (
      children
    );
  }, [children, loading, size, styles.text]);

  return (
    <Pressable {...props} disabled={interactionDisabled} style={buttonStyles}>
      {content}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: ButtonThemeProps) {
  const { size, variant, tone, disabled, loading } = props;

  const buttonTokens = theme.components.button;
  const sizeTokens = buttonTokens.sizes[size];
  const appearanceTokens = getActionStateTokens(
    buttonTokens.colors[tone][variant],
    {
      disabled,
      loading,
    },
  );

  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",

      height: sizeTokens.height,
      paddingVertical: sizeTokens.paddingVertical,
      paddingHorizontal: sizeTokens.paddingHorizontal,

      borderWidth: buttonTokens.borderWidth,
      borderRadius: buttonTokens.borderRadius,

      borderColor: appearanceTokens.borderColor,
      backgroundColor: appearanceTokens.backgroundColor,
    },

    text: {
      width: "100%",
      textAlign: "center",

      fontSize: sizeTokens.fontSize,

      color: appearanceTokens.color,
    },
  });
}
```

### packages/primitives/src/components/atoms/divider.tsx

```tsx
import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import {
  getDividerTokens,
  useStyleProps,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { DividerProps } from "../../types";
import { View } from "./view";

export const Divider = memo(function Divider({
  color,
  inset = "none",
  orientation = "horizontal",
  style,
  tone = "default",
  ...props
}: DividerProps) {
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(
    themedStyles,
    { color, inset, orientation, tone },
    [color, inset, orientation, tone],
  );

  const dividerStyle = useMemo(
    () => [styles.divider, extractedStyleProps, style],
    [extractedStyleProps, style, styles.divider],
  );

  return <View {...props} style={dividerStyle} />;
});

interface DividerThemeProps {
  color: DividerProps["color"];
  inset: NonNullable<DividerProps["inset"]>;
  orientation: NonNullable<DividerProps["orientation"]>;
  tone: NonNullable<DividerProps["tone"]>;
}

function themedStyles(theme: AppTheme, props: DividerThemeProps) {
  const { color, inset, orientation, tone } = props;
  const dividerTokens = getDividerTokens(theme.components.divider, {
    inset,
    orientation,
    tone,
  });

  return StyleSheet.create({
    divider: {
      alignSelf: "stretch",
      flexShrink: 0,
      height: dividerTokens.height,
      marginBottom: dividerTokens.marginBottom,
      marginEnd: dividerTokens.marginEnd,
      marginStart: dividerTokens.marginStart,
      marginTop: dividerTokens.marginTop,
      width: dividerTokens.width,
      backgroundColor: color ?? dividerTokens.backgroundColor,
    },
  });
}
```

### packages/primitives/src/components/atoms/icon-button.tsx

```tsx
import { memo, PropsWithChildren, useMemo } from "react";
import { StyleSheet } from "react-native";

import { Icon } from "@impulse-ui-native/icon";
import {
  AppTheme,
  getActionStateTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import { IconButtonProps, IconButtonThemeProps } from "../../types";
import { Pressable } from "./pressable";
import { Spinner } from "./spinner";

export const IconButton = memo(function IconButton({
  size = "medium",
  variant = "filled",
  tone = "primary",
  disabled,
  loading = false,
  style,
  icon,
  ...props
}: PropsWithChildren<IconButtonProps>) {
  const styles = useThemedStyles(
    themedStyles,
    { size, variant, tone, disabled, loading },
    [size, variant, tone, disabled, loading],
  );

  const interactionDisabled = disabled === true || loading;

  const iconButtonStyles = useMemo(
    () => [styles.button, style],
    [styles.button, style],
  );

  return (
    <Pressable
      {...props}
      disabled={interactionDisabled}
      style={iconButtonStyles}
    >
      {loading ? (
        <Spinner color={styles.icon.color} size={size} />
      ) : (
        <Icon size={size} icon={icon} color={styles.icon.color} />
      )}
    </Pressable>
  );
});

function themedStyles(theme: AppTheme, props: IconButtonThemeProps) {
  const { size, variant, tone, disabled, loading } = props;

  const iconButtonTokens = theme.components.iconButton;
  const sizeTokens = iconButtonTokens.sizes[size];
  const appearanceTokens = getActionStateTokens(
    iconButtonTokens.colors[tone][variant],
    { disabled, loading },
  );

  return StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",

      height: sizeTokens.size,
      width: sizeTokens.size,
      padding: sizeTokens.padding,

      borderWidth: iconButtonTokens.borderWidth,
      borderRadius: iconButtonTokens.borderRadius,

      borderColor: appearanceTokens.borderColor,
      backgroundColor: appearanceTokens.backgroundColor,
    },

    icon: {
      color: appearanceTokens.color,
    },
  });
}
```

### packages/primitives/src/components/atoms/index.ts

```tsx
export { Avatar } from "./avatar";
export { Badge } from "./badge";
export { View } from "./view";
export { SafeAreaView } from "./safe-area-view";
export { Typography, type TypographyComponent } from "./typography";
export { Button } from "./button";
export { Divider } from "./divider";
export { IconButton } from "./icon-button";
export { Pressable } from "./pressable";
export { Spinner } from "./spinner";
export { Tag } from "./tag";
```

### packages/primitives/src/components/atoms/pressable.tsx

```tsx
import type {
  ComponentRef,
  NamedExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import { forwardRef, memo, useCallback } from "react";
import {
  PressableStateCallbackType,
  Pressable as RNPressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

import {
  getShadowStyle,
  useComponentsTokens,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";

import { PressableCoreProps } from "../../types";

export const Pressable: NamedExoticComponent<
  PropsWithoutRef<PressableCoreProps> &
    RefAttributes<ComponentRef<typeof RNPressable>>
> = memo(
  forwardRef<ComponentRef<typeof RNPressable>, PressableCoreProps>(
    function PressableCore(
      { children, disabled, pressedStyle, style, ...props },
      ref,
    ) {
      const { colors, shadows } = useTheme();
      const tokens = useComponentsTokens();

      const pressableTokens = tokens.pressable;

      const extractedStyleProps = useStyleProps(props);

      const pressableStyles = useCallback(
        (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
          let overrideStyle: StyleProp<ViewStyle>;

          if (typeof style === "function") {
            overrideStyle = style(state);
          } else {
            overrideStyle = style;
          }

          return StyleSheet.flatten([
            {
              opacity: disabled
                ? pressableTokens.disabledOpacity
                : state.pressed
                  ? pressableTokens.pressedOpacity
                  : 1,
            },
            getShadowStyle(props.shadow, props.shadowPosition, colors, shadows),
            extractedStyleProps,
            overrideStyle,
            state.pressed ? pressedStyle : undefined,
          ]);
        },
        [
          style,
          pressedStyle,
          disabled,
          extractedStyleProps,
          props.shadow,
          props.shadowPosition,
          colors,
          shadows,
          pressableTokens.disabledOpacity,
          pressableTokens.pressedOpacity,
        ],
      );

      return (
        <RNPressable
          {...props}
          ref={ref}
          style={pressableStyles}
          disabled={disabled}
        >
          {children}
        </RNPressable>
      );
    },
  ),
);
```

### packages/primitives/src/components/atoms/safe-area-view.tsx

```tsx
import { memo, useCallback, useMemo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import {
  Edge,
  EdgeMode,
  EdgeRecord,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { EdgeToShorthandKeyMap, EdgeToSpacingKeyMap } from "../../constants";
import { SafeAreaViewProps } from "../../types";
import { View } from "./view";

export const SafeAreaView = memo(function SafeAreaView(
  props: SafeAreaViewProps,
) {
  const { edges, mode = "padding", style, ...rest } = props;

  const insets = useSafeAreaInsets();

  const flatenedStyle = useMemo(() => {
    return StyleSheet.flatten(style);
  }, [style]);

  const nativeEdges = useMemo<Record<Edge, EdgeMode>>(() => {
    if (!edges) {
      return {
        top: "additive",
        bottom: "additive",
        left: "additive",
        right: "additive",
      };
    }

    let computedEdges: EdgeRecord;

    if (Array.isArray(edges)) {
      computedEdges = edges.reduce<EdgeRecord>((acc, current: Edge) => {
        acc[current] = "additive";

        return acc;
      }, {});
    } else {
      computedEdges = edges as EdgeRecord;
    }

    return {
      top: computedEdges.top ?? "off",
      bottom: computedEdges.bottom ?? "off",
      left: computedEdges.left ?? "off",
      right: computedEdges.right ?? "off",
    };
  }, [edges]);

  const getSpacingKey = useCallback(
    (edge: Edge): keyof ViewStyle => `${mode}${EdgeToSpacingKeyMap[edge]}`,
    [mode],
  );

  const getSpacingForEdge = useCallback(
    (edge: Edge): number => {
      const shorthand: keyof ViewStyle = `${mode}${EdgeToShorthandKeyMap[edge]}`;
      const spacing: keyof ViewStyle = getSpacingKey(edge);

      return Number(
        flatenedStyle?.[spacing] ??
          flatenedStyle?.[shorthand] ??
          flatenedStyle?.[mode] ??
          0,
      );
    },
    [flatenedStyle, getSpacingKey, mode],
  );

  const resolveEdge = useCallback(
    (inset: number, current: number, edgeMode: EdgeMode) => {
      if (edgeMode === "off") {
        return current;
      }

      if (edgeMode === "maximum") {
        return Math.max(inset, current);
      }

      return inset + current;
    },
    [],
  );

  const computedStyle = useMemo(() => {
    const insetsStyle: ViewStyle = {
      [getSpacingKey("top")]: resolveEdge(
        insets.top,
        getSpacingForEdge("top"),
        nativeEdges.top,
      ),
      [getSpacingKey("bottom")]: resolveEdge(
        insets.bottom,
        getSpacingForEdge("bottom"),
        nativeEdges.bottom,
      ),
      [getSpacingKey("left")]: resolveEdge(
        insets.left,
        getSpacingForEdge("left"),
        nativeEdges.left,
      ),
      [getSpacingKey("right")]: resolveEdge(
        insets.right,
        getSpacingForEdge("right"),
        nativeEdges.right,
      ),
    };

    return StyleSheet.flatten([style, insetsStyle]);
  }, [
    insets,
    nativeEdges,
    style,
    resolveEdge,
    getSpacingKey,
    getSpacingForEdge,
  ]);

  return <View style={computedStyle} {...rest} />;
});
```

### packages/primitives/src/components/atoms/spinner.tsx

```tsx
import { memo, useMemo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { SpinnerProps } from "../../types";

export const Spinner = memo(function Spinner({
  animating = true,
  color,
  hidesWhenStopped,
  size = "medium",
  style,
  tone = "primary",
  ...props
}: SpinnerProps) {
  const styles = useThemedStyles(themedStyles, { color, size, tone }, [
    color,
    size,
    tone,
  ]);

  const containerStyle = useMemo(
    () => [styles.container, style],
    [style, styles.container],
  );

  return (
    <View {...props} style={containerStyle}>
      <ActivityIndicator
        animating={animating}
        color={styles.indicator.color}
        hidesWhenStopped={hidesWhenStopped}
        size="small"
        style={styles.indicator}
      />
    </View>
  );
});

interface SpinnerThemeProps {
  color: SpinnerProps["color"];
  size: NonNullable<SpinnerProps["size"]>;
  tone: NonNullable<SpinnerProps["tone"]>;
}

function themedStyles(theme: AppTheme, props: SpinnerThemeProps) {
  const { color, size, tone } = props;
  const spinnerTokens = theme.components.spinner;
  const resolvedSize = spinnerTokens.sizes[size];

  return StyleSheet.create({
    container: {
      alignItems: "center",
      height: resolvedSize,
      justifyContent: "center",
      width: resolvedSize,
    },
    indicator: {
      color: color ?? spinnerTokens.colors[tone],
      transform: [{ scale: resolvedSize / spinnerTokens.baseSize }],
    },
  });
}
```

### packages/primitives/src/components/atoms/tag.tsx

```tsx
import { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { Icon } from "@impulse-ui-native/icon";
import { XCircleIcon } from "@impulse-ui-native/icon/icons/x-circle";
import {
  getAvailabilityStateTokens,
  useComponentsTokens,
  useThemedStyles,
} from "@impulse-ui-native/theme";

import type { TagProps, TagThemeProps } from "../../types";
import { Pressable } from "./pressable";
import { Typography } from "./typography";

export const Tag = memo(function Tag({
  label,
  style,
  size = "medium",
  variant = "filled",
  tone = "primary",
  closable,
  disabled,
  onClose,
  onPress,
}: TagProps) {
  const tokens = useComponentsTokens();

  const tagTokens = tokens.tag;

  const styles = useThemedStyles(
    themedStyles,
    {
      size,
      variant,
      disabled,
      tone,
    },
    [size, variant, disabled, tone],
  );

  const containerStyle = useMemo(
    () => [styles.container, style],
    [styles.container, style],
  );
  const Container = onPress ? Pressable : View;

  const showClose = closable && !disabled && onClose;

  return (
    <Container onPress={onPress} disabled={disabled} style={containerStyle}>
      <Typography.Caption
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.label}
      >
        {label}
      </Typography.Caption>

      {showClose ? (
        <Pressable onPress={onClose} hitSlop={tagTokens.closeHitSlop}>
          <Icon
            icon={XCircleIcon}
            size="small"
            color={styles.icon.color}
            style={styles.icon}
          />
        </Pressable>
      ) : null}
    </Container>
  );
});

function themedStyles(theme: AppTheme, props: TagThemeProps) {
  const { size, variant, tone, disabled } = props;

  const tagTokens = theme.components.tag;
  const sizeTokens = tagTokens.sizes[size];
  const appearanceTokens = getAvailabilityStateTokens(
    tagTokens.colors[tone][variant],
    { disabled },
  );

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",
      flexShrink: 1,
      maxWidth: "100%",

      height: sizeTokens.height,
      paddingHorizontal: sizeTokens.paddingHorizontal,
      minWidth: sizeTokens.minWidth,

      borderRadius: tagTokens.borderRadius,
      gap: tagTokens.gap,
      borderWidth: tagTokens.borderWidth,

      borderColor: appearanceTokens.borderColor,
      backgroundColor: appearanceTokens.backgroundColor,
    },

    label: {
      flexShrink: 1,
      minWidth: 0,
      fontSize: sizeTokens.fontSize,
      color: appearanceTokens.color,
    },

    icon: {
      marginLeft: tagTokens.iconMarginLeft,
      color: appearanceTokens.color,
    },
  });
}
```

### packages/primitives/src/components/atoms/typography.tsx

```tsx
import { createPreset } from "../../hocs";

export const Typography = {
  Master: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.regular,
    }),
    "Master",
  ),

  DisplayLarge: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.colossal,
      lineHeight: theme.lineHeight.colossal,
    }),
    "DisplayLarge",
  ),

  DisplayMedium: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.giant,
      lineHeight: theme.lineHeight.giant,
    }),
    "DisplayMedium",
  ),

  DisplaySmall: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.huge,
      lineHeight: theme.lineHeight.huge,
    }),
    "DisplaySmall",
  ),

  Title1: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.xxxl,
      lineHeight: theme.lineHeight.xxxl,
    }),
    "Title1",
  ),

  Title2: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.xxl,
      lineHeight: theme.lineHeight.xxl,
    }),
    "Title2",
  ),

  Title3: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.xl,
      lineHeight: theme.lineHeight.xl,
    }),
    "Title3",
  ),

  Title4: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.lg,
      lineHeight: theme.lineHeight.lg,
    }),
    "Title4",
  ),

  Title5: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.md,
    }),
    "Title5",
  ),

  Title6: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.sm,
    }),
    "Title6",
  ),

  Subtitle1: createPreset(
    (theme) => ({
      color: theme.colors.text.secondary,
      fontWeight: theme.fontWeight.medium,
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.lg,
    }),
    "Subtitle1",
  ),

  Subtitle2: createPreset(
    (theme) => ({
      color: theme.colors.text.secondary,
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.sm,
    }),
    "Subtitle2",
  ),

  BodyLarge: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.lg,
    }),
    "BodyLarge",
  ),

  Body: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.sm,
    }),
    "Body",
  ),

  BodySmall: createPreset(
    (theme) => ({
      color: theme.colors.text.secondary,
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.xsm,
      lineHeight: theme.lineHeight.xsm,
    }),
    "BodySmall",
  ),

  Caption: createPreset(
    (theme) => ({
      color: theme.colors.text.secondary,
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.xs,
      lineHeight: theme.lineHeight.xs,
    }),
    "Caption",
  ),

  Label: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.medium,
      fontSize: theme.fontSize.xsm,
      lineHeight: theme.lineHeight.xsm,
    }),
    "Label",
  ),

  Overline: createPreset(
    (theme) => ({
      color: theme.colors.text.secondary,
      fontWeight: theme.fontWeight.semiBold,
      fontSize: theme.fontSize.xs,
      lineHeight: theme.lineHeight.xs,
      textTransform: "uppercase",
      letterSpacing: theme.letterSpacing.ultraWide,
    }),
    "Overline",
  ),

  Helper: createPreset(
    (theme) => ({
      color: theme.colors.text.secondary,
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.xsm,
      lineHeight: theme.lineHeight.xsm,
    }),
    "Helper",
  ),

  Code: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontFamily: theme.codeFontFamily,
      fontSize: theme.fontSize.xsm,
      lineHeight: theme.lineHeight.xsm,
    }),
    "Code",
  ),

  Quote: createPreset(
    (theme) => ({
      color: theme.colors.text.primary,
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.md,
      lineHeight: theme.lineHeight.lg,
      fontStyle: "italic",
    }),
    "Quote",
  ),

  Eyebrow: createPreset(
    (theme) => ({
      color: theme.colors.text.secondary,
      fontWeight: theme.fontWeight.medium,
      fontSize: theme.fontSize.xs,
      lineHeight: theme.lineHeight.xs,
      textTransform: "uppercase",
      letterSpacing: theme.letterSpacing.ultraWide,
    }),
    "Eyebrow",
  ),
};

export type TypographyComponent = (typeof Typography)[keyof typeof Typography];
```

### packages/primitives/src/components/atoms/view.tsx

```tsx
import type {
  ComponentRef,
  NamedExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import { forwardRef, memo, useMemo } from "react";
import { View as NativeView, StyleSheet } from "react-native";

import {
  getShadowStyle,
  useStyleProps,
  useTheme,
} from "@impulse-ui-native/theme";

import { ViewProps } from "../../types";

export const View: NamedExoticComponent<
  PropsWithoutRef<ViewProps> & RefAttributes<ComponentRef<typeof NativeView>>
> = memo(
  forwardRef<ComponentRef<typeof NativeView>, ViewProps>(function View(
    props: ViewProps,
    ref,
  ) {
    const { style, shadow, shadowPosition, ...rest } = props;

    const { colors, shadows } = useTheme();

    const extractedStyleProps = useStyleProps(props);

    const viewStyle = useMemo(() => {
      return StyleSheet.flatten([
        getShadowStyle(shadow, shadowPosition, colors, shadows),
        extractedStyleProps,
        style,
      ]);
    }, [extractedStyleProps, style, shadow, shadowPosition, colors, shadows]);

    return <NativeView {...rest} style={viewStyle} ref={ref} />;
  }),
);
```

### packages/primitives/src/components/controls/control.tsx

```tsx
import { ControlAddon } from "./addon";
import { ControlContainer } from "./container";
import { ControlError } from "./error";
import { ControlField } from "./field";
import { ControlIcon } from "./icon";
import { ControlInput } from "./input";
import { ControlLabel } from "./label";
import { ControlLoader } from "./loader";
import { ControlPlaceholder } from "./placeholder";
import { ControlProvider } from "./provider";
import { ControlRoot } from "./root";
import { ControlTrigger } from "./trigger";
import { ControlValue } from "./value";

export const Control: {
  Field: typeof ControlField;
  Trigger: typeof ControlTrigger;
  Icon: typeof ControlIcon;
  Container: typeof ControlContainer;
  Provider: typeof ControlProvider;
  Root: typeof ControlRoot;
  Label: typeof ControlLabel;
  Error: typeof ControlError;
  Addon: typeof ControlAddon;
  Input: typeof ControlInput;
  Placeholder: typeof ControlPlaceholder;
  Value: typeof ControlValue;
  Loader: typeof ControlLoader;
} = {
  Field: ControlField,
  Trigger: ControlTrigger,
  Icon: ControlIcon,
  Container: ControlContainer,
  Provider: ControlProvider,
  Root: ControlRoot,
  Label: ControlLabel,
  Error: ControlError,
  Addon: ControlAddon,
  Input: ControlInput,
  Placeholder: ControlPlaceholder,
  Value: ControlValue,
  Loader: ControlLoader,
};
```

### packages/primitives/src/components/controls/index.ts

```tsx
export { Control } from "./control";
export { useControlContext } from "../../hooks/use-control-context.hook";
```

### packages/primitives/src/components/index.ts

```tsx
export * from "./atoms";
export * from "./controls";
```

### packages/primitives/src/constants/index.ts

```tsx
export * from "./safe-area-view.constants";
```

### packages/primitives/src/constants/safe-area-view.constants.ts

```tsx
export const EdgeToSpacingKeyMap = {
  top: "Top",
  bottom: "Bottom",
  left: "Left",
  right: "Right",
} as const;

export const EdgeToShorthandKeyMap = {
  top: "Vertical",
  bottom: "Vertical",
  left: "Horizontal",
  right: "Horizontal",
} as const;
```

### packages/primitives/src/hocs/create-preset.hoc.tsx

```tsx
import type { TextStyle } from "react-native";
import { memo, useMemo } from "react";
import { StyleSheet, Text } from "react-native";

import type {
  AppTheme,
  TypographyPresetKey,
  TypographyProps,
} from "@impulse-ui-native/theme";
import { useStyleProps, useTheme } from "@impulse-ui-native/theme";

import type { TextProps } from "../types";

const numericFontVariant: TextStyle["fontVariant"] = ["tabular-nums"];
const defaultFontVariant: TextStyle["fontVariant"] = [];

export function createPreset(
  config: (theme: AppTheme) => TypographyProps & Pick<TextProps, "color">,
  key: TypographyPresetKey,
) {
  const Component = (props: TextProps) => {
    const {
      style,
      numeric,
      fontFamily: customFontFamily,
      fontVariant: customFontVariant,
      fontStyle,
      fontWeight,
      ...rest
    } = props;

    const theme = useTheme();

    const extractedStyleProps = useStyleProps(props);

    const typographyStyle = useMemo(() => {
      const themedConfig = config(theme);

      const resolvedFontStyle = fontStyle ?? themedConfig.fontStyle ?? "normal";
      const resolvedFontWeight =
        fontWeight ?? themedConfig.fontWeight ?? theme.fontWeight.regular;

      const fontFamily =
        customFontFamily ??
        themedConfig.fontFamily ??
        theme.fontFamily[resolvedFontStyle][resolvedFontWeight];

      return StyleSheet.flatten([
        { color: theme.colors.text.primary },
        themedConfig,
        extractedStyleProps,
        {
          fontFamily,
          fontVariant: numeric
            ? numericFontVariant
            : (customFontVariant ??
              themedConfig.fontVariant ??
              defaultFontVariant),
        },
        style,
      ]);
    }, [
      theme,
      extractedStyleProps,
      style,
      numeric,
      customFontFamily,
      customFontVariant,
      fontStyle,
      fontWeight,
    ]);

    return <Text {...rest} style={typographyStyle} />;
  };

  Component.displayName = `Typography.${key}`;

  return memo(Component);
}
```

### packages/primitives/src/hocs/index.ts

```tsx
export { createPreset } from "./create-preset.hoc";
```

### packages/primitives/src/hooks/use-control-context.hook.ts

```tsx
import { useContext } from "react";

import type { ControlContextData } from "../types";
import { ControlContext } from "../contexts/control.context";

export function useControlContext(): ControlContextData {
  const context = useContext(ControlContext);

  if (!context) {
    throw new Error("Control parts must be used within Control.Provider");
  }

  return context;
}
```

### packages/primitives/src/index.ts

```tsx
export * from "./components";
export * from "./hocs";
export * from "./constants";
export * from "./types";
```

### packages/primitives/src/types/avatar.types.ts

```tsx
import type { ReactNode } from "react";
import type {
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from "react-native";

import type {
  AvatarStatus,
  ComponentSize,
  ComponentTone,
  DisplayVariant,
} from "@impulse-ui-native/theme";

import type { ViewProps } from "./view.types";

export interface AvatarImageProps extends Omit<ImageProps, "source" | "style"> {
  style?: StyleProp<ImageStyle>;
}

export interface AvatarProps extends Omit<ViewProps, "children"> {
  fallback?: ReactNode;
  imageProps?: AvatarImageProps;
  initials?: string;
  size?: ComponentSize;
  source?: ImageSourcePropType;
  status?: AvatarStatus;
  statusColor?: ViewStyle["backgroundColor"];
  variant?: DisplayVariant;
  tone?: ComponentTone;
}
```

### packages/primitives/src/types/badge.types.ts

```tsx
import type { ReactNode } from "react";
import type { ColorValue } from "react-native";

import type {
  BadgeTone,
  ComponentSize,
  DisplayVariant,
} from "@impulse-ui-native/theme";

import type { ControlComponentCommonProps } from "./control-components.types";
import type { ViewProps } from "./view.types";

export interface BadgeProps
  extends
    Omit<ViewProps, "children">,
    Pick<
      ControlComponentCommonProps,
      | "PrefixIcon"
      | "Prefix"
      | "onPressPrefix"
      | "SuffixIcon"
      | "Suffix"
      | "onPressSuffix"
    > {
  children: ReactNode;
  size?: ComponentSize;
  tone?: BadgeTone;
  variant?: DisplayVariant;
}

export interface BadgeThemeProps {
  backgroundColor?: ColorValue;
  color?: ColorValue;
  size: ComponentSize;
  tone: BadgeTone;
  variant: DisplayVariant;
}
```

### packages/primitives/src/types/button.types.ts

```tsx
import { PressableProps, StyleProp, ViewStyle } from "react-native";

import {
  ActionVariant,
  ButtonTone,
  ComponentSize,
  DimensionProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

import type { ViewStyleProps } from "./view.types";

export interface ButtonProps
  extends PressableProps, DimensionProps, SpacingProps, ShadowProps {
  size?: ComponentSize;
  variant?: ActionVariant;
  tone?: ButtonTone;
  disabled?: boolean;
  style?: ViewStyle;
  loading?: boolean;
}

export interface ButtonThemeProps {
  size: ComponentSize;
  variant: ActionVariant;
  tone: ButtonTone;
  disabled?: boolean;
  loading: boolean;
}

export interface PressableCoreProps
  extends PressableProps, Omit<ButtonProps, "style" | "tone">, ViewStyleProps {
  disabled?: boolean;
  pressedStyle?: StyleProp<ViewStyle>;
}
```

### packages/primitives/src/types/control-components.types.ts

```tsx
import type { ComponentType, ReactNode } from "react";
import type { TextInputProps, TextProps, ViewProps } from "react-native";

import type { IconProps } from "@impulse-ui-native/icon/types";
import type {
  ComponentSize,
  DimensionProps,
  FieldTone,
  FieldVariant,
  FlexProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

import type { PressableCoreProps } from "./button.types";
import type { SpinnerProps } from "./spinner.types";

export type ControlLayoutProps = FlexProps & DimensionProps & SpacingProps;

export interface ControlComponentCommonProps extends ControlLayoutProps {
  placeholder?: string;
  label?: string;
  PrefixIcon?: IconProps["icon"];
  Prefix?: ComponentType;
  onPressPrefix?: PressableCoreProps["onPress"];
  SuffixIcon?: IconProps["icon"];
  Suffix?: ComponentType;
  onPressSuffix?: PressableCoreProps["onPress"];
}

export interface ControlComponentProps {
  size: ComponentSize;
  variant: FieldVariant;
  tone?: FieldTone;
  error: string | undefined;
  disabled: boolean | undefined;
}

export interface ControlContextData extends ControlComponentProps {
  tone: FieldTone;
}

export type ControlContainerProps = ViewProps;

export type ControlTriggerProps = PressableCoreProps;

export type ControlIconProps = IconProps;

export interface ControlFieldProps
  extends Partial<ControlComponentProps>, ControlLayoutProps {
  children?: ReactNode;
  label?: string;
  onPress?: PressableCoreProps["onPress"];
  prefix?: ReactNode;
  suffix?: ReactNode;
  onPressPrefix?: PressableCoreProps["onPress"];
  onPressSuffix?: PressableCoreProps["onPress"];
}

export type ControlLabelProps = TextProps;

export type ControlErrorLabelProps = TextProps;

export interface ControlAddonProps extends ViewProps {
  disabled?: boolean;
  hitSlop?: PressableCoreProps["hitSlop"];
  onPress?: PressableCoreProps["onPress"];
}

export type ControlInputProps = TextInputProps;

export type ControlPlaceholderProps = TextProps;

export type ControlValueProps = TextProps;

export type ControlLoaderProps = SpinnerProps;
```

### packages/primitives/src/types/divider.types.ts

```tsx
import type { ViewStyle } from "react-native";

import type { DividerTone } from "@impulse-ui-native/theme";

import type { ViewProps } from "./view.types";

export type DividerOrientation = "horizontal" | "vertical";

export type DividerInset = "none" | "start" | "end" | "both";

export interface DividerProps extends Omit<ViewProps, "children" | "color"> {
  color?: ViewStyle["backgroundColor"];
  inset?: DividerInset;
  orientation?: DividerOrientation;
  tone?: DividerTone;
}
```

### packages/primitives/src/types/icon-button.types.ts

```tsx
import type { IconProps } from "@impulse-ui-native/icon/types";
import {
  ActionVariant,
  ButtonTone,
  ComponentSize,
} from "@impulse-ui-native/theme";

import { ButtonProps } from "./button.types";

export interface IconButtonProps extends ButtonProps {
  icon: IconProps["icon"];
}

export interface IconButtonThemeProps {
  size: ComponentSize;
  variant: ActionVariant;
  tone: ButtonTone;
  disabled?: boolean;
  loading: boolean;
}
```

### packages/primitives/src/types/index.ts

```tsx
export * from "./avatar.types";
export * from "./badge.types";
export * from "./view.types";
export * from "./safe-area-view.types";
export * from "./typography.types";
export * from "./typography.types";
export * from "./button.types";
export * from "./divider.types";
export * from "./icon-button.types";
export * from "./spinner.types";
export * from "./tag.types";
export * from "./control-components.types";
```

### packages/primitives/src/types/safe-area-view.types.ts

```tsx
import { SafeAreaViewProps as NativeSafeAreaViewProps } from "react-native-safe-area-context";

export type SafeAreaViewProps = NativeSafeAreaViewProps;
```

### packages/primitives/src/types/spinner.types.ts

```tsx
import type { ActivityIndicatorProps } from "react-native";

import type { ComponentSize, SpinnerTone } from "@impulse-ui-native/theme";

export interface SpinnerProps extends Omit<ActivityIndicatorProps, "size"> {
  size?: ComponentSize;
  tone?: SpinnerTone;
}
```

### packages/primitives/src/types/tag.types.ts

```tsx
import { PressableProps, ViewStyle } from "react-native";

import {
  ComponentSize,
  DisplayVariant,
  TagTone,
  TagToneTokens,
} from "@impulse-ui-native/theme";

export interface TagProps {
  label: string;
  size?: ComponentSize;
  variant?: DisplayVariant;
  tone?: TagTone;
  closable?: boolean;
  disabled?: boolean;
  onClose?: () => void;
  style?: ViewStyle;
  onPress?: PressableProps["onPress"];
}

export interface TagThemeProps {
  size: ComponentSize;
  variant: DisplayVariant;
  tone: TagTone;
  disabled?: boolean;
}
```

### packages/primitives/src/types/typography.types.ts

```tsx
import { TextProps as RNTextProps } from "react-native";

import {
  ColorProps,
  FlexProps,
  SpacingProps,
  TypographyProps,
} from "@impulse-ui-native/theme";

export interface TextProps
  extends RNTextProps, TypographyProps, FlexProps, ColorProps, SpacingProps {
  numeric?: boolean;
}
```

### packages/primitives/src/types/view.types.ts

```tsx
import { ViewProps as NativeViewProps } from "react-native";

import {
  BorderProps,
  ColorProps,
  DimensionProps,
  FlexProps,
  ShadowProps,
  SpacingProps,
} from "@impulse-ui-native/theme";

export type ViewStyleProps = SpacingProps &
  ColorProps &
  ShadowProps &
  BorderProps &
  FlexProps &
  DimensionProps;

export type ViewProps = NativeViewProps & ViewStyleProps;
```
