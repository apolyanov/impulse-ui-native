import type { ComponentProps } from "react";
import { memo } from "react";

import { Tag } from "@impulse-ui-native/toolkit";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface TagExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Tag>;
}

export const TagExampleDefinitions = [
  {
    name: "Filled",
    title: "Filled tag",
    description:
      "Use filled tags for labels that need stronger visual emphasis, such as selected filters, active states, or highlighted metadata.",
    props: [
      {
        name: "variant",
        value: "filled",
        description: "Uses the highest-emphasis tag style.",
      },
      {
        name: "color",
        value: "primary",
        description: "Applies the primary semantic color.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
    ],
    args: {
      label: "Filled",
      variant: "filled",
      color: "primary",
      size: "medium",
    },
  },
  {
    name: "Outlined",
    title: "Outlined tag",
    description:
      "Use outlined tags for secondary labels that need a clear boundary without a filled background.",
    props: [
      {
        name: "variant",
        value: "outlined",
        description: "Adds a visible border while keeping the surface subtle.",
      },
      {
        name: "color",
        value: "primary",
        description: "Applies the primary semantic color.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
    ],
    args: {
      label: "Outlined",
      variant: "outlined",
      color: "primary",
      size: "medium",
    },
  },
  {
    name: "Soft",
    title: "Soft tag",
    description:
      "Use soft tags for supportive metadata that should be noticeable without dominating the layout.",
    props: [
      {
        name: "variant",
        value: "soft",
        description: "Uses a softer background for medium visual emphasis.",
      },
      {
        name: "color",
        value: "primary",
        description: "Applies the primary semantic color.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
    ],
    args: {
      label: "Soft",
      variant: "soft",
      color: "primary",
      size: "medium",
    },
  },
  {
    name: "Plain",
    title: "Plain tag",
    description:
      "Use plain tags for the lowest-emphasis labels when the surrounding layout already provides enough structure.",
    props: [
      {
        name: "variant",
        value: "plain",
        description: "Removes most visual styling and behaves like a lightweight label.",
      },
      {
        name: "color",
        value: "primary",
        description: "Applies the primary semantic color.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
    ],
    args: {
      label: "Plain",
      variant: "plain",
      color: "primary",
      size: "medium",
    },
  },
  {
    name: "Small",
    title: "Small tag",
    description:
      "Use small tags in dense layouts, compact metadata rows, filters, and inline supporting information.",
    props: [
      {
        name: "size",
        value: "small",
        description: "Reduces the tag height, padding, and text size.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Uses the highest-emphasis tag style.",
      },
      {
        name: "color",
        value: "primary",
        description: "Applies the primary semantic color.",
      },
    ],
    args: {
      label: "Small",
      size: "small",
      variant: "filled",
      color: "primary",
    },
  },
  {
    name: "Medium",
    title: "Medium tag",
    description:
      "Use medium tags as the default size for most labels and metadata across the interface.",
    props: [
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Uses the highest-emphasis tag style.",
      },
      {
        name: "color",
        value: "primary",
        description: "Applies the primary semantic color.",
      },
    ],
    args: {
      label: "Medium",
      size: "medium",
      variant: "filled",
      color: "primary",
    },
  },
  {
    name: "Large",
    title: "Large tag",
    description:
      "Use large tags when labels need stronger touch presence or more visibility in spacious layouts.",
    props: [
      {
        name: "size",
        value: "large",
        description: "Increases the tag height, padding, and text size.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Uses the highest-emphasis tag style.",
      },
      {
        name: "color",
        value: "primary",
        description: "Applies the primary semantic color.",
      },
    ],
    args: {
      label: "Large",
      size: "large",
      variant: "filled",
      color: "primary",
    },
  },
  {
    name: "Secondary",
    title: "Secondary tag",
    description:
      "Use secondary tags for neutral metadata, supportive categories, or labels that should not compete with primary actions.",
    props: [
      {
        name: "color",
        value: "secondary",
        description: "Applies the secondary semantic color.",
      },
      {
        name: "variant",
        value: "soft",
        description: "Uses a softer background for medium visual emphasis.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
    ],
    args: {
      label: "Secondary",
      color: "secondary",
      variant: "soft",
      size: "medium",
    },
  },
  {
    name: "Error",
    title: "Error tag",
    description:
      "Use error tags for failed states, destructive categories, invalid information, or urgent negative feedback.",
    props: [
      {
        name: "color",
        value: "error",
        description: "Applies the error semantic color.",
      },
      {
        name: "variant",
        value: "soft",
        description: "Keeps the warning visible without using the strongest visual emphasis.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
    ],
    args: {
      label: "Error",
      color: "error",
      variant: "soft",
      size: "medium",
    },
  },
  {
    name: "Warning",
    title: "Warning tag",
    description:
      "Use warning tags for attention states, pending review, unusual values, or information that needs caution.",
    props: [
      {
        name: "color",
        value: "warning",
        description: "Applies the warning semantic color.",
      },
      {
        name: "variant",
        value: "soft",
        description: "Keeps the tag noticeable without making it dominant.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
    ],
    args: {
      label: "Warning",
      color: "warning",
      variant: "soft",
      size: "medium",
    },
  },
  {
    name: "Success",
    title: "Success tag",
    description:
      "Use success tags for completed states, valid information, positive status, or healthy values.",
    props: [
      {
        name: "color",
        value: "success",
        description: "Applies the success semantic color.",
      },
      {
        name: "variant",
        value: "soft",
        description: "Uses a balanced status style for positive information.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
    ],
    args: {
      label: "Success",
      color: "success",
      variant: "soft",
      size: "medium",
    },
  },
  {
    name: "Info",
    title: "Info tag",
    description:
      "Use info tags for informational states, hints, neutral system messages, or contextual metadata.",
    props: [
      {
        name: "color",
        value: "info",
        description: "Applies the info semantic color.",
      },
      {
        name: "variant",
        value: "soft",
        description: "Uses a balanced informational style.",
      },
      {
        name: "size",
        value: "medium",
        description: "Uses the default tag height, padding, and text size.",
      },
    ],
    args: {
      label: "Info",
      color: "info",
      variant: "soft",
      size: "medium",
    },
  },
  {
    name: "Closable",
    title: "Closable tag",
    description:
      "Use closable tags for removable filters, selected categories, or temporary labels the user can dismiss.",
    props: [
      {
        name: "closable",
        value: "true",
        description: "Allows the tag to display a close icon when onClose is provided.",
      },
      {
        name: "onClose",
        value: "() => void",
        description: "Called when the close icon is pressed.",
      },
      {
        name: "variant",
        value: "soft",
        description: "Uses a balanced removable-label style.",
      },
    ],
    args: {
      label: "Closable",
      closable: true,
      onClose: function onClose() {},
      variant: "soft",
      color: "primary",
      size: "medium",
    },
  },
  {
    name: "Pressable",
    title: "Pressable tag",
    description:
      "Use pressable tags for interactive filters, selectable categories, or compact choices.",
    props: [
      {
        name: "onPress",
        value: "() => void",
        description: "Makes the tag interactive and renders it with Pressable.",
      },
      {
        name: "variant",
        value: "outlined",
        description: "Gives the interactive label a clear boundary.",
      },
      {
        name: "color",
        value: "primary",
        description: "Applies the primary semantic color.",
      },
    ],
    args: {
      label: "Pressable",
      onPress: function onPress() {},
      variant: "outlined",
      color: "primary",
      size: "medium",
    },
  },
  {
    name: "Disabled",
    title: "Disabled tag",
    description:
      "Use disabled tags when a label or filter option is visible but temporarily unavailable.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Prevents interaction and applies disabled styling.",
      },
      {
        name: "variant",
        value: "filled",
        description: "Keeps the tag in the filled visual style.",
      },
      {
        name: "color",
        value: "primary",
        description: "Applies the primary semantic color.",
      },
    ],
    args: {
      label: "Disabled",
      disabled: true,
      variant: "filled",
      color: "primary",
      size: "medium",
    },
  },
] satisfies TagExampleDefinition[];

interface TagExampleProps {
  example: TagExampleDefinition;
  elevated?: boolean;
}

export const TagExample = memo(function TagExample({
  example,
  elevated,
}: TagExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <Tag {...example.args} />
    </StoryExample>
  );
});
