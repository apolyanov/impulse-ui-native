import type { ComponentProps } from "react";
import { memo } from "react";
import { StyleSheet } from "react-native";

import { Pressable, Typography, View } from "@impulse-ui-native/toolkit";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface PressableExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  label: string;
  inverted?: boolean;
  args: Omit<ComponentProps<typeof Pressable>, "children">;
}

interface PressablePreviewLabelProps {
  children: string;
  inverted?: boolean;
}

function PressablePreviewLabel({
  children,
  inverted,
}: PressablePreviewLabelProps) {
  return (
    <Typography.Master color={inverted ? "#FFFFFF" : undefined}>
      {children}
    </Typography.Master>
  );
}

const Styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  default: {
    backgroundColor: "#F4F4F5",
    borderColor: "#D4D4D8",
  },
  filled: {
    backgroundColor: "#18181B",
    borderColor: "#18181B",
  },
  outlined: {
    backgroundColor: "transparent",
    borderColor: "#A1A1AA",
  },
  disabled: {
    backgroundColor: "#E4E4E7",
    borderColor: "#D4D4D8",
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  wide: {
    width: "100%",
  },
});

export const PressableExampleDefinitions = [
  {
    name: "Default",
    title: "Default pressable",
    description:
      "Use Pressable as a low-level interaction primitive when building custom touchable components.",
    props: [
      {
        name: "children",
        value: "<Typography.Master />",
        description: "Renders the visible content inside the pressable area.",
      },
      {
        name: "style",
        value: "StyleProp<ViewStyle>",
        description: "Applies base visual styles to the pressable element.",
      },
    ],
    label: "Default Pressable",
    args: {
      style: [Styles.base, Styles.default],
    },
  },
  {
    name: "Filled",
    title: "Filled pressable",
    description:
      "Use a filled pressable when composing a custom control that needs strong visual emphasis.",
    props: [
      {
        name: "style",
        value: "[base, filled]",
        description:
          "Creates a more visually prominent custom pressable surface.",
      },
      {
        name: "children",
        value: "<Typography.Master />",
        description: "Provides the visible label for the custom control.",
      },
    ],
    label: "Filled Pressable",
    inverted: true,
    args: {
      style: [Styles.base, Styles.filled],
    },
  },
  {
    name: "Outlined",
    title: "Outlined pressable",
    description:
      "Use an outlined pressable when the interactive surface needs a clear boundary without a filled background.",
    props: [
      {
        name: "style",
        value: "[base, outlined]",
        description:
          "Adds a visible border while keeping the surface lightweight.",
      },
      {
        name: "children",
        value: "<Typography.Master />",
        description: "Renders the pressable content.",
      },
    ],
    label: "Outlined Pressable",
    args: {
      style: [Styles.base, Styles.outlined],
    },
  },
  {
    name: "PressedStyle",
    title: "Pressed style",
    description:
      "Use pressedStyle to apply additional styling only while the user is pressing the component.",
    props: [
      {
        name: "pressedStyle",
        value: "{ transform: [{ scale: 0.98 }] }",
        description:
          "Applies a temporary visual response during press interaction.",
      },
      {
        name: "style",
        value: "[base, default]",
        description: "Defines the resting visual state of the pressable.",
      },
    ],
    label: "Press and Hold",
    args: {
      style: [Styles.base, Styles.default],
      pressedStyle: Styles.pressed,
    },
  },
  {
    name: "Disabled",
    title: "Disabled pressable",
    description:
      "Use disabled when the custom action is temporarily unavailable and should not respond to interaction.",
    props: [
      {
        name: "disabled",
        value: "true",
        description:
          "Prevents interaction and applies the built-in disabled opacity.",
      },
      {
        name: "style",
        value: "[base, disabled]",
        description: "Applies visual styling for the unavailable state.",
      },
    ],
    label: "Disabled Pressable",
    args: {
      disabled: true,
      style: [Styles.base, Styles.disabled],
    },
  },
  {
    name: "Shadow",
    title: "Shadow pressable",
    description:
      "Use shadow props when the pressable should appear as an elevated interactive surface.",
    props: [
      {
        name: "shadow",
        value: "sm",
        description:
          "Applies the themed shadow style through the Pressable primitive.",
      },
      {
        name: "style",
        value: "[base, default]",
        description: "Defines the visible pressable surface.",
      },
    ],
    label: "Shadow Pressable",
    args: {
      shadow: "sm",
      style: [Styles.base, Styles.default],
    },
  },
  {
    name: "FullWidth",
    title: "Full-width pressable",
    description:
      "Use a full-width pressable when composing list rows, cards, or block-level mobile actions.",
    props: [
      {
        name: "style",
        value: "[base, default, wide]",
        description:
          "Expands the pressable surface to fill the available width.",
      },
      {
        name: "children",
        value: "<Typography.Master />",
        description:
          "Renders the visible content inside the full-width area.",
      },
    ],
    label: "Full-width Pressable",
    args: {
      style: [Styles.base, Styles.default, Styles.wide],
    },
  },
] satisfies PressableExampleDefinition[];

interface PressableExampleProps {
  example: PressableExampleDefinition;
  elevated?: boolean;
}

export const PressableExample = memo(function PressableExample({
  example,
  elevated,
}: PressableExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <View>
        <Pressable {...example.args}>
          <PressablePreviewLabel inverted={example.inverted}>
            {example.label}
          </PressablePreviewLabel>
        </Pressable>
      </View>
    </StoryExample>
  );
});
