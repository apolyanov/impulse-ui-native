import type { ComponentProps } from "react";
import { memo, useState } from "react";

import { Radio } from "@impulse-ui-native/radio";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";

interface RadioExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Radio>;
  controlled?: boolean;
}

export const RadioExampleDefinitions = [
  {
    name: "Unchecked",
    title: "Unchecked radio",
    description:
      "An unchecked radio uses a visible neutral circular border without an indicator.",
    props: [
      {
        name: "defaultChecked",
        value: "false",
        description: "Starts the uncontrolled radio unchecked.",
      },
    ],
    args: {
      accessibilityLabel: "Unchecked example",
      defaultChecked: false,
    },
  },
  {
    name: "Checked",
    title: "Checked radio",
    description:
      "A checked radio displays a circular indicator using the selected variant colors.",
    props: [
      {
        name: "defaultChecked",
        value: "true",
        description: "Starts the uncontrolled radio checked.",
      },
    ],
    args: {
      accessibilityLabel: "Checked example",
      defaultChecked: true,
    },
  },
  ...createVariantExamples(),
  ...createSizeExamples(),
  {
    name: "Disabled",
    title: "Disabled radio",
    description:
      "Disabled radios remain visible but block selection and expose their disabled state to assistive technology.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Prevents press interaction and applies disabled colors.",
      },
      {
        name: "defaultChecked",
        value: "true",
        description: "Shows the disabled selected treatment.",
      },
    ],
    args: {
      accessibilityLabel: "Disabled example",
      defaultChecked: true,
      disabled: true,
    },
  },
  {
    name: "Controlled",
    title: "Controlled radio",
    description:
      "Control the radio when selection belongs to application or form state.",
    props: [
      {
        name: "checked",
        value: "state",
        description: "Receives the current selected state.",
      },
      {
        name: "onCheckedChange",
        value: "setState",
        description: "Receives true when the radio is selected.",
      },
    ],
    args: {
      accessibilityLabel: "Controlled example",
    },
    controlled: true,
  },
] satisfies RadioExampleDefinition[];

interface RadioExampleProps {
  example: RadioExampleDefinition;
  elevated?: boolean;
}

export const RadioExample = memo(function RadioExample({
  example,
  elevated,
}: RadioExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      {example.controlled ? (
        <ControlledRadio {...example.args} />
      ) : (
        <Radio {...example.args} />
      )}
    </StoryExample>
  );
});

function ControlledRadio(props: ComponentProps<typeof Radio>) {
  const [checked, setChecked] = useState(false);

  return <Radio {...props} checked={checked} onCheckedChange={setChecked} />;
}

function createVariantExamples(): RadioExampleDefinition[] {
  const variants = ["filled", "outlined", "soft", "ghost", "plain"] as const;

  return variants.map((variant) => ({
    name: `${variant[0]?.toUpperCase()}${variant.slice(1)}`,
    title: `${variant} radio`,
    description: `The ${variant} variant applies the shared ${variant} visual emphasis when selected.`,
    props: [
      {
        name: "variant",
        value: variant,
        description: `Uses the ${variant} selected-state treatment.`,
      },
      {
        name: "defaultChecked",
        value: "true",
        description: "Shows the selected-state treatment.",
      },
    ],
    args: {
      accessibilityLabel: `${variant} example`,
      defaultChecked: true,
      variant,
    },
  }));
}

function createSizeExamples(): RadioExampleDefinition[] {
  const sizes = ["small", "medium", "large"] as const;

  return sizes.map((size) => ({
    name: `${size[0]?.toUpperCase()}${size.slice(1)}`,
    title: `${size} radio`,
    description: `The ${size} size adjusts the radio, indicator, and hit target together.`,
    props: [
      {
        name: "size",
        value: size,
        description: `Uses the shared ${size} component size.`,
      },
    ],
    args: {
      accessibilityLabel: `${size} example`,
      defaultChecked: true,
      size,
    },
  }));
}
