import type { ComponentProps } from "react";
import { memo } from "react";

import { Button } from "@impulse-ui-native/toolkit";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface ButtonExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Button>;
}

export const ButtonExampleDefinitions = [
  {
    name: "Filled",
    title: "Filled button",
    description:
      "Use filled buttons for the primary action in a section or screen. They provide the highest visual emphasis.",
    props: [
      {
        name: "variant",
        value: "filled",
        description: "Uses the highest-emphasis button style.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default button height, padding, and text size.",
      },
    ],
    args: {
      variant: "filled",
      size: "medium",
      children: "Filled Button",
    },
  },
  {
    name: "Outlined",
    title: "Outlined button",
    description:
      "Use outlined buttons for secondary actions that still need a clear boundary.",
    props: [
      {
        name: "variant",
        value: "outlined",
        description:
          "Adds a visible border while keeping the background subtle.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default button height, padding, and text size.",
      },
    ],
    args: {
      variant: "outlined",
      size: "medium",
      children: "Outlined Button",
    },
  },
  {
    name: "Soft",
    title: "Soft button",
    description:
      "Use soft buttons for supportive actions that need emphasis without dominating the layout.",
    props: [
      {
        name: "variant",
        value: "soft",
        description: "Uses a softer background for medium visual emphasis.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default button height, padding, and text size.",
      },
    ],
    args: {
      variant: "soft",
      size: "medium",
      children: "Soft Button",
    },
  },
  {
    name: "Ghost",
    title: "Ghost button",
    description:
      "Use ghost buttons for low-emphasis actions inside cards, lists, headers, or compact layouts.",
    props: [
      {
        name: "variant",
        value: "ghost",
        description:
          "Keeps the button visually light while preserving interaction affordance.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default button height, padding, and text size.",
      },
    ],
    args: {
      variant: "ghost",
      size: "medium",
      children: "Ghost Button",
    },
  },
  {
    name: "Plain",
    title: "Plain button",
    description:
      "Use plain buttons for the lowest-emphasis actions, usually text-like interactions.",
    props: [
      {
        name: "variant",
        value: "plain",
        description:
          "Removes most visual styling and behaves like a text action.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default button height, padding, and text size.",
      },
    ],
    args: {
      variant: "plain",
      size: "medium",
      children: "Plain Button",
    },
  },
  {
    name: "Small",
    title: "Small button",
    description:
      "Use small buttons in compact layouts, dense forms, toolbars, filters, and secondary action groups.",
    props: [
      {
        name: "size",
        value: "small",
        description: "Reduces the button height, padding, and text size.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Uses the primary filled style.",
      },
    ],
    args: {
      size: "small",
      variant: "filled",
      children: "Small Button",
    },
  },
  {
    name: "Medium",
    title: "Medium button",
    description:
      "Use medium buttons as the default size for most interface actions.",
    props: [
      {
        name: "size",
        value: "medium",
        description: "Uses the default button height, padding, and text size.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Uses the primary filled style.",
      },
    ],
    args: {
      size: "medium",
      variant: "filled",
      children: "Medium Button",
    },
  },
  {
    name: "Large",
    title: "Large button",
    description:
      "Use large buttons for prominent actions, touch-first layouts, onboarding, and important flows.",
    props: [
      {
        name: "size",
        value: "large",
        description: "Increases the button height, padding, and text size.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Uses the primary filled style.",
      },
    ],
    args: {
      size: "large",
      variant: "filled",
      children: "Large Button",
    },
  },
  {
    name: "Disabled",
    title: "Disabled button",
    description:
      "Use disabled buttons when an action is temporarily unavailable. Prefer explaining why the action is unavailable near the button when the reason is not obvious.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Prevents interaction and applies disabled styling.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Keeps the button in the filled visual style.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default button height, padding, and text size.",
      },
    ],
    args: {
      disabled: true,
      variant: "filled",
      size: "medium",
      children: "Disabled Button",
    },
  },
  {
    name: "Loading",
    title: "Loading button",
    description:
      "Use the loading state after an action has started and the user should wait for completion. This prevents repeated submissions and communicates progress.",
    props: [
      {
        name: "loading",
        value: "true",
        description: "Replaces the button content with a loading indicator.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Keeps the button in the filled visual style.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default button height, padding, and text size.",
      },
    ],
    args: {
      loading: true,
      variant: "filled",
      size: "medium",
      children: "Loading Button",
    },
  },
] satisfies ButtonExampleDefinition[];

interface ButtonExampleProps {
  example: ButtonExampleDefinition;
  elevated?: boolean;
}

export const ButtonExample = memo(function ButtonExample({
  example,
  elevated,
}: ButtonExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <Button {...example.args} />
    </StoryExample>
  );
});
