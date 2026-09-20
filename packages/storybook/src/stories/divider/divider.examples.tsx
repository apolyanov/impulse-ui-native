import type { ComponentProps } from "react";
import { memo } from "react";

import { Divider, Typography, View } from "@impulse-ui-native/primitives";
import { useColors, useSpace } from "@impulse-ui-native/theme";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface DividerExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Divider>;
}

export const DividerExampleDefinitions = [
  {
    name: "Horizontal",
    title: "Horizontal divider",
    description:
      "The default divider separates stacked content and stretches across the available width.",
    props: [
      { name: "orientation", value: "horizontal" },
      {
        name: "role",
        value: "separator",
        description: "Exposes separator semantics by default.",
      },
    ],
    args: {},
  },
  {
    name: "Vertical",
    title: "Vertical divider",
    description:
      "A vertical divider separates adjacent content and stretches to its container's cross-axis size.",
    props: [{ name: "orientation", value: "vertical" }],
    args: { orientation: "vertical" },
  },
  {
    name: "InsetStart",
    title: "Start inset",
    description:
      "Inset the logical start edge to align a divider with text beside leading content. Horizontal insets respect RTL layout.",
    props: [{ name: "inset", value: "start" }],
    args: { inset: "start" },
  },
  {
    name: "InsetBoth",
    title: "Inset on both edges",
    description:
      "Inset both edges when the divider should remain inside its surrounding content boundary.",
    props: [{ name: "inset", value: "both" }],
    args: { inset: "both" },
  },
  {
    name: "Default",
    title: "Default tone",
    description:
      "Use the default semantic border tone for standard separation between peer regions.",
    props: [{ name: "tone", value: "default" }],
    args: { tone: "default" },
  },
  {
    name: "Strong",
    title: "Strong tone",
    description:
      "Use the strong semantic border tone when adjacent regions need clearer separation.",
    props: [{ name: "tone", value: "strong" }],
    args: { tone: "strong" },
  },
  {
    name: "Primary",
    title: "Primary tone",
    description:
      "Use the primary tone when the separator carries brand emphasis rather than neutral structure.",
    props: [{ name: "tone", value: "primary" }],
    args: { tone: "primary" },
  },
  {
    name: "Inverse",
    title: "Inverse tone",
    description:
      "Use the inverse tone on dark or inverse surfaces where neutral border tones lack contrast.",
    props: [{ name: "tone", value: "inverse" }],
    args: { tone: "inverse", inset: "both" },
  },
  {
    name: "CustomColor",
    title: "Custom color",
    description:
      "Provide an explicit color only when the semantic divider tones do not fit the surrounding context.",
    props: [{ name: "color", value: "#7c3aed" }],
    args: { color: "#7c3aed" },
  },
] satisfies DividerExampleDefinition[];

interface DividerExampleProps {
  example: DividerExampleDefinition;
  elevated?: boolean;
}

export const DividerExample = memo(function DividerExample({
  example,
  elevated,
}: DividerExampleProps) {
  const colors = useColors();
  const space = useSpace();
  const inverse = example.args.tone === "inverse";
  const vertical = example.args.orientation === "vertical";

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <View
        width="100%"
        height={vertical ? 80 : undefined}
        flexDirection={vertical ? "row" : "column"}
        alignItems={vertical ? "stretch" : undefined}
        gap={space.sm}
        padding={inverse ? space.sm : undefined}
        backgroundColor={inverse ? colors.surface.inverse.value : undefined}
      >
        <Typography.Body color={inverse ? colors.text.inverse : undefined}>
          Before
        </Typography.Body>
        <Divider {...example.args} />
        <Typography.Body color={inverse ? colors.text.inverse : undefined}>
          After
        </Typography.Body>
      </View>
    </StoryExample>
  );
});
