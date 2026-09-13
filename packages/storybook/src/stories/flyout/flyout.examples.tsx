import { memo, useState } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Portal } from "@impulse-ui-native/portal";
import { Button, Typography, View } from "@impulse-ui-native/primitives";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface FlyoutExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  placement: "top" | "bottom";
}

export const FlyoutExampleDefinitions = [
  {
    name: "Bottom",
    title: "Bottom flyout",
    description:
      "Use a bottom flyout for contextual actions and controls that should remain thumb-friendly.",
    props: [
      {
        name: "placement",
        value: "bottom",
        description: "Animates the sheet from the bottom edge.",
      },
      {
        name: "open",
        value: "boolean",
        description: "Controls the flyout lifecycle.",
      },
    ],
    placement: "bottom",
  },
  {
    name: "Top",
    title: "Top flyout",
    description:
      "Use a top flyout when content should remain visually anchored to the upper edge.",
    props: [
      {
        name: "placement",
        value: "top",
        description: "Animates the sheet from the top edge.",
      },
    ],
    placement: "top",
  },
] satisfies FlyoutExampleDefinition[];

function FlyoutPreview({ placement }: { placement: "top" | "bottom" }) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button onPress={() => setOpen(true)}>
        {`Open ${placement} flyout`}
      </Button>
      <Portal id={`${placement}-story-flyout-portal`}>
        <Flyout
          id={`${placement}-story-flyout`}
          title="Storybook flyout"
          placement={placement}
          open={open}
          onClose={() => setOpen(false)}
        >
          <View gap={12} paddingBottom={16}>
            <Typography.Body>
              Press the overlay or drag the sheet toward the edge to close it.
            </Typography.Body>
            <Button variant="outlined" onPress={() => setOpen(false)}>
              Close
            </Button>
          </View>
        </Flyout>
      </Portal>
    </View>
  );
}

interface FlyoutExampleProps {
  example: FlyoutExampleDefinition;
  elevated?: boolean;
}

export const FlyoutExample = memo(function FlyoutExample({
  example,
  elevated,
}: FlyoutExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <FlyoutPreview placement={example.placement} />
    </StoryExample>
  );
});
