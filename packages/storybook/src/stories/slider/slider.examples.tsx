import type { ComponentProps } from "react";
import { memo, useState } from "react";

import type { SliderValue } from "@impulse-ui-native/slider";
import { View } from "@impulse-ui-native/primitives";
import { RangeSlider, Slider } from "@impulse-ui-native/slider";
import { useSpace } from "@impulse-ui-native/theme";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";

type SliderExampleDefinition =
  | {
      name: string;
      title: string;
      description: string;
      props: StoryExamplePropDefinition[];
      kind: "slider";
      args: ComponentProps<typeof Slider>;
      controlled?: boolean;
    }
  | {
      name: string;
      title: string;
      description: string;
      props: StoryExamplePropDefinition[];
      kind: "range";
      args: ComponentProps<typeof RangeSlider>;
      controlled?: boolean;
    };

const sharedMarks = [0, 25, 50, 75, 100] as const;

export const SliderExampleDefinitions = [
  {
    name: "Continuous",
    title: "Continuous slider",
    description:
      "A single-value slider with visible bounds and a live value bubble.",
    props: [
      { name: "defaultValue", value: "60" },
      { name: "showMinMax", value: "true" },
      { name: "showValueBubble", value: "true" },
    ],
    kind: "slider",
    args: {
      defaultValue: 60,
      showMinMax: true,
      showValueBubble: true,
    },
  },
  {
    name: "Range",
    title: "Range slider",
    description: "Two thumbs select a bounded interval.",
    props: [
      { name: "defaultValue", value: "[25, 75]" },
      { name: "showValueBubble", value: "true" },
    ],
    kind: "range",
    args: {
      defaultValue: [25, 75],
      showMinMax: true,
      showValueBubble: true,
    },
  },
  ...createSizeExamples(),
  ...createVariantExamples(),
  {
    name: "StepsAndMarks",
    title: "Steps and marks",
    description:
      "Explicit marks communicate meaningful stops while step controls value snapping.",
    props: [
      { name: "step", value: "5" },
      { name: "marks", value: "[0, 25, 50, 75, 100]" },
      { name: "showMarkLabels", value: "true" },
    ],
    kind: "slider",
    args: {
      defaultValue: 40,
      marks: sharedMarks,
      showMarkLabels: true,
      showValueBubble: true,
      step: 5,
    },
  },
  {
    name: "RangeStepsAndMarks",
    title: "Range with marks",
    description:
      "The active segment and active marks remain between the selected values.",
    props: [
      { name: "step", value: "5" },
      { name: "minStepsBetweenThumbs", value: "2" },
      { name: "marks", value: "[0, 25, 50, 75, 100]" },
    ],
    kind: "range",
    args: {
      defaultValue: [25, 75],
      marks: sharedMarks,
      minStepsBetweenThumbs: 2,
      showMarkLabels: true,
      showValueBubble: true,
      step: 5,
    },
  },
  {
    name: "Disabled",
    title: "Disabled slider",
    description: "Disabled controls use neutral tokens and block interaction.",
    props: [
      { name: "disabled", value: "true" },
      { name: "defaultValue", value: "60" },
    ],
    kind: "slider",
    args: {
      defaultValue: 60,
      disabled: true,
      showMinMax: true,
      showValueBubble: true,
    },
  },
  {
    name: "Controlled",
    title: "Controlled slider",
    description:
      "Use controlled state when a form or application model owns the value.",
    props: [
      { name: "value", value: "state" },
      { name: "onValueChange", value: "setState" },
    ],
    kind: "slider",
    controlled: true,
    args: {
      showValueBubble: true,
      step: 5,
    },
  },
  {
    name: "ControlledRange",
    title: "Controlled range slider",
    description:
      "Controlled range values stay ordered while either thumb changes.",
    props: [
      { name: "value", value: "state" },
      { name: "onValueChange", value: "setState" },
    ],
    kind: "range",
    controlled: true,
    args: {
      showValueBubble: true,
      step: 5,
    },
  },
] satisfies SliderExampleDefinition[];

interface SliderExampleProps {
  example: SliderExampleDefinition;
  elevated?: boolean;
}

export const SliderExample = memo(function SliderExample({
  example,
  elevated,
}: SliderExampleProps) {
  const space = useSpace();

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <View width="100%" paddingHorizontal={space.sm} paddingTop={space.xs}>
        {example.kind === "range" ? (
          example.controlled ? (
            <ControlledRangeSlider {...example.args} />
          ) : (
            <RangeSlider {...example.args} />
          )
        ) : example.controlled ? (
          <ControlledSlider {...example.args} />
        ) : (
          <Slider {...example.args} />
        )}
      </View>
    </StoryExample>
  );
});

function ControlledSlider(props: ComponentProps<typeof Slider>) {
  const [value, setValue] = useState(60);

  return <Slider {...props} value={value} onValueChange={setValue} />;
}

function ControlledRangeSlider(props: ComponentProps<typeof RangeSlider>) {
  const [value, setValue] = useState<SliderValue>([25, 75]);

  return <RangeSlider {...props} value={value} onValueChange={setValue} />;
}

function createSizeExamples(): SliderExampleDefinition[] {
  const sizes = ["small", "medium", "large"] as const;

  return sizes.map((size) => ({
    name: `${size[0]?.toUpperCase()}${size.slice(1)}`,
    title: `${size} slider`,
    description: `The ${size} size adjusts track, thumb, marks, and touch area together.`,
    props: [{ name: "size", value: size }],
    kind: "slider",
    args: {
      defaultValue: 60,
      showMinMax: true,
      showValueBubble: true,
      size,
    },
  }));
}

function createVariantExamples(): SliderExampleDefinition[] {
  const variants = ["filled", "outlined", "soft"] as const;

  return variants.map((variant) => ({
    name: `${variant[0]?.toUpperCase()}${variant.slice(1)}`,
    title: `${variant} slider`,
    description: `The ${variant} treatment uses the slider-specific ${variant} theme tokens.`,
    props: [{ name: "variant", value: variant }],
    kind: "slider",
    args: {
      defaultValue: 60,
      showValueBubble: true,
      variant,
    },
  }));
}
