import type { ComponentProps } from "react";
import { memo } from "react";

import { Spinner, View } from "@impulse-ui-native/primitives";
import { useColors, useRadii, useSpace } from "@impulse-ui-native/theme";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface SpinnerExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Spinner>;
}

export const SpinnerExampleDefinitions = [
  {
    name: "Small",
    title: "Small spinner",
    description:
      "Use the small size inside compact controls, inline status rows, and dense layouts.",
    props: [{ name: "size", value: "small" }],
    args: { size: "small" },
  },
  {
    name: "Medium",
    title: "Medium spinner",
    description:
      "Use the medium size as the default for buttons, controls, and standalone loading states.",
    props: [{ name: "size", value: "medium" }],
    args: { size: "medium" },
  },
  {
    name: "Large",
    title: "Large spinner",
    description:
      "Use the large size when loading feedback needs more prominence without becoming a full progress view.",
    props: [{ name: "size", value: "large" }],
    args: { size: "large" },
  },
  {
    name: "Primary",
    title: "Primary tone",
    description: "Use the primary tone for the default branded loading state.",
    props: [{ name: "tone", value: "primary" }],
    args: { tone: "primary" },
  },
  {
    name: "Secondary",
    title: "Secondary tone",
    description:
      "Use the secondary tone when loading feedback should have less visual emphasis.",
    props: [{ name: "tone", value: "secondary" }],
    args: { tone: "secondary" },
  },
  {
    name: "Neutral",
    title: "Neutral tone",
    description:
      "Use the neutral tone for loading states that should inherit the visual weight of surrounding text.",
    props: [{ name: "tone", value: "neutral" }],
    args: { tone: "neutral" },
  },
  {
    name: "Inverse",
    title: "Inverse tone",
    description:
      "Use the inverse tone on dark or inverse surfaces where the default tones do not provide enough contrast.",
    props: [{ name: "tone", value: "inverse" }],
    args: { tone: "inverse" },
  },
  {
    name: "CustomColor",
    title: "Custom color",
    description:
      "Provide an explicit color when the spinner must match contextual content such as a button label or status color.",
    props: [{ name: "color", value: "#7c3aed" }],
    args: { color: "#7c3aed" },
  },
] satisfies SpinnerExampleDefinition[];

interface SpinnerExampleProps {
  example: SpinnerExampleDefinition;
  elevated?: boolean;
}

export const SpinnerExample = memo(function SpinnerExample({
  example,
  elevated,
}: SpinnerExampleProps) {
  const colors = useColors();
  const radii = useRadii();
  const space = useSpace();
  const inverse = example.args.tone === "inverse";

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <View
        alignSelf="flex-start"
        padding={inverse ? space.sm : undefined}
        borderRadius={inverse ? radii.sm : undefined}
        backgroundColor={inverse ? colors.surface.inverse.value : undefined}
      >
        <Spinner {...example.args} />
      </View>
    </StoryExample>
  );
});
