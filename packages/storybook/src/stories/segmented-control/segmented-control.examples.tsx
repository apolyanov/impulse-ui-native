import type { ComponentProps, ReactNode } from "react";
import { memo, useState } from "react";

import type { SegmentedControlItemProps } from "@impulse-ui-native/segmented-control";
import { CalendarBlankIcon } from "@impulse-ui-native/icon/icons/calendar-blank";
import { ChartBarIcon } from "@impulse-ui-native/icon/icons/chart-bar";
import { GridFourIcon } from "@impulse-ui-native/icon/icons/grid-four";
import { ListBulletsIcon } from "@impulse-ui-native/icon/icons/list-bullets";
import { View } from "@impulse-ui-native/primitives";
import { SegmentedControl } from "@impulse-ui-native/segmented-control";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";

interface SegmentedControlExampleItem {
  children?: ReactNode;
  disabled?: boolean;
  Icon?: SegmentedControlItemProps["Icon"];
  value: string;
}

interface SegmentedControlExampleDefinition {
  args: ComponentProps<typeof SegmentedControl.Root>;
  controlled?: boolean;
  description: string;
  items?: SegmentedControlExampleItem[];
  name: string;
  props: StoryExamplePropDefinition[];
  title: string;
  width?: number;
}

const defaultItems: SegmentedControlExampleItem[] = [
  { children: "Day", value: "day" },
  { children: "Week", value: "week" },
  { children: "Month", value: "month" },
];

const iconItems: SegmentedControlExampleItem[] = [
  { children: "Calendar", Icon: CalendarBlankIcon, value: "calendar" },
  { children: "List", Icon: ListBulletsIcon, value: "list" },
  { children: "Grid", Icon: GridFourIcon, value: "grid" },
  { children: "Chart", Icon: ChartBarIcon, value: "chart" },
];

export const SegmentedControlExampleDefinitions = [
  {
    name: "Default",
    title: "Default segmented control",
    description:
      "A compact group for choosing one option from a small set of peers.",
    props: [
      {
        name: "defaultValue",
        value: '"week"',
        description: "Starts the uncontrolled group with Week selected.",
      },
    ],
    args: { defaultValue: "week" },
  },
  {
    name: "IconsAndLabels",
    title: "Icons and labels",
    description:
      "Items can pair an icon with a concise label while the group owns the icon color and size.",
    props: [
      {
        name: "Icon",
        value: "IconComponent",
        description: "Uses an icon component from the icon package.",
      },
    ],
    args: { defaultValue: "list" },
    items: iconItems,
  },
  {
    name: "IconOnly",
    title: "Icon-only items",
    description: "Items can render an icon without visible text.",
    props: [],
    args: { defaultValue: "list" },
    items: iconItems.map(({ children: _children, ...item }) => item),
  },
  ...(["filled", "outlined", "soft"] as const).map((variant) => ({
    name: `${variant.charAt(0).toUpperCase()}${variant.slice(1)}`,
    title: `${variant} segmented control`,
    description: `The ${variant} variant uses the shared selection-token family.`,
    props: [
      {
        name: "variant",
        value: variant,
        description: `Uses the ${variant} selected-state treatment.`,
      },
    ],
    args: { defaultValue: "week", variant },
  })),
  ...(["small", "medium", "large"] as const).map((size) => ({
    name: `${size.charAt(0).toUpperCase()}${size.slice(1)}`,
    title: `${size} segmented control`,
    description: `The ${size} size adjusts height, type, icons, spacing, and minimum item width together.`,
    props: [
      {
        name: "size",
        value: size,
        description: `Uses the shared ${size} component size.`,
      },
    ],
    args: { defaultValue: "week", size },
  })),
  {
    name: "DisabledOption",
    title: "Disabled option",
    description:
      "A disabled item remains visible while the other values stay interactive.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Disables only the Month item.",
      },
    ],
    args: { defaultValue: "week" },
    items: defaultItems.map((item) => ({
      ...item,
      disabled: item.value === "month",
    })),
  },
  {
    name: "DisabledGroup",
    title: "Disabled group",
    description: "Root-level disabled state blocks every item.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Disables all items in the group.",
      },
    ],
    args: { defaultValue: "week", disabled: true },
  },
  {
    name: "Controlled",
    title: "Controlled selection",
    description:
      "Controlled mode keeps the selected value in application or form state.",
    props: [
      {
        name: "value",
        value: "state",
        description: "Receives the current selected value.",
      },
      {
        name: "onValueChange",
        value: "setState",
        description: "Receives the next selected value.",
      },
    ],
    args: { value: "week" },
    controlled: true,
  },
  {
    name: "Overflow",
    title: "Scrollable overflow",
    description:
      "The default scroll policy preserves readable targets when the group is narrower than its items.",
    props: [
      {
        name: "overflow",
        value: '"scroll"',
        description: "Allows horizontal scrolling instead of shrinking items.",
      },
    ],
    args: { defaultValue: "list", overflow: "scroll" },
    items: iconItems,
    width: 240,
  },
] satisfies SegmentedControlExampleDefinition[];

interface SegmentedControlExampleProps {
  elevated?: boolean;
  example: SegmentedControlExampleDefinition;
}

export const SegmentedControlExample = memo(function SegmentedControlExample({
  elevated,
  example,
}: SegmentedControlExampleProps) {
  const [controlledValue, setControlledValue] = useState("week");

  const items = example.items ?? defaultItems;

  const control = example.controlled ? (
    <SegmentedControl.Root
      disabled={example.args.disabled}
      overflow={example.args.overflow}
      size={example.args.size}
      variant={example.args.variant}
      value={controlledValue}
      onValueChange={setControlledValue}
    >
      {items.map((item) => (
        <SegmentedControl.Item key={item.value} {...item} />
      ))}
    </SegmentedControl.Root>
  ) : (
    <SegmentedControl.Root {...example.args}>
      {items.map((item) => (
        <SegmentedControl.Item key={item.value} {...item} />
      ))}
    </SegmentedControl.Root>
  );

  return (
    <StoryExample
      description={example.description}
      elevated={elevated}
      props={example.props}
      title={example.title}
    >
      <View width={example.width}>{control}</View>
    </StoryExample>
  );
});
