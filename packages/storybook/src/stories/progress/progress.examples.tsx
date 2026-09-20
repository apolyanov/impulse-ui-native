import type { ComponentProps } from "react";
import { memo } from "react";

import { Progress, View } from "@impulse-ui-native/primitives";
import { useColors, useRadii, useSpace } from "@impulse-ui-native/theme";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface ProgressExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Progress>;
}

export const ProgressExampleDefinitions = [
  {
    name: "LinearDeterminate",
    title: "Linear determinate progress",
    description:
      "Use a value when the amount of completed work can be measured.",
    props: [
      { name: "variant", value: "linear" },
      { name: "value", value: "65" },
    ],
    args: {
      accessibilityLabel: "File upload progress",
      value: 65,
      variant: "linear",
    },
  },
  {
    name: "LinearIndeterminate",
    title: "Linear indeterminate progress",
    description:
      "Omit value when work is in progress but its completion cannot be measured.",
    props: [
      { name: "variant", value: "linear" },
      { name: "value", value: "undefined" },
    ],
    args: {
      accessibilityLabel: "Preparing download",
      value: undefined,
      variant: "linear",
    },
  },
  {
    name: "CircularDeterminate",
    title: "Circular determinate progress",
    description:
      "Use circular progress when horizontal space is constrained or the indicator accompanies compact content.",
    props: [
      { name: "variant", value: "circular" },
      { name: "value", value: "72" },
    ],
    args: {
      accessibilityLabel: "Profile completion",
      value: 72,
      variant: "circular",
    },
  },
  {
    name: "CircularIndeterminate",
    title: "Circular indeterminate progress",
    description:
      "The circular indeterminate state rotates continuously unless reduced motion is enabled.",
    props: [
      { name: "variant", value: "circular" },
      { name: "value", value: "undefined" },
    ],
    args: {
      accessibilityLabel: "Processing payment",
      value: undefined,
      variant: "circular",
    },
  },
  {
    name: "Small",
    title: "Small progress",
    description:
      "Use the small size in compact status rows and space-constrained layouts.",
    props: [
      { name: "size", value: "small" },
      { name: "variant", value: "circular" },
    ],
    args: {
      accessibilityLabel: "Compact task progress",
      size: "small",
      value: 40,
      variant: "circular",
    },
  },
  {
    name: "Large",
    title: "Large progress",
    description:
      "Use the large size for prominent progress feedback and touch-first layouts.",
    props: [
      { name: "size", value: "large" },
      { name: "variant", value: "linear" },
    ],
    args: {
      accessibilityLabel: "Onboarding progress",
      size: "large",
      value: 80,
      variant: "linear",
    },
  },
  {
    name: "Inverse",
    title: "Inverse progress",
    description:
      "Use the inverse tone when progress appears on a dark or inverse surface.",
    props: [
      { name: "tone", value: "inverse" },
      { name: "variant", value: "circular" },
    ],
    args: {
      accessibilityLabel: "Inverse surface progress",
      tone: "inverse",
      value: 58,
      variant: "circular",
    },
  },
  {
    name: "CustomColors",
    title: "Custom colors",
    description:
      "Override both colors when progress needs to match a contextual status or branded surface.",
    props: [
      { name: "color", value: "#7c3aed" },
      { name: "trackColor", value: "#ede9fe" },
    ],
    args: {
      accessibilityLabel: "Custom task progress",
      color: "#7c3aed",
      trackColor: "#ede9fe",
      value: 45,
    },
  },
  {
    name: "CustomRange",
    title: "Custom range",
    description:
      "Use min and max when the source value does not use the default zero-to-one-hundred range.",
    props: [
      { name: "min", value: "20" },
      { name: "max", value: "80" },
      { name: "value", value: "50" },
    ],
    args: {
      accessibilityLabel: "Temperature calibration progress",
      max: 80,
      min: 20,
      value: 50,
    },
  },
] satisfies ProgressExampleDefinition[];

interface ProgressExampleProps {
  example: ProgressExampleDefinition;
  elevated?: boolean;
}

export const ProgressExample = memo(function ProgressExample({
  example,
  elevated,
}: ProgressExampleProps) {
  const colors = useColors();
  const radii = useRadii();
  const space = useSpace();
  const circular = example.args.variant === "circular";
  const inverse = example.args.tone === "inverse";

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <View
        alignSelf={circular ? "flex-start" : undefined}
        width={circular ? undefined : "100%"}
        padding={inverse ? space.sm : undefined}
        borderRadius={inverse ? radii.sm : undefined}
        backgroundColor={inverse ? colors.surface.inverse.value : undefined}
      >
        <Progress {...example.args} />
      </View>
    </StoryExample>
  );
});
