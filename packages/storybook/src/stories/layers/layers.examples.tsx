import { memo } from "react";

import { registerFlyout } from "@impulse-ui-native/layers";
import { Button, Typography, View } from "@impulse-ui-native/primitives";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface ProfileFlyoutProps {
  name: string;
}

function ProfileFlyoutContent({ name }: ProfileFlyoutProps) {
  return (
    <View gap={12} paddingBottom={16}>
      <Typography.Body>
        This flyout was opened imperatively for {name}.
      </Typography.Body>
      <Button variant="outlined" onPress={() => profileFlyout.close()}>
        Close
      </Button>
    </View>
  );
}

const profileFlyout = registerFlyout<ProfileFlyoutProps>({
  id: "storybook-profile",
  unique: true,
  title: ({ name }) => `${name}'s profile`,
  Content: ProfileFlyoutContent,
});

interface LayersExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
}

export const LayersExampleDefinitions = [
  {
    name: "RegisteredFlyout",
    title: "Registered flyout",
    description:
      "Register a typed flyout once and open it imperatively from anywhere below the shared LayerCenter.",
    props: [
      {
        name: "unique",
        value: "true",
        description: "Keeps only one layer with this registration ID active.",
      },
      {
        name: "open",
        value: "({ name }) => void",
        description: "Requires the props declared by the registration.",
      },
    ],
  },
] satisfies LayersExampleDefinition[];

interface LayersExampleProps {
  example: LayersExampleDefinition;
  elevated?: boolean;
}

export const LayersExample = memo(function LayersExample({
  example,
  elevated,
}: LayersExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <Button onPress={() => profileFlyout.open({ name: "Ada" })}>
        Open registered flyout
      </Button>
    </StoryExample>
  );
});
