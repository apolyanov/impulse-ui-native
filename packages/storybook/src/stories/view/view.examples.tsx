import type { ComponentProps, ReactNode } from "react";
import { memo } from "react";

import type { View } from "@impulse-ui-native/primitives";
import { Typography } from "@impulse-ui-native/primitives";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";
import { ViewPreview } from "./view-preview";

interface ViewExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  preview: ReactNode;
  args: ComponentProps<typeof View>;
}

function PreviewBox({ children }: { children: ReactNode }) {
  return (
    <ViewPreview
      padding={16}
      borderRadius={12}
      surface="primary"
      borderWidth={1}
    >
      {children}
    </ViewPreview>
  );
}

function PreviewItem({ children }: { children: ReactNode }) {
  return (
    <ViewPreview
      paddingHorizontal={12}
      paddingVertical={8}
      borderRadius={10}
      surface="elevated"
      borderWidth={1}
    >
      <Typography.Body>{children}</Typography.Body>
    </ViewPreview>
  );
}

export const ViewExampleDefinitions = [
  {
    name: "Default",
    title: "Default view",
    description:
      "Use View as the base layout primitive for grouping content and composing native interfaces.",
    props: [
      {
        name: "children",
        value: "ReactNode",
        description: "Renders the content inside the native view.",
      },
      {
        name: "style",
        value: "StyleProp<ViewStyle>",
        description: "Applies regular React Native view styles.",
      },
    ],
    args: {},
    preview: (
      <PreviewBox>
        <Typography.Body>Default View container</Typography.Body>
      </PreviewBox>
    ),
  },
  {
    name: "Padding",
    title: "Padding view",
    description:
      "Use padding style props to create consistent internal spacing around grouped content.",
    props: [
      {
        name: "padding",
        value: "16",
        description: "Adds equal spacing on all sides of the view.",
      },
      {
        name: "backgroundColor",
        value: "colors.surface.primary.value",
        description: "Applies a background color to the layout surface.",
      },
      {
        name: "borderRadius",
        value: "12",
        description: "Rounds the corners of the view surface.",
      },
    ],
    args: {
      padding: 16,
      borderRadius: 12,
    },
    preview: (
      <ViewPreview padding={16} borderRadius={12} surface="primary">
        <Typography.Body>Content with padding</Typography.Body>
      </ViewPreview>
    ),
  },
  {
    name: "Gap",
    title: "Gap view",
    description:
      "Use gap to control spacing between child elements without manually adding margins.",
    props: [
      {
        name: "gap",
        value: "8",
        description: "Adds spacing between direct children.",
      },
      {
        name: "children",
        value: "ReactNode[]",
        description: "Renders multiple child elements with consistent spacing.",
      },
    ],
    args: {
      gap: 8,
    },
    preview: (
      <ViewPreview gap={8}>
        <PreviewItem>First item</PreviewItem>
        <PreviewItem>Second item</PreviewItem>
        <PreviewItem>Third item</PreviewItem>
      </ViewPreview>
    ),
  },
  {
    name: "Row",
    title: "Row view",
    description:
      "Use row layout props to align content horizontally inside cards, lists, controls, and headers.",
    props: [
      {
        name: "flexDirection",
        value: "row",
        description: "Places child elements horizontally.",
      },
      {
        name: "alignItems",
        value: "center",
        description: "Vertically aligns children in the center.",
      },
      {
        name: "gap",
        value: "8",
        description: "Adds spacing between row items.",
      },
    ],
    args: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    preview: (
      <ViewPreview flexDirection="row" alignItems="center" gap={8}>
        <PreviewItem>Label</PreviewItem>
        <PreviewItem>Value</PreviewItem>
      </ViewPreview>
    ),
  },
  {
    name: "SpaceBetween",
    title: "Space-between view",
    description:
      "Use justifyContent space-between for rows where content should be pushed to opposite sides.",
    props: [
      {
        name: "flexDirection",
        value: "row",
        description: "Places child elements horizontally.",
      },
      {
        name: "justifyContent",
        value: "space-between",
        description: "Distributes children to opposite edges.",
      },
      {
        name: "alignItems",
        value: "center",
        description: "Keeps row content vertically centered.",
      },
    ],
    args: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    preview: (
      <ViewPreview
        width="100%"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={16}
        borderRadius={12}
        surface="primary"
      >
        <Typography.Body>Balance</Typography.Body>
        <Typography.Title5>$2,480</Typography.Title5>
      </ViewPreview>
    ),
  },
  {
    name: "Centered",
    title: "Centered view",
    description:
      "Use centered alignment for empty states, icon containers, small previews, and visual placeholders.",
    props: [
      {
        name: "alignItems",
        value: "center",
        description: "Centers children horizontally.",
      },
      {
        name: "justifyContent",
        value: "center",
        description: "Centers children vertically.",
      },
      {
        name: "minHeight",
        value: "120",
        description: "Gives the centered area enough vertical space.",
      },
    ],
    args: {
      alignItems: "center",
      justifyContent: "center",
      minHeight: 120,
    },
    preview: (
      <ViewPreview
        alignItems="center"
        justifyContent="center"
        minHeight={120}
        borderRadius={12}
        surface="primary"
      >
        <Typography.Body>Centered content</Typography.Body>
      </ViewPreview>
    ),
  },
  {
    name: "Surface",
    title: "Surface view",
    description:
      "Use background, border, and radius style props to create reusable surfaces and card-like containers.",
    props: [
      {
        name: "backgroundColor",
        value: "colors.surface.elevated.value",
        description: "Creates a visible surface background.",
      },
      {
        name: "borderWidth",
        value: "1",
        description: "Adds a border around the surface.",
      },
      {
        name: "borderRadius",
        value: "16",
        description: "Applies rounded corners to the surface.",
      },
    ],
    args: {
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
    },
    preview: (
      <ViewPreview
        gap={8}
        padding={16}
        borderRadius={16}
        borderWidth={1}
        surface="elevated"
      >
        <Typography.Title5>Card surface</Typography.Title5>
        <Typography.Body>
          A composed view using background, border, radius, and spacing.
        </Typography.Body>
      </ViewPreview>
    ),
  },
  {
    name: "Shadow",
    title: "Shadow view",
    description:
      "Use shadow props when a view should appear as an elevated surface above the background.",
    props: [
      {
        name: "shadow",
        value: "sm",
        description: "Applies the themed shadow style to the view.",
      },
      {
        name: "shadowPosition",
        value: "bottom",
        description: "Controls where the themed shadow is positioned.",
      },
      {
        name: "backgroundColor",
        value: "colors.surface.elevated.value",
        description: "Keeps the elevated surface visually clear.",
      },
    ],
    args: {
      shadow: "sm",
      shadowPosition: "bottom",
      padding: 16,
      borderRadius: 16,
    },
    preview: (
      <ViewPreview
        shadow="sm"
        shadowPosition="bottom"
        gap={8}
        padding={16}
        borderRadius={16}
        surface="elevated"
      >
        <Typography.Title5>Elevated surface</Typography.Title5>
        <Typography.Body>
          Useful for cards, overlays, and floating content.
        </Typography.Body>
      </ViewPreview>
    ),
  },
] satisfies ViewExampleDefinition[];

interface ViewExampleProps {
  example: ViewExampleDefinition;
  elevated?: boolean;
}

export const ViewExample = memo(function ViewExample({
  example,
  elevated,
}: ViewExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      {example.preview}
    </StoryExample>
  );
});
