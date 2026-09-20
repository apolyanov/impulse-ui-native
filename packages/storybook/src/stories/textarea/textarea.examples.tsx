import type { ComponentProps } from "react";
import { memo, useState } from "react";

import { Textarea } from "@impulse-ui-native/input";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface TextareaExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Textarea>;
}

export const TextareaExampleDefinitions = [
  {
    name: "Default",
    title: "Default textarea",
    description:
      "Use Textarea for longer free-form values that benefit from a persistent multiline editing area.",
    props: [
      {
        name: "label",
        value: "Notes",
        description: "Labels the value expected from the user.",
      },
      {
        name: "minRows",
        value: "3",
        description: "Sets the initial and minimum visible row count.",
      },
    ],
    args: {
      label: "Notes",
      placeholder: "Add any relevant details",
      minRows: 3,
    },
  },
  {
    name: "Character count",
    title: "Textarea with character count",
    description:
      "Show a character count when users need to understand how much space remains within a limit.",
    props: [
      {
        name: "showCharacterCount",
        value: "true",
        description: "Displays the current character count below the field.",
      },
      {
        name: "maxLength",
        value: "120",
        description: "Enforces and displays the maximum character count.",
      },
    ],
    args: {
      defaultValue: "A concise summary of the project goals.",
      label: "Summary",
      maxLength: 120,
      showCharacterCount: true,
    },
  },
  {
    name: "Validation",
    title: "Textarea with validation feedback",
    description:
      "Pass an error message when validation fails so the field can expose invalid semantics and explain the correction.",
    props: [
      {
        name: "error",
        value: "Include at least 20 characters.",
        description: "Displays feedback and marks the textarea as invalid.",
      },
    ],
    args: {
      defaultValue: "Too short",
      error: "Include at least 20 characters.",
      label: "Description",
      maxLength: 200,
      showCharacterCount: true,
    },
  },
  {
    name: "Auto grow",
    title: "Auto-growing textarea",
    description:
      "Enable auto-grow when the field should expand with its content while retaining a bounded layout.",
    props: [
      {
        name: "autoGrow",
        value: "true",
        description: "Grows the field as its content height changes.",
      },
      {
        name: "minRows",
        value: "2",
        description: "Keeps at least two rows visible.",
      },
      {
        name: "maxRows",
        value: "5",
        description: "Stops growing after five rows and enables scrolling.",
      },
    ],
    args: {
      autoGrow: true,
      defaultValue:
        "This textarea starts with multiple lines.\nAdd more text to watch it grow.\nIt becomes scrollable at five rows.",
      label: "Release notes",
      maxRows: 5,
      minRows: 2,
    },
  },
  {
    name: "Controlled",
    title: "Controlled textarea",
    description:
      "Control the textarea value when application state needs to validate, persist, or transform every edit.",
    props: [
      {
        name: "value",
        value: "React state",
        description: "Keeps the displayed value synchronized with the owner.",
      },
      {
        name: "onChangeText",
        value: "setValue",
        description: "Updates the controlled value after each edit.",
      },
    ],
    args: {
      autoGrow: true,
      label: "Message",
      maxLength: 160,
      maxRows: 6,
      minRows: 3,
      showCharacterCount: true,
    },
  },
  {
    name: "Disabled",
    title: "Disabled textarea",
    description:
      "Use the disabled state when a multiline value is visible but cannot be edited.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Prevents editing and exposes disabled semantics.",
      },
    ],
    args: {
      defaultValue: "This value is currently read-only.",
      disabled: true,
      label: "Internal notes",
      showCharacterCount: true,
    },
  },
] satisfies TextareaExampleDefinition[];

interface TextareaExampleProps {
  example: TextareaExampleDefinition;
  elevated?: boolean;
}

export const TextareaExample = memo(function TextareaExample({
  example,
  elevated,
}: TextareaExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      {example.name === "Controlled" ? (
        <ControlledTextarea {...example.args} />
      ) : (
        <Textarea {...example.args} />
      )}
    </StoryExample>
  );
});

const ControlledTextarea = memo(function ControlledTextarea(
  props: ComponentProps<typeof Textarea>,
) {
  const [value, setValue] = useState("A value managed by React state.");

  return <Textarea {...props} value={value} onChangeText={setValue} />;
});
