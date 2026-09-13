import type { ComponentProps } from "react";
import { memo } from "react";

import { Input } from "@impulse-ui-native/input";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface InputExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Input>;
}

export const InputExampleDefinitions = [
  {
    name: "Default",
    title: "Default input",
    description:
      "Use Input for a labeled text value with the shared control appearance.",
    props: [
      {
        name: "label",
        value: "Email",
        description: "Labels the value expected from the user.",
      },
      {
        name: "placeholder",
        value: "you@example.com",
        description: "Shows an example while the field is empty.",
      },
    ],
    args: {
      label: "Email",
      placeholder: "you@example.com",
      keyboardType: "email-address",
      autoCapitalize: "none",
    },
  },
  {
    name: "Error",
    title: "Input with an error",
    description:
      "Provide an error message when validation fails so the control can explain the required correction.",
    props: [
      {
        name: "error",
        value: "Enter a valid email address.",
        description: "Displays validation feedback below the control.",
      },
    ],
    args: {
      label: "Email",
      defaultValue: "invalid-address",
      error: "Enter a valid email address.",
    },
  },
  {
    name: "Password",
    title: "Secure input",
    description:
      "Secure text inputs include a suffix action for toggling password visibility.",
    props: [
      {
        name: "secureTextEntry",
        value: "true",
        description: "Masks the value and adds the visibility action.",
      },
    ],
    args: {
      label: "Password",
      defaultValue: "correct horse battery staple",
      secureTextEntry: true,
    },
  },
  {
    name: "Disabled",
    title: "Disabled input",
    description: "Use the disabled state when a value cannot be edited.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Prevents editing and applies disabled styling.",
      },
    ],
    args: {
      label: "Account ID",
      defaultValue: "USR-1042",
      disabled: true,
    },
  },
] satisfies InputExampleDefinition[];

interface InputExampleProps {
  example: InputExampleDefinition;
  elevated?: boolean;
}

export const InputExample = memo(function InputExample({
  example,
  elevated,
}: InputExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <Input {...example.args} />
    </StoryExample>
  );
});
