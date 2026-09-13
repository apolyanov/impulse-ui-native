import type { ReactNode } from "react";
import { memo } from "react";

import { MultiSelect, Select } from "@impulse-ui-native/select";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface SelectExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  preview: ReactNode;
}

const options = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Operations", value: "operations" },
  { label: "Archived", value: "archived", disabled: true },
];

export const SelectExampleDefinitions = [
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
    preview: (
      <Select
        label="Department"
        options={options}
        defaultValue="design"
        placeholder="Choose a department"
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
    preview: (
      <MultiSelect
        label="Teams"
        options={options}
        defaultValue={["design", "engineering"]}
        placeholder="Choose teams"
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
    preview: (
      <Select
        label="Department"
        options={options}
        loading
        placeholder="Loading departments"
      />
    ),
  },
] satisfies SelectExampleDefinition[];

interface SelectExampleProps {
  example: SelectExampleDefinition;
  elevated?: boolean;
}

export const SelectExample = memo(function SelectExample({
  example,
  elevated,
}: SelectExampleProps) {
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
