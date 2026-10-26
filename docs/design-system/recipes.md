# Composition recipes

Every library package is covered. The TS/TSX sources below are typechecked against local public source entrypoints during export. Visual recipes run in native Storybook under **Design system/Recipes**; they need the app-shell providers and configured fonts. These checks do not certify native rendering or interaction.

| Recipe                                                       | Packages                                                                   | Native preview                             |
| ------------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------ |
| [Native application setup](#app-shell)                       | `theme`, `primitives`, `portal`, `overlay`, `toolkit`                      | setup                                      |
| [Account form](#account-form)                                | `input`, `form-field`, `checkbox`, `radio`, `switch`                       | Design system/Recipes → AccountForm        |
| [Filter controls](#filters)                                  | `select`, `slider`, `segmented-control`, `datetime`                        | Design system/Recipes → Filters            |
| [Profile card and status](#profile-card)                     | `card`, `primitives`, `icon`, `icon-view`                                  | Design system/Recipes → ProfileCard        |
| [Loading, empty and paginated list](#data-list)              | `data-state`, `skeleton`, `list`, `flat-list`, `scroll-view`, `pagination` | Design system/Recipes → DataList           |
| [Workspace carousel](#product-carousel)                      | `carousel`, `card`                                                         | Design system/Recipes → ProductCarousel    |
| [Expandable settings](#disclosure-settings)                  | `accordion`, `switch`                                                      | Design system/Recipes → DisclosureSettings |
| [Local dialog and sheet](#details-dialog)                    | `modal`, `flyout`, `portal`                                                | Design system/Recipes → DetailsDialog      |
| [Anchored menu and tooltip](#anchored-actions)               | `popover`                                                                  | Design system/Recipes → AnchoredActions    |
| [Registered toast notification](#notifications)              | `toast`, `overlay`                                                         | Design system/Recipes → Notifications      |
| [Chart and progress](#metrics)                               | `charts`, `progress`                                                       | Design system/Recipes → Metrics            |
| [Composed color editor](#color-settings)                     | `color-picker`                                                             | Design system/Recipes → ColorSettings      |
| [Tabs and controlled steps](#onboarding)                     | `tabs`, `stepper`                                                          | Design system/Recipes → Onboarding         |
| [Field and action appearance comparison](#field-appearances) | `input`, `select`, `datetime`, `primitives`, `theme`                       | Design system/Recipes → FieldAppearances   |
| [Typed data and event integration](#data-service)            | `endpoint`, `echo`, `core`                                                 | infrastructure                             |
| [Typed native story metadata](#story-authoring)              | `storybook`                                                                | authoring                                  |

<a id="app-shell"></a>

## Native application setup

Source: [recipes/app-shell.tsx](recipes/app-shell.tsx).

- Load configured fonts before rendering themed text.
- Switch scheme explicitly; keep the portal and overlay stores stable.

Verification: typechecked; setup or behavior example; no standalone visual capture.

Native screenshot: not captured. Do not treat this recipe's typecheck or story registration as visual approval.

```tsx
import type { PropsWithChildren } from "react";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import type { ColorScheme } from "@impulse-ui-native/theme";
import { OverlayProvider, OverlayStore } from "@impulse-ui-native/overlay";
import { PortalProvider, PortalStore } from "@impulse-ui-native/portal";
import { ThemeProvider } from "@impulse-ui-native/theme";

import { RecipeSurface } from "./recipe-surface";

// Load the configured fonts and complete native peer setup in the application host.
export function AppShellRecipe({
  children,
  scheme = "light",
}: PropsWithChildren<{ scheme?: ColorScheme }>) {
  const [portals] = useState(() => new PortalStore());
  const [overlays] = useState(() => new OverlayStore());

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider scheme={scheme}>
          <PortalProvider store={portals}>
            <OverlayProvider store={overlays}>
              <RecipeSurface>{children}</RecipeSurface>
            </OverlayProvider>
          </PortalProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
```

<a id="account-form"></a>

## Account form

Source: [recipes/account-form.tsx](recipes/account-form.tsx).

- Press Save with an empty name to inspect validation.
- Edit text, toggle notifications and choose exactly one plan.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                             | Scheme | Appearance         | State   |
| -------------------------------------------------------- | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/account-form-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/account-form-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { useState } from "react";

import { Checkbox } from "@impulse-ui-native/checkbox";
import { FormField } from "@impulse-ui-native/form-field";
import { Input, Textarea } from "@impulse-ui-native/input";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { Radio } from "@impulse-ui-native/radio";
import { Switch } from "@impulse-ui-native/switch";

export function AccountFormRecipe() {
  const [name, setName] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [plan, setPlan] = useState("personal");
  const [saved, setSaved] = useState(false);
  const nameError = saved && !name.trim() ? "Enter your name." : undefined;

  return (
    <View gap={16}>
      <Typography.Title4>Account details</Typography.Title4>
      <Input
        label="Name"
        value={name}
        onChangeText={setName}
        error={nameError}
      />
      <Textarea
        label="About you"
        placeholder="A short introduction"
        maxLength={160}
      />
      <FormField
        label="Notifications"
        description="Receive updates about your account."
      >
        {({ controlProps }) => (
          <Switch
            {...controlProps}
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        )}
      </FormField>
      <View flexDirection="row" gap={8} alignItems="center">
        <Checkbox defaultChecked />
        <Typography.Body>Keep me signed in</Typography.Body>
      </View>
      <View flexDirection="row" gap={8} alignItems="center">
        <Radio
          checked={plan === "personal"}
          onCheckedChange={() => setPlan("personal")}
        />
        <Typography.Body>Personal</Typography.Body>
        <Radio
          checked={plan === "team"}
          onCheckedChange={() => setPlan("team")}
        />
        <Typography.Body>Team</Typography.Body>
      </View>
      <Button onPress={() => setSaved(true)}>Save account</Button>
    </View>
  );
}
```

<a id="filters"></a>

## Filter controls

Source: [recipes/filters.tsx](recipes/filters.tsx).

- Open Select/MultiSelect and the date-range flyout.
- Change range slider endpoints and period selection.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                        | Scheme | Appearance         | State   |
| --------------------------------------------------- | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/filters-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/filters-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { useMemo, useState } from "react";

import { DateRangePicker } from "@impulse-ui-native/datetime";
import { Typography, View } from "@impulse-ui-native/primitives";
import { SegmentedControl } from "@impulse-ui-native/segmented-control";
import { MultiSelect, Select } from "@impulse-ui-native/select";
import { RangeSlider } from "@impulse-ui-native/slider";

export function FiltersRecipe() {
  const [period, setPeriod] = useState("month");
  const options = useMemo(
    () => [
      { label: "Design", value: "design" },
      { label: "Engineering", value: "engineering" },
    ],
    [],
  );

  return (
    <View gap={16}>
      <Typography.Title4>Filter activity</Typography.Title4>
      <SegmentedControl.Root value={period} onValueChange={setPeriod}>
        <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
        <SegmentedControl.Item value="month">Month</SegmentedControl.Item>
      </SegmentedControl.Root>
      <Select
        options={options}
        label="Department"
        placeholder="Any department"
      />
      <MultiSelect options={options} defaultValue={["design"]} label="Teams" />
      <DateRangePicker label="Date range" placeholder="Choose dates" />
      <Typography.Label>Budget</Typography.Label>
      <RangeSlider
        min={0}
        max={100}
        step={5}
        defaultValue={[20, 80]}
        showMinMax
      />
    </View>
  );
}
```

<a id="profile-card"></a>

## Profile card and status

Source: [recipes/profile-card.tsx](recipes/profile-card.tsx).

- Check title/body hierarchy, icon weight, avatar fallback and status labels.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                             | Scheme | Appearance         | State   |
| -------------------------------------------------------- | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/profile-card-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/profile-card-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { Card } from "@impulse-ui-native/card";
import { Icon } from "@impulse-ui-native/icon";
import { IconView } from "@impulse-ui-native/icon-view";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";
import {
  Avatar,
  Badge,
  Divider,
  Tag,
  Typography,
  View,
} from "@impulse-ui-native/primitives";

export function ProfileCardRecipe() {
  return (
    <Card.Root>
      <Card.Header>
        <View flexDirection="row" gap={12} alignItems="center">
          <Avatar initials="AL" tone="neutral" />
          <Typography.Title5>Alex Lee</Typography.Title5>
          <Badge tone="success">Active</Badge>
        </View>
      </Card.Header>
      <Card.Content>
        <Typography.Body>
          Product designer working across the mobile experience.
        </Typography.Body>
        <View flexDirection="row" gap={8} alignItems="center">
          <IconView icon={CheckIcon} variant="soft" tone="primary" />
          <Tag label="Design" variant="soft" tone="primary" />
          <Icon icon={CheckIcon} variant="bold" />
        </View>
      </Card.Content>
      <Divider />
      <Card.Footer>
        <Typography.Caption>Member since 2024</Typography.Caption>
      </Card.Footer>
    </Card.Root>
  );
}
```

<a id="data-list"></a>

## Loading, empty and paginated list

Source: [recipes/data-list.tsx](recipes/data-list.tsx).

- Toggle loading and empty states.
- Change page; ensure skeleton/content keep usable dimensions.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                          | Scheme | Appearance         | State   |
| ----------------------------------------------------- | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/data-list-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/data-list-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { useMemo, useState } from "react";

import { DataView } from "@impulse-ui-native/data-state";
import { FlatList } from "@impulse-ui-native/flat-list";
import { List } from "@impulse-ui-native/list";
import { Pagination } from "@impulse-ui-native/pagination";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { ScrollView } from "@impulse-ui-native/scroll-view";

import { RecipeLoader } from "./recipe-loader";

export function DataListRecipe() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const items = useMemo(
    () =>
      empty
        ? []
        : [
            { id: "one", title: `Project ${(page - 1) * 2 + 1}` },
            { id: "two", title: `Project ${(page - 1) * 2 + 2}` },
          ],
    [empty, page],
  );
  const errorDetails = useMemo(
    () => ({
      text: "Could not load projects.",
      primaryActionLabel: "Retry",
      onPressPrimaryAction: () => setLoading(false),
    }),
    [],
  );
  const emptyDetails = useMemo(
    () => ({
      text: "No projects yet.",
      primaryActionLabel: "Show projects",
      onPressPrimaryAction: () => setEmpty(false),
    }),
    [],
  );

  return (
    <View gap={16}>
      <View flexDirection="row" gap={8}>
        <Button variant="outlined" onPress={() => setLoading(!loading)}>
          Toggle loading
        </Button>
        <Button variant="outlined" onPress={() => setEmpty(!empty)}>
          Toggle empty
        </Button>
      </View>
      <DataView
        loading={loading}
        error={null}
        isEmpty={!items.length}
        LoadingComponent={RecipeLoader}
        errorViewProps={errorDetails}
        emptyViewProps={emptyDetails}
      >
        <View height={160}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <List.Item>
                <List.Content>
                  <Typography.Body>{item.title}</Typography.Body>
                </List.Content>
              </List.Item>
            )}
          />
        </View>
      </DataView>
      <Pagination page={page} onPageChange={setPage} pageCount={5} compact />
      <ScrollView horizontal>
        <Typography.Caption>
          Measured scrolling is separate from virtualized FlatList rows.
        </Typography.Caption>
      </ScrollView>
    </View>
  );
}
```

<a id="product-carousel"></a>

## Workspace carousel

Source: [recipes/product-carousel.tsx](recipes/product-carousel.tsx).

- Swipe to both ends, use arrows, and inspect peeking and adaptive pagination.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                                 | Scheme | Appearance         | State   |
| ------------------------------------------------------------ | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/product-carousel-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/product-carousel-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { Card } from "@impulse-ui-native/card";
import { Carousel } from "@impulse-ui-native/carousel";
import { Typography, View } from "@impulse-ui-native/primitives";

export function ProductCarouselRecipe() {
  return (
    <View gap={16}>
      <Typography.Title4>Explore workspaces</Typography.Title4>
      <Carousel peek={24} slideAspectRatio={1.8} tone="primary" showNavigation>
        <Card
          header={<Typography.Title5>Personal workspace</Typography.Title5>}
        >
          <Typography.Body>A focused place for your projects.</Typography.Body>
        </Card>
        <Card header={<Typography.Title5>Team workspace</Typography.Title5>}>
          <Typography.Body>Shared projects and conversations.</Typography.Body>
        </Card>
      </Carousel>
    </View>
  );
}
```

<a id="disclosure-settings"></a>

## Expandable settings

Source: [recipes/disclosure-settings.tsx](recipes/disclosure-settings.tsx).

- Expand/collapse both items and toggle the setting.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                                    | Scheme | Appearance         | State   |
| --------------------------------------------------------------- | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/disclosure-settings-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/disclosure-settings-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { Accordion } from "@impulse-ui-native/accordion";
import { Icon } from "@impulse-ui-native/icon";
import { CaretDownIcon } from "@impulse-ui-native/icon/icons/caret-down";
import { Typography, View } from "@impulse-ui-native/primitives";
import { Switch } from "@impulse-ui-native/switch";

export function DisclosureSettingsRecipe() {
  return (
    <Accordion.Root type="single" collapsible defaultValue="privacy">
      <Accordion.Item value="privacy">
        <Accordion.Trigger>
          <Typography.Body>Privacy</Typography.Body>
          <Accordion.Indicator>
            <Icon icon={CaretDownIcon} />
          </Accordion.Indicator>
        </Accordion.Trigger>
        <Accordion.Content>
          <View flexDirection="row" gap={12} alignItems="center">
            <Typography.Body>Share activity</Typography.Body>
            <Switch defaultChecked />
          </View>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="billing">
        <Accordion.Trigger>Billing</Accordion.Trigger>
        <Accordion.Content>
          <Typography.Body>Your current plan is Personal.</Typography.Body>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

<a id="details-dialog"></a>

## Local dialog and sheet

Source: [recipes/details-dialog.tsx](recipes/details-dialog.tsx).

- Open each overlay, dismiss with its action/backdrop, then reopen.
- Check top/bottom safe areas and keyboard/device behavior separately.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified; open overlay content not captured.

| Native frame                                               | Scheme | Appearance         | State   |
| ---------------------------------------------------------- | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/details-dialog-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/details-dialog-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { useState } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Modal } from "@impulse-ui-native/modal";
import { Portal } from "@impulse-ui-native/portal";
import { Button, Typography, View } from "@impulse-ui-native/primitives";

export function DetailsDialogRecipe() {
  const [open, setOpen] = useState<"dialog" | "sheet" | null>(null);
  const close = () => setOpen(null);
  return (
    <View gap={12}>
      <Button onPress={() => setOpen("dialog")}>Open confirmation</Button>
      <Button variant="outlined" onPress={() => setOpen("sheet")}>
        Open details sheet
      </Button>
      <Portal id="recipe-dialog">
        <Modal
          id="recipe-dialog"
          title="Archive project?"
          open={open === "dialog"}
          onClose={close}
        >
          <Typography.Body>You can restore it later.</Typography.Body>
          <Button onPress={close}>Keep project</Button>
        </Modal>
      </Portal>
      <Portal id="recipe-sheet">
        <Flyout
          id="recipe-sheet"
          title="Project details"
          open={open === "sheet"}
          onClose={close}
        >
          <Typography.Body>
            Sheet content is supplied by the application.
          </Typography.Body>
          <Button onPress={close}>Done</Button>
        </Flyout>
      </Portal>
    </View>
  );
}
```

<a id="anchored-actions"></a>

## Anchored menu and tooltip

Source: [recipes/anchored-actions.tsx](recipes/anchored-actions.tsx).

- Open the menu and close it through its compound Close part.
- Long press the tooltip trigger; inspect host-relative positioning.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified; open overlay content not captured.

| Native frame                                                 | Scheme | Appearance         | State   |
| ------------------------------------------------------------ | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/anchored-actions-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/anchored-actions-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { Popover, Tooltip } from "@impulse-ui-native/popover";
import { Typography, View } from "@impulse-ui-native/primitives";

export function AnchoredActionsRecipe() {
  return (
    <View gap={16}>
      <Popover.Root>
        <Popover.Trigger>
          <Typography.Body>Project actions</Typography.Body>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Title>Project actions</Popover.Title>
          <Popover.Description>
            Choose an action for this workspace.
          </Popover.Description>
          <Popover.Close>
            <Typography.Body>Close menu</Typography.Body>
          </Popover.Close>
        </Popover.Content>
      </Popover.Root>
      <Tooltip content="Only workspace members can see this project.">
        <Typography.Body>Long press for visibility details</Typography.Body>
      </Tooltip>
    </View>
  );
}
```

<a id="notifications"></a>

## Registered toast notification

Source: [recipes/notifications.tsx](recipes/notifications.tsx).

- Open a notification, wait for timed dismissal, and reopen.
- Background/foreground the host to exercise duration pausing.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified; open overlay content not captured.

| Native frame                                              | Scheme | Appearance         | State   |
| --------------------------------------------------------- | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/notifications-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/notifications-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { useCallback } from "react";

import { useOverlayContext } from "@impulse-ui-native/overlay";
import { Button } from "@impulse-ui-native/primitives";

import { RecipeToastContent } from "./recipe-toast-content";
import { RecipeToastOverlay } from "./recipe-toast-overlay";

export function NotificationsRecipe() {
  const { store } = useOverlayContext();
  const notify = useCallback(() => {
    store
      .register({
        id: "recipe-saved",
        title: "Changes saved",
        Component: RecipeToastOverlay,
        Content: RecipeToastContent,
      })
      .open();
  }, [store]);
  return <Button onPress={notify}>Show saved notification</Button>;
}
```

<a id="metrics"></a>

## Chart and progress

Source: [recipes/metrics.tsx](recipes/metrics.tsx).

- Check chart sizing and labels, then inspect touch selection.
- Compare linear/circular geometry without confusing it with appearance variants.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                        | Scheme | Appearance         | State   |
| --------------------------------------------------- | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/metrics-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/metrics-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { useMemo } from "react";

import { BarChart } from "@impulse-ui-native/charts";
import { Typography, View } from "@impulse-ui-native/primitives";
import { Progress } from "@impulse-ui-native/progress";

export function MetricsRecipe() {
  const data = useMemo(
    () => [
      { x: "Jan", y: 18 },
      { x: "Feb", y: 24 },
      { x: "Mar", y: 16 },
    ],
    [],
  );
  return (
    <View gap={16}>
      <Typography.Title4>Workspace activity</Typography.Title4>
      <View height={220}>
        <BarChart data={data} />
      </View>
      <Typography.Label>Monthly target: 65%</Typography.Label>
      <Progress value={65} tone="primary" />
      <Progress variant="circular" value={65} tone="secondary" />
    </View>
  );
}
```

<a id="color-settings"></a>

## Composed color editor

Source: [recipes/color-settings.tsx](recipes/color-settings.tsx).

- Drag spectrum/hue/alpha, edit hex, and compare Cancel versus Apply.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                               | Scheme | Appearance         | State   |
| ---------------------------------------------------------- | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/color-settings-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/color-settings-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { useState } from "react";

import { ColorPicker } from "@impulse-ui-native/color-picker";
import { Typography, View } from "@impulse-ui-native/primitives";

export function ColorSettingsRecipe() {
  const [color, setColor] = useState("#F55D6B");
  return (
    <View gap={16}>
      <Typography.Title4>Workspace color</Typography.Title4>
      <Typography.Body>Saved color: {color}</Typography.Body>
      <ColorPicker.Root
        value={color}
        onChange={setColor}
        commitMode="confirm"
        tone="primary"
      >
        <ColorPicker.Spectrum />
        <ColorPicker.HueSlider />
        <ColorPicker.AlphaSlider />
        <ColorPicker.HexInput />
        <ColorPicker.Preview />
        <View flexDirection="row" gap={8}>
          <ColorPicker.Cancel>Cancel</ColorPicker.Cancel>
          <ColorPicker.Apply>Apply</ColorPicker.Apply>
        </View>
      </ColorPicker.Root>
    </View>
  );
}
```

<a id="onboarding"></a>

## Tabs and controlled steps

Source: [recipes/onboarding.tsx](recipes/onboarding.tsx).

- Advance through steps and change tabs.
- Only the active tab panel mounts; step index belongs to the recipe.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                           | Scheme | Appearance         | State   |
| ------------------------------------------------------ | ------ | ------------------ | ------- |
| [iPhone 18 Pro, iOS 27.0](images/onboarding-light.jpg) | light  | outlined / neutral | default |
| [iPhone 18 Pro, iOS 27.0](images/onboarding-dark.jpg)  | dark   | outlined / neutral | default |

```tsx
import { useMemo, useState } from "react";

import { Typography, View } from "@impulse-ui-native/primitives";
import { Stepper, StepperTabsNavigation } from "@impulse-ui-native/stepper";
import { Tabs } from "@impulse-ui-native/tabs";

import { RecipeOnboardingStep } from "./recipe-onboarding-step";

export function OnboardingRecipe() {
  const [current, setCurrent] = useState(0);
  const steps = useMemo(
    () => [
      { title: "Details", Component: RecipeOnboardingStep },
      { title: "Review", Component: RecipeOnboardingStep },
    ],
    [],
  );
  const tabs = useMemo(
    () => [
      {
        value: "setup",
        label: "Setup",
        content: (
          <View gap={12}>
            <StepperTabsNavigation current={current} items={steps} />
            <Stepper current={current} onChange={setCurrent} items={steps} />
          </View>
        ),
      },
      {
        value: "help",
        label: "Help",
        content: (
          <Typography.Body>
            Configure your workspace, then review it.
          </Typography.Body>
        ),
      },
    ],
    [current, steps],
  );
  return <Tabs items={tabs} defaultValue="setup" />;
}
```

<a id="field-appearances"></a>

## Field and action appearance comparison

Source: [recipes/field-appearances.tsx](recipes/field-appearances.tsx).

- Compare all three variants and tones in both schemes.
- Inspect selected MultiSelect tags; open DatePicker and check inherited variant/tone.
- Use disabled/error controls; check field text, icons, placeholders and actions.

Verification: typechecked; native initial render visually inspected in light and dark; interactions unverified.

| Native frame                                                                          | Scheme | Appearance         | State    |
| ------------------------------------------------------------------------------------- | ------ | ------------------ | -------- |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-light.jpg)                         | light  | outlined / neutral | default  |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-dark.jpg)                          | dark   | outlined / neutral | default  |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-filled-primary-default-light.jpg)  | light  | filled / primary   | default  |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-filled-primary-default-dark.jpg)   | dark   | filled / primary   | default  |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-soft-secondary-default-light.jpg)  | light  | soft / secondary   | default  |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-soft-secondary-default-dark.jpg)   | dark   | soft / secondary   | default  |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-outlined-neutral-error-light.jpg)  | light  | outlined / neutral | error    |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-outlined-neutral-error-dark.jpg)   | dark   | outlined / neutral | error    |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-filled-primary-disabled-light.jpg) | light  | filled / primary   | disabled |
| [iPhone 18 Pro, iOS 27.0](images/field-appearances-filled-primary-disabled-dark.jpg)  | dark   | filled / primary   | disabled |

```tsx
import { useMemo } from "react";

import type { ComponentTone, FieldVariant } from "@impulse-ui-native/theme";
import { DatePicker } from "@impulse-ui-native/datetime";
import { Input } from "@impulse-ui-native/input";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { MultiSelect } from "@impulse-ui-native/select";

export function FieldAppearancesRecipe({
  variant = "outlined",
  tone = "neutral",
  disabled = false,
  error,
}: {
  variant?: FieldVariant;
  tone?: ComponentTone;
  disabled?: boolean;
  error?: string;
}) {
  const options = useMemo(
    () => [
      { label: "Design", value: "design" },
      { label: "Engineering", value: "engineering" },
    ],
    [],
  );
  return (
    <View gap={16}>
      <Typography.Title5>
        {variant} / {tone}
      </Typography.Title5>
      <Input
        label="Project name"
        defaultValue="Mobile workspace"
        variant={variant}
        tone={tone}
        disabled={disabled}
        error={error}
      />
      <MultiSelect
        label="Teams"
        options={options}
        defaultValue={["design"]}
        variant={variant}
        tone={tone}
        disabled={disabled}
        error={error}
      />
      <DatePicker
        label="Launch date"
        placeholder="Choose a date"
        variant={variant}
        tone={tone}
        disabled={disabled}
        error={error}
      />
      <Button variant={variant} tone={tone} disabled={disabled}>
        Save changes
      </Button>
    </View>
  );
}
```

<a id="data-service"></a>

## Typed data and event integration

Source: [recipes/data-service.ts](recipes/data-service.ts).

- Supply an Axios client and render generated hooks under QueryClientProvider.
- Augment EchoEvents before emitting application-specific events; this recipe makes no request by itself.

Verification: typechecked; setup or behavior example; no standalone visual capture.

Native screenshot: not captured. Do not treat this recipe's typecheck or story registration as visual approval.

```tsx
import type { Axios } from "axios";

import { EchoInstance } from "@impulse-ui-native/echo";
import { createEndpointFactory } from "@impulse-ui-native/endpoint";

declare module "@impulse-ui-native/echo" {
  interface EchoEvents {
    "recipe.project.saved": { id: string };
  }
}

// Call once with the application's configured client; render query hooks inside QueryClientProvider.
export function createProjectService(client: Axios) {
  const endpoint = createEndpointFactory(client);
  const useProjects = endpoint.createQuery<{ id: string; title: string }[]>({
    key: ["recipe-projects"],
    path: "/projects",
  });
  return {
    useProjects,
    notifySaved: (id: string) =>
      EchoInstance.emit("recipe.project.saved", { id }),
  };
}

export { useProjectEditor } from "./recipe-project-editor.hook";
```

<a id="story-authoring"></a>

## Typed native story metadata

Source: [recipes/story-authoring.ts](recipes/story-authoring.ts).

- Use component-specific option arrays and the existing native host providers.
- A story declaration is not a captured screenshot or a device verification.

Verification: typechecked; setup or behavior example; no standalone visual capture.

Native screenshot: not captured. Do not treat this recipe's typecheck or story registration as visual approval.

```tsx
import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@impulse-ui-native/input";
import {
  createComponentDescription,
  FieldToneOptions,
  FieldVariantOptions,
} from "@impulse-ui-native/storybook";

export const inputRecipeMeta = {
  title: "Recipes/Project name",
  component: Input,
  args: { label: "Project name", variant: "outlined", tone: "neutral" },
  argTypes: {
    variant: { control: "select", options: FieldVariantOptions },
    tone: { control: "select", options: FieldToneOptions },
  },
  parameters: createComponentDescription(
    "A native project name field. Open its flyout siblings in the field-appearances recipe to inspect inheritance.",
  ),
} satisfies Meta<typeof Input>;
export type InputRecipeStory = StoryObj<typeof inputRecipeMeta>;
```
