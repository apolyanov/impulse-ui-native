import type { ComponentProps } from "react";
import { memo } from "react";

import { IconButton, SparkleIcon } from "@impulse-ui-native/toolkit";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface IconButtonExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof IconButton>;
}

export const IconButtonExampleDefinitions = [
  {
    name: "Filled",
    title: "Filled icon button",
    description:
      "Use filled icon buttons for compact primary actions that need strong visual emphasis.",
    props: [
      {
        name: "variant",
        value: "filled",
        description: "Uses the highest-emphasis icon button style.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default icon button size.",
      },
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Renders the icon inside the button.",
      },
    ],
    args: {
      variant: "filled",
      size: "medium",
      icon: SparkleIcon,
    },
  },
  {
    name: "Outlined",
    title: "Outlined icon button",
    description:
      "Use outlined icon buttons for secondary actions that need a clear visible boundary.",
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
        description: "Uses the default icon button size.",
      },
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Renders the icon inside the button.",
      },
    ],
    args: {
      variant: "outlined",
      size: "medium",
      icon: SparkleIcon,
    },
  },
  {
    name: "Soft",
    title: "Soft icon button",
    description:
      "Use soft icon buttons for supportive compact actions that need emphasis without dominating the layout.",
    props: [
      {
        name: "variant",
        value: "soft",
        description: "Uses a softer background for medium visual emphasis.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default icon button size.",
      },
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Renders the icon inside the button.",
      },
    ],
    args: {
      variant: "soft",
      size: "medium",
      icon: SparkleIcon,
    },
  },
  {
    name: "Ghost",
    title: "Ghost icon button",
    description:
      "Use ghost icon buttons for low-emphasis icon actions inside headers, cards, lists, and compact layouts.",
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
        description: "Uses the default icon button size.",
      },
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Renders the icon inside the button.",
      },
    ],
    args: {
      variant: "ghost",
      size: "medium",
      icon: SparkleIcon,
    },
  },
  {
    name: "Plain",
    title: "Plain icon button",
    description:
      "Use plain icon buttons for the lowest-emphasis icon actions, usually in dense or utility-focused layouts.",
    props: [
      {
        name: "variant",
        value: "plain",
        description:
          "Removes most visual styling and behaves like a minimal icon action.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default icon button size.",
      },
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Renders the icon inside the button.",
      },
    ],
    args: {
      variant: "plain",
      size: "medium",
      icon: SparkleIcon,
    },
  },
  {
    name: "Small",
    title: "Small icon button",
    description:
      "Use small icon buttons in compact layouts, dense toolbars, filters, and secondary action groups.",
    props: [
      {
        name: "size",
        value: "small",
        description: "Reduces the icon button size and padding.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Uses the primary filled style.",
      },
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Renders the icon inside the button.",
      },
    ],
    args: {
      size: "small",
      variant: "filled",
      icon: SparkleIcon,
    },
  },
  {
    name: "Medium",
    title: "Medium icon button",
    description:
      "Use medium icon buttons as the default size for most compact interface actions.",
    props: [
      {
        name: "size",
        value: "medium",
        description: "Uses the default icon button size and padding.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Uses the primary filled style.",
      },
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Renders the icon inside the button.",
      },
    ],
    args: {
      size: "medium",
      variant: "filled",
      icon: SparkleIcon,
    },
  },
  {
    name: "Large",
    title: "Large icon button",
    description:
      "Use large icon buttons for prominent touch-first actions, important utilities, and spacious layouts.",
    props: [
      {
        name: "size",
        value: "large",
        description: "Increases the icon button size and padding.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Uses the primary filled style.",
      },
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Renders the icon inside the button.",
      },
    ],
    args: {
      size: "large",
      variant: "filled",
      icon: SparkleIcon,
    },
  },
  {
    name: "Disabled",
    title: "Disabled icon button",
    description:
      "Use disabled icon buttons when an icon-only action is temporarily unavailable.",
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
        description: "Uses the default icon button size.",
      },
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Renders the icon inside the button.",
      },
    ],
    args: {
      disabled: true,
      variant: "filled",
      size: "medium",
      icon: SparkleIcon,
    },
  },
] satisfies IconButtonExampleDefinition[];

interface IconButtonExampleProps {
  example: IconButtonExampleDefinition;
  elevated?: boolean;
}

export const IconButtonExample = memo(function IconButtonExample({
  example,
  elevated,
}: IconButtonExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <IconButton {...example.args} />
    </StoryExample>
  );
});
