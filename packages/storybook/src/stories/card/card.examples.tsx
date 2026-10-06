import type { ReactNode } from "react";
import { memo } from "react";

import { Card } from "@impulse-ui-native/card";
import { Button, Tag, Typography, View } from "@impulse-ui-native/primitives";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";
import { PressableCardPreview } from "./pressable-card-preview";

interface CardExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  preview: ReactNode;
}

export const CardExampleDefinitions = [
  {
    name: "ReadyMade",
    title: "Ready-made card",
    description:
      "Card assembles its namespaced parts from header, media, footer, and children props.",
    props: [],
    preview: (
      <Card
        width="100%"
        maxWidth={360}
        header={<Typography.Title4>Workspace summary</Typography.Title4>}
        footer={<Tag label="On track" color="success" size="small" />}
      >
        <Typography.Body>Twelve tasks are complete.</Typography.Body>
      </Card>
    ),
  },
  {
    name: "Basic",
    title: "Basic card",
    description:
      "Compose header, content, and footer slots while keeping their children and layout under application control.",
    props: [
      {
        name: "Card.Root",
        value: "surface",
        description: "Provides the card boundary and themed surface.",
      },
      {
        name: "Card.Header",
        value: "content",
        description:
          "Groups introductory content with a consistent inset on every side.",
      },
      {
        name: "Card.Content",
        value: "content",
        description:
          "Holds the card's primary information with the standard card inset.",
      },
      {
        name: "Card.Footer",
        value: "actions",
        description:
          "Holds supporting metadata or actions with the same inset.",
      },
    ],
    preview: (
      <Card.Root width="100%" maxWidth={360}>
        <Card.Header>
          <Typography.Title4>Workspace summary</Typography.Title4>
          <Typography.Helper>Updated a few minutes ago</Typography.Helper>
        </Card.Header>
        <Card.Content>
          <Typography.Body>
            Twelve tasks are complete and three are waiting for review.
          </Typography.Body>
        </Card.Content>
        <Card.Footer
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Tag label="On track" color="success" size="small" />
          <Button size="small" variant="ghost">
            View details
          </Button>
        </Card.Footer>
      </Card.Root>
    ),
  },
  {
    name: "Media",
    title: "Card with media",
    description:
      "Use Card.Media as an unopinionated container for images, video, illustrations, or application-defined media.",
    props: [
      {
        name: "Card.Media",
        value: "height={128}",
        description:
          "Defines the media region without requiring a specific media renderer.",
      },
    ],
    preview: (
      <Card.Root width="100%" maxWidth={360}>
        <Card.Media height={128}>
          <View flex={1} alignItems="center" justifyContent="center">
            <Typography.Label>Application media</Typography.Label>
          </View>
        </Card.Media>
        <Card.Header>
          <Typography.Title4>Design systems meetup</Typography.Title4>
          <Typography.Helper>Thursday at 18:30</Typography.Helper>
        </Card.Header>
        <Card.Content>
          <Typography.Body>
            A practical discussion about building consistent native interfaces.
          </Typography.Body>
        </Card.Content>
      </Card.Root>
    ),
  },
  {
    name: "Pressable",
    title: "Pressable card",
    description:
      "Use Card.Pressable when the entire surface triggers one action and needs pressed feedback.",
    props: [
      {
        name: "Card.Pressable",
        value: "onPress",
        description: "Makes the complete card surface interactive.",
      },
    ],
    preview: <PressableCardPreview />,
  },
  {
    name: "Disabled",
    title: "Disabled pressable card",
    description:
      "Disable an interactive card when its action is unavailable. The shared Pressable behavior blocks activation and reduces emphasis.",
    props: [
      {
        name: "disabled",
        value: "true",
        description: "Blocks interaction.",
      },
    ],
    preview: <PressableCardPreview disabled />,
  },
  {
    name: "Horizontal",
    title: "Horizontal composition",
    description:
      "Card parts accept themed View layout props, allowing horizontal and custom compositions without a separate layout variant.",
    props: [
      {
        name: "flexDirection",
        value: "row",
        description: "Changes the root composition without changing Card APIs.",
      },
      {
        name: "Card.Media",
        value: "width={112}",
        description: "Constrains media for the horizontal composition.",
      },
    ],
    preview: (
      <Card.Root width="100%" maxWidth={420} flexDirection="row">
        <Card.Media width={112}>
          <View flex={1} alignItems="center" justifyContent="center">
            <Typography.Label>Media</Typography.Label>
          </View>
        </Card.Media>
        <Card.Content flex={1}>
          <Typography.Title4>Flexible composition</Typography.Title4>
          <Typography.Body>
            Sections stretch naturally and can be rearranged as needed.
          </Typography.Body>
        </Card.Content>
      </Card.Root>
    ),
  },
] satisfies CardExampleDefinition[];

interface CardExampleProps {
  example: CardExampleDefinition;
  elevated?: boolean;
}

export const CardExample = memo(function CardExample({
  example,
  elevated,
}: CardExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <View width="100%" alignItems="center">
        {example.preview}
      </View>
    </StoryExample>
  );
});
