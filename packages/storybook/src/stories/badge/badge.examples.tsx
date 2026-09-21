import type { ComponentProps } from "react";
import { memo } from "react";
import { Text } from "react-native";

import { CheckIcon } from "@impulse-ui-native/icon/icons/check";
import { ClockIcon } from "@impulse-ui-native/icon/icons/clock";
import { UserCircleIcon } from "@impulse-ui-native/icon/icons/user-circle";
import { XCircleIcon } from "@impulse-ui-native/icon/icons/x-circle";
import { Badge, View } from "@impulse-ui-native/primitives";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";

interface BadgeExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Badge>;
}

export const BadgeExampleDefinitions = [
  {
    name: "Filled",
    title: "Filled badge",
    description:
      "Filled badges give a short semantic state the strongest visual emphasis.",
    props: [
      { name: "variant", value: "filled" },
      { name: "tone", value: "success" },
    ],
    args: {
      PrefixIcon: CheckIcon,
      children: "Paid",
      tone: "success",
      variant: "filled",
    },
  },
  {
    name: "Outlined",
    title: "Outlined badge",
    description:
      "Outlined badges work well for neutral metadata such as countries or categories.",
    props: [
      { name: "variant", value: "outlined" },
      { name: "tone", value: "neutral" },
    ],
    args: {
      Prefix: CountryFlag,
      children: "United States",
      tone: "neutral",
      variant: "outlined",
    },
  },
  {
    name: "Soft",
    title: "Soft badge",
    description:
      "Soft badges keep a semantic color while reducing visual weight.",
    props: [
      { name: "variant", value: "soft" },
      { name: "tone", value: "info" },
    ],
    args: {
      PrefixIcon: CheckIcon,
      children: "Web Design",
      tone: "info",
      variant: "soft",
    },
  },
  {
    name: "Affixes",
    title: "Prefix and suffix content",
    description:
      "Compose leading and trailing visuals without coupling Badge to a particular icon or avatar package.",
    props: [
      { name: "PrefixIcon", value: "UserCircleIcon" },
      { name: "SuffixIcon", value: "XCircleIcon" },
    ],
    args: {
      PrefixIcon: UserCircleIcon,
      SuffixIcon: XCircleIcon,
      children: "Alex",
      tone: "neutral",
      variant: "outlined",
    },
  },
  {
    name: "Small",
    title: "Small badge",
    description: "Use small badges in dense rows or on compact icon surfaces.",
    props: [{ name: "size", value: "small" }],
    args: {
      children: "Online",
      size: "small",
      tone: "success",
      variant: "soft",
    },
  },
  {
    name: "Large",
    title: "Large badge",
    description:
      "Use large badges when a state needs more prominence or sits on a larger surface.",
    props: [{ name: "size", value: "large" }],
    args: { children: "Refunded", size: "large", tone: "warning" },
  },
  {
    name: "Semantic tones",
    title: "Semantic tones",
    description:
      "Choose a semantic tone that reinforces the label instead of relying on color alone.",
    props: [{ name: "tone", value: "success | error | warning | info" }],
    args: { PrefixIcon: ClockIcon, children: "Pending", tone: "neutral" },
  },
] satisfies BadgeExampleDefinition[];

interface BadgeExampleProps {
  example: BadgeExampleDefinition;
  elevated?: boolean;
}

export const BadgeExample = memo(function BadgeExample({
  example,
  elevated,
}: BadgeExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      {example.name === "Semantic tones" ? (
        <View flexDirection="row" flexWrap="wrap" gap="xs">
          <Badge PrefixIcon={CheckIcon} tone="success">
            Paid
          </Badge>
          <Badge PrefixIcon={XCircleIcon} tone="error">
            Declined
          </Badge>
          <Badge PrefixIcon={ClockIcon} tone="neutral">
            Pending
          </Badge>
          <Badge tone="warning">Refunded</Badge>
        </View>
      ) : (
        <Badge {...example.args} />
      )}
    </StoryExample>
  );
});

function CountryFlag() {
  return <Text>🇺🇸</Text>;
}
