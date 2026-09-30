import type { ComponentProps } from "react";
import { memo, useState } from "react";

import { Switch } from "@impulse-ui-native/switch";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";

interface SwitchExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Switch>;
  controlled?: boolean;
}

export const SwitchExampleDefinitions = [
  {
    name: "Off",
    title: "Off switch",
    description:
      "An off switch places its thumb at the logical start of a neutral track.",
    props: [
      {
        name: "defaultChecked",
        value: "false",
        description: "Starts the uncontrolled switch off.",
      },
    ],
    args: {
      defaultChecked: false,
    },
  },
  {
    name: "On",
    title: "On switch",
    description:
      "An on switch moves its thumb to the logical end and applies the selected variant colors.",
    props: [
      {
        name: "defaultChecked",
        value: "true",
        description: "Starts the uncontrolled switch on.",
      },
    ],
    args: {
      defaultChecked: true,
    },
  },
  ...createVariantExamples(),
  ...createSizeExamples(),
  {
    name: "Disabled",
    title: "Disabled switch",
    description: "Disabled switches remain legible but block presses.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Prevents interaction and applies disabled colors.",
      },
    ],
    args: {
      defaultChecked: true,
      disabled: true,
    },
  },
  {
    name: "Loading",
    title: "Loading switch",
    description:
      "Loading switches show progress in the thumb and block duplicate presses.",
    props: [
      {
        name: "loading",
        value: "true",
        description: "Shows pending state and prevents interaction.",
      },
    ],
    args: {
      defaultChecked: true,
      loading: true,
    },
  },
  {
    name: "Controlled",
    title: "Controlled switch",
    description:
      "Use controlled state when a form, mutation, or application model owns the value.",
    props: [
      {
        name: "checked",
        value: "state",
        description: "Receives the current on/off state.",
      },
      {
        name: "onCheckedChange",
        value: "setState",
        description: "Receives the next state after a press.",
      },
    ],
    args: {},
    controlled: true,
  },
] satisfies SwitchExampleDefinition[];

interface SwitchExampleProps {
  example: SwitchExampleDefinition;
  elevated?: boolean;
}

export const SwitchExample = memo(function SwitchExample({
  example,
  elevated,
}: SwitchExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      {example.controlled ? (
        <ControlledSwitch {...example.args} />
      ) : (
        <Switch {...example.args} />
      )}
    </StoryExample>
  );
});

function ControlledSwitch(props: ComponentProps<typeof Switch>) {
  const [checked, setChecked] = useState(false);

  return <Switch {...props} checked={checked} onCheckedChange={setChecked} />;
}

function createVariantExamples(): SwitchExampleDefinition[] {
  const variants = ["filled", "outlined", "soft"] as const;

  return variants.map((variant) => ({
    name: `${variant[0]?.toUpperCase()}${variant.slice(1)}`,
    title: `${variant} switch`,
    description: `The ${variant} variant applies the shared ${variant} visual emphasis while on.`,
    props: [
      {
        name: "variant",
        value: variant,
        description: `Uses the ${variant} on-state treatment.`,
      },
      {
        name: "defaultChecked",
        value: "true",
        description: "Shows the on-state treatment.",
      },
    ],
    args: {
      defaultChecked: true,
      variant,
    },
  }));
}

function createSizeExamples(): SwitchExampleDefinition[] {
  const sizes = ["small", "medium", "large"] as const;

  return sizes.map((size) => ({
    name: `${size[0]?.toUpperCase()}${size.slice(1)}`,
    title: `${size} switch`,
    description: `The ${size} size adjusts the track, thumb, loading indicator, and hit target together.`,
    props: [
      {
        name: "size",
        value: size,
        description: `Uses the shared ${size} component size.`,
      },
    ],
    args: {
      defaultChecked: true,
      size,
    },
  }));
}
