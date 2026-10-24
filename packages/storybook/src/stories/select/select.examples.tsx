import type { ComponentProps, ReactNode } from "react";
import { memo } from "react";

import {
  MultiSelect,
  PrimitiveValue,
  Select,
  SelectOption,
} from "@impulse-ui-native/select";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface SelectExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args?: Partial<SelectStoryArgs>;
  renderPreview: (args: SelectStoryArgs) => ReactNode;
}

type SelectStoryArgs = Pick<
  ComponentProps<typeof Select>,
  | "size"
  | "variant"
  | "tone"
  | "disabled"
  | "loading"
  | "error"
  | "label"
  | "placeholder"
> & {
  options: SelectOption<PrimitiveValue>[];
};

export const SelectStoryOptions = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Operations", value: "operations" },
  { label: "Archived", value: "archived", disabled: true },
];

export const SelectExampleDefinitions = [
  {
    name: "Soft primary",
    title: "Soft primary field",
    description:
      "A subtle brand surface with readable text. Error overrides the palette; disabled fields use neutral styling.",
    props: [
      {
        name: "variant",
        value: "soft",
        description: "Uses a tinted surface without a resting border.",
      },
      {
        name: "tone",
        value: "primary",
        description: "Uses the primary theme palette.",
      },
    ],
    args: {
      options: SelectStoryOptions,
      label: "Soft primary",
      placeholder: "Choose a value",
      variant: "soft",
      tone: "primary",
    },
    renderPreview: (args) => <Select {...args} />,
  },
  {
    name: "Filled secondary",
    title: "Filled secondary field",
    description:
      "A secondary theme fill with its paired foreground. The secondary palette can be light or dark depending on the theme.",
    props: [
      {
        name: "variant",
        value: "filled",
        description: "Uses the tone's fill and contrast colors.",
      },
      {
        name: "tone",
        value: "secondary",
        description: "Uses the secondary theme palette.",
      },
    ],
    args: {
      options: SelectStoryOptions,
      label: "Filled secondary",
      placeholder: "Choose a value",
      variant: "filled",
      tone: "secondary",
    },
    renderPreview: (args) => <Select {...args} />,
  },

  {
    name: "Single",
    title: "Single select",
    description:
      "Use Select when the user should choose one primitive value from a known list.",
    props: [
      {
        name: "options",
        value: "SelectOption[]",
        description: "Provides labels, values, and optional disabled states.",
      },
      {
        name: "defaultValue",
        value: "design",
        description: "Sets the initial value for uncontrolled usage.",
      },
    ],
    renderPreview: (args) => (
      <Select<PrimitiveValue>
        label="Department"
        defaultValue="design"
        placeholder="Choose a department"
        {...args}
      />
    ),
  },
  {
    name: "Multiple",
    title: "Multi-select",
    description:
      "Use MultiSelect when several values can be chosen from the same options.",
    props: [
      {
        name: "defaultValue",
        value: '["design", "engineering"]',
        description: "Sets the initial selected-value array.",
      },
    ],
    renderPreview: (args) => (
      <MultiSelect<PrimitiveValue>
        label="Teams"
        defaultValue={["design", "engineering"]}
        placeholder="Choose teams"
        {...args}
      />
    ),
  },
  {
    name: "Loading",
    title: "Loading select",
    description:
      "Use the loading state while options are being prepared or refreshed.",
    props: [
      {
        name: "loading",
        value: "true",
        description: "Replaces the value area with a progress indicator.",
      },
    ],
    args: {
      loading: true,
    },
    renderPreview: (args) => (
      <Select<PrimitiveValue>
        label="Department"
        placeholder="Loading departments"
        {...args}
      />
    ),
  },
] satisfies SelectExampleDefinition[];

interface SelectExampleProps {
  example: SelectExampleDefinition;
  args?: SelectStoryArgs;
  elevated?: boolean;
}

export const SelectExample = memo(function SelectExample({
  example,
  args,
  elevated,
}: SelectExampleProps) {
  const resolvedArgs: SelectStoryArgs = {
    options: SelectStoryOptions,
    ...example.args,
    ...args,
  };

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      {example.renderPreview(resolvedArgs)}
    </StoryExample>
  );
});
