import { memo, useMemo, useState } from "react";

import type { TabsItem, TabsProps } from "@impulse-ui-native/tabs";
import { useEventCallback } from "@impulse-ui-native/core";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { Tabs } from "@impulse-ui-native/tabs";
import { useSpace } from "@impulse-ui-native/theme";

import { StoryExample } from "../../components/story-example";
import { TabsPanelExample } from "./tabs-panel.example";

export interface TabsExampleDefinition {
  name: string;
  title: string;
  description: string;
  args: Pick<
    TabsProps,
    | "value"
    | "defaultValue"
    | "size"
    | "disabled"
    | "overflow"
    | "panelStyle"
    | "style"
  >;
  controlled?: boolean;
  many?: boolean;
  empty?: boolean;
  disabledValues?: readonly string[];
}

export const TabsExampleDefinitions: TabsExampleDefinition[] = [
  {
    name: "Default",
    title: "Project tabs",
    description:
      "Content-width labels use primary text and an underline for the selected section.",
    args: { defaultValue: "overview" },
  },
  {
    name: "Scrollable",
    title: "Scrollable tab list",
    description: "Swipe the narrow tab row to reach additional sections.",
    args: { defaultValue: "overview", style: { maxWidth: 320 } },
    many: true,
  },
  {
    name: "Small",
    title: "Small tabs",
    description: "Small geometry and typography with expanded press targets.",
    args: { size: "small" },
  },
  {
    name: "Clipped",
    title: "Clipped tab list",
    description: "A constrained list can opt out of horizontal scrolling.",
    args: { overflow: "clip", style: { maxWidth: 320 } },
    many: true,
  },
  {
    name: "Large",
    title: "Large tabs",
    description: "Larger spacing and minimum press height.",
    args: { size: "large" },
  },
  {
    name: "Disabled",
    title: "Disabled tabs",
    description:
      "The selected panel stays visible while every tab press is blocked.",
    args: { defaultValue: "overview", disabled: true },
  },
  {
    name: "DisabledItem",
    title: "Disabled section",
    description: "Files cannot be selected. Other sections remain interactive.",
    args: { defaultValue: "activity" },
    disabledValues: ["files"],
  },
  {
    name: "DisabledSelected",
    title: "Disabled selected tab",
    description:
      "An explicitly selected disabled tab keeps its panel and muted underline visible.",
    args: { defaultValue: "files" },
    disabledValues: ["files"],
  },
  {
    name: "FirstEnabled",
    title: "First enabled tab",
    description:
      "Without a default value, selection skips disabled items on mount.",
    args: {},
    disabledValues: ["overview"],
  },
  {
    name: "AllDisabled",
    title: "All tabs disabled",
    description:
      "With no enabled item or explicit initial value, no panel is mounted.",
    args: {},
    disabledValues: ["overview", "activity", "files"],
  },
  {
    name: "Controlled",
    title: "Controlled tabs",
    description:
      "Application state owns the selection; an external button can switch the panel.",
    args: { value: "overview" },
    controlled: true,
  },
  {
    name: "ConditionalPanels",
    title: "Panel mount lifecycle",
    description:
      "Increment a panel counter, switch tabs, then return. The counter resets because the old panel was unmounted.",
    args: { defaultValue: "overview" },
  },
  {
    name: "Empty",
    title: "Empty tabs",
    description: "No items means no selection or panel.",
    args: {},
    empty: true,
  },
  {
    name: "MissingValue",
    title: "Missing selection",
    description:
      "An unmatched value renders no panel; choose an enabled tab to select one.",
    args: { defaultValue: "missing" },
  },
];

export const TabsExample = memo(function TabsExample({
  example,
  elevated,
}: {
  example: TabsExampleDefinition;
  elevated?: boolean;
}) {
  const [value, setValue] = useState(example.args.value ?? "overview");
  const space = useSpace();
  const controlled =
    Boolean(example.controlled) || example.args.value !== undefined;

  const items = useMemo<TabsItem[]>(() => {
    if (example.empty) {
      return [];
    }

    const sections = ["Overview", "Activity", "Files"];

    if (example.many) {
      sections.push("Members", "Settings", "History");
    }

    return sections.map((label) => ({
      value: label.toLowerCase(),
      label,
      disabled: example.disabledValues?.includes(label.toLowerCase()),
      content: <TabsPanelExample title={label} />,
    }));
  }, [example.disabledValues, example.empty, example.many]);

  const showFiles = useEventCallback(() => setValue("files"));

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      elevated={elevated}
    >
      <View gap={space.sm}>
        {controlled ? (
          <View gap={space.xs}>
            <Typography.Helper>Selected: {value}</Typography.Helper>
            <Button onPress={showFiles}>Show files</Button>
          </View>
        ) : null}
        {controlled ? (
          <Tabs
            items={items}
            value={value}
            onValueChange={setValue}
            disabled={example.args.disabled}
            overflow={example.args.overflow}
            panelStyle={example.args.panelStyle}
            size={example.args.size}
            style={example.args.style}
          />
        ) : (
          <Tabs
            items={items}
            defaultValue={example.args.defaultValue}
            disabled={example.args.disabled}
            overflow={example.args.overflow}
            panelStyle={example.args.panelStyle}
            size={example.args.size}
            style={example.args.style}
          />
        )}
      </View>
    </StoryExample>
  );
});
