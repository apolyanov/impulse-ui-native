import type { ComponentProps } from "react";
import { memo, useState } from "react";

import type { CheckboxState } from "@impulse-ui-native/checkbox";
import { Checkbox } from "@impulse-ui-native/checkbox";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";

interface CheckboxExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Checkbox>;
  controlled?: boolean;
}

export const CheckboxExampleDefinitions = [
  {
    name: "Unchecked",
    title: "Unchecked checkbox",
    description:
      "An unchecked checkbox uses a visible neutral border without an icon.",
    props: [
      {
        name: "defaultChecked",
        value: "false",
        description: "Starts the uncontrolled checkbox unchecked.",
      },
    ],
    args: {
      accessibilityLabel: "Unchecked example",
      defaultChecked: false,
    },
  },
  {
    name: "Checked",
    title: "Checked checkbox",
    description: "A checked checkbox uses CheckIcon to communicate selection.",
    props: [
      {
        name: "defaultChecked",
        value: "true",
        description: "Starts the uncontrolled checkbox checked.",
      },
    ],
    args: {
      accessibilityLabel: "Checked example",
      defaultChecked: true,
    },
  },
  {
    name: "Indeterminate",
    title: "Indeterminate checkbox",
    description:
      "Use the indeterminate state when a parent selection contains a mix of checked and unchecked items.",
    props: [
      {
        name: "defaultChecked",
        value: '"indeterminate"',
        description:
          "Starts the checkbox in its mixed state and renders MinusIcon.",
      },
    ],
    args: {
      accessibilityLabel: "Indeterminate example",
      defaultChecked: "indeterminate",
    },
  },
  ...createVariantExamples(),
  ...createSizeExamples(),
  {
    name: "Disabled",
    title: "Disabled checkbox",
    description:
      "Disabled checkboxes remain visible but block state changes and expose their disabled state to assistive technology.",
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
    title: "Controlled checkbox",
    description:
      "Control the checkbox when its state belongs to application or form state.",
    props: [
      {
        name: "checked",
        value: "state",
        description: "Receives the current checkbox state.",
      },
      {
        name: "onCheckedChange",
        value: "setState",
        description: "Receives the next checkbox state after a press.",
      },
    ],
    args: {
      accessibilityLabel: "Controlled example",
    },
    controlled: true,
  },
] satisfies CheckboxExampleDefinition[];

interface CheckboxExampleProps {
  example: CheckboxExampleDefinition;
  elevated?: boolean;
}

export const CheckboxExample = memo(function CheckboxExample({
  example,
  elevated,
}: CheckboxExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      {example.controlled ? (
        <ControlledCheckbox {...example.args} />
      ) : (
        <Checkbox {...example.args} />
      )}
    </StoryExample>
  );
});

function ControlledCheckbox(props: ComponentProps<typeof Checkbox>) {
  const [checked, setChecked] = useState<CheckboxState>(false);

  return <Checkbox {...props} checked={checked} onCheckedChange={setChecked} />;
}

function createVariantExamples(): CheckboxExampleDefinition[] {
  const variants = ["filled", "outlined", "soft", "ghost", "plain"] as const;

  return variants.map((variant) => ({
    name: `${variant[0]?.toUpperCase()}${variant.slice(1)}`,
    title: `${variant} checkbox`,
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

function createSizeExamples(): CheckboxExampleDefinition[] {
  const sizes = ["small", "medium", "large"] as const;

  return sizes.map((size) => ({
    name: `${size[0]?.toUpperCase()}${size.slice(1)}`,
    title: `${size} checkbox`,
    description: `The ${size} size adjusts the checkbox, icon, and hit target together.`,
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
