import type { ComponentProps } from "react";
import { memo } from "react";

import { Avatar, Typography, View } from "@impulse-ui-native/primitives";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface AvatarExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  args: ComponentProps<typeof Avatar>;
  customFallback?: boolean;
}

export const AvatarExampleDefinitions = [
  {
    name: "Image",
    title: "Image avatar",
    description:
      "Place an image over fallback content so initials remain available while the image loads or if it fails.",
    props: [
      { name: "source", value: "ImageSourcePropType" },
      { name: "initials", value: "AK" },
    ],
    args: {
      accessibilityLabel: "Alex Kim",
      initials: "AK",
      source: { uri: "https://i.pravatar.cc/128?img=47" },
    },
  },
  {
    name: "Initials",
    title: "Initials fallback",
    description: "Use one or two initials when no profile image is available.",
    props: [{ name: "initials", value: "AK" }],
    args: { accessibilityLabel: "Alex Kim", initials: "AK" },
  },
  {
    name: "CustomFallback",
    title: "Custom fallback",
    description:
      "Provide custom fallback content when initials are not meaningful for the represented entity.",
    props: [{ name: "fallback", value: "ReactNode" }],
    args: {
      accessibilityLabel: "Guest profile",
    },
    customFallback: true,
  },
  {
    name: "Filled",
    title: "Filled avatar",
    description: "Use the filled variant for the strongest identity emphasis.",
    props: [{ name: "variant", value: "filled" }],
    args: { initials: "AK", variant: "filled" },
  },
  {
    name: "Outlined",
    title: "Outlined avatar",
    description: "Use the outlined variant for lower visual weight.",
    props: [{ name: "variant", value: "outlined" }],
    args: { initials: "AK", variant: "outlined" },
  },
  {
    name: "Soft",
    title: "Soft avatar",
    description: "Use the soft variant for a quieter filled treatment.",
    props: [{ name: "variant", value: "soft" }],
    args: { initials: "AK", variant: "soft" },
  },
  {
    name: "Ghost",
    title: "Ghost avatar",
    description:
      "Use the ghost variant when the surrounding surface is enough.",
    props: [{ name: "variant", value: "ghost" }],
    args: { initials: "AK", variant: "ghost" },
  },
  {
    name: "Plain",
    title: "Plain avatar",
    description: "Use the plain variant for the most minimal presentation.",
    props: [{ name: "variant", value: "plain" }],
    args: { initials: "AK", variant: "plain" },
  },
  {
    name: "Small",
    title: "Small avatar",
    description: "Use the small size in dense rows and compact metadata.",
    props: [{ name: "size", value: "small" }],
    args: { initials: "AK", size: "small" },
  },
  {
    name: "Medium",
    title: "Medium avatar",
    description: "The medium size is the default for most interface contexts.",
    props: [{ name: "size", value: "medium" }],
    args: { initials: "AK", size: "medium" },
  },
  {
    name: "Large",
    title: "Large avatar",
    description:
      "Use the large size where identity needs stronger visual emphasis.",
    props: [{ name: "size", value: "large" }],
    args: { initials: "AK", size: "large" },
  },
  {
    name: "Online",
    title: "Online status",
    description:
      "Use the online status when presence information is current and useful.",
    props: [{ name: "status", value: "online" }],
    args: {
      accessibilityLabel: "Alex Kim, online",
      initials: "AK",
      status: "online",
    },
  },
  {
    name: "Away",
    title: "Away status",
    description: "Use the away status for temporarily inactive profiles.",
    props: [{ name: "status", value: "away" }],
    args: {
      accessibilityLabel: "Alex Kim, away",
      initials: "AK",
      status: "away",
    },
  },
  {
    name: "Busy",
    title: "Busy status",
    description: "Use the busy status when interruptions should be avoided.",
    props: [{ name: "status", value: "busy" }],
    args: {
      accessibilityLabel: "Alex Kim, busy",
      initials: "AK",
      status: "busy",
    },
  },
  {
    name: "Offline",
    title: "Offline status",
    description: "Use the offline status when the profile is unavailable.",
    props: [{ name: "status", value: "offline" }],
    args: {
      accessibilityLabel: "Alex Kim, offline",
      initials: "AK",
      status: "offline",
    },
  },
] satisfies AvatarExampleDefinition[];

interface AvatarExampleProps {
  example: AvatarExampleDefinition;
  elevated?: boolean;
}

export const AvatarExample = memo(function AvatarExample({
  example,
  elevated,
}: AvatarExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <View alignSelf="flex-start">
        <Avatar
          {...example.args}
          fallback={
            example.customFallback ? (
              <Typography.Label>?</Typography.Label>
            ) : (
              example.args.fallback
            )
          }
        />
      </View>
    </StoryExample>
  );
});
