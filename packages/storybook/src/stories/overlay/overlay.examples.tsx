import { memo, useEffect, useMemo } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { useOverlayContext } from "@impulse-ui-native/overlay";
import { Button, Typography, View } from "@impulse-ui-native/primitives";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface ProfileFlyoutProps {
  name: string;
  onClose: () => void;
}

const ProfileFlyoutID = "storybook-profile";

function ProfileFlyoutContent({ name, onClose }: ProfileFlyoutProps) {
  return (
    <View gap={12} paddingBottom={16}>
      <Typography.Body>
        This flyout was opened imperatively for {name}.
      </Typography.Body>
      <Button variant="outlined" onPress={onClose}>
        Close
      </Button>
    </View>
  );
}

interface OverlayExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
}

export const OverlayExampleDefinitions = [
  {
    name: "RegisteredFlyout",
    title: "Registered flyout",
    description:
      "Register a typed flyout with the provided overlay store and open it imperatively from anywhere below OverlayHost.",
    props: [
      {
        name: "unique",
        value: "true",
        description: "Keeps only one overlay with this registration ID active.",
      },
      {
        name: "open",
        value: "({ name }) => void",
        description: "Requires the props declared by the registration.",
      },
    ],
  },
] satisfies OverlayExampleDefinition[];

interface OverlayExampleProps {
  example: OverlayExampleDefinition;
  elevated?: boolean;
}

export const OverlayExample = memo(function OverlayExample({
  example,
  elevated,
}: OverlayExampleProps) {
  const { store } = useOverlayContext();

  const profileFlyout = useMemo(
    () =>
      store.register<ProfileFlyoutProps>({
        id: ProfileFlyoutID,
        unique: true,
        Component: Flyout,
        title: ({ name }) => `${name}'s profile`,
        Content: ProfileFlyoutContent,
      }),
    [store],
  );

  useEffect(() => {
    return () => {
      store.remove(ProfileFlyoutID);
    };
  }, [store]);

  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <Button
        onPress={() =>
          profileFlyout.open({ name: "Ada", onClose: profileFlyout.close })
        }
      >
        Open registered flyout
      </Button>
    </StoryExample>
  );
});
