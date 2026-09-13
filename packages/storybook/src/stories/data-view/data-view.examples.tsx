import type { ReactNode } from "react";
import { memo } from "react";

import { DataView } from "@impulse-ui-native/data-state";
import { Typography, View } from "@impulse-ui-native/primitives";
import { Skeleton } from "@impulse-ui-native/skeleton";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface DataViewExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  loading: boolean;
  error: Error | null;
  isEmpty: boolean;
  children: ReactNode;
}

export const DataViewExampleDefinitions = [
  {
    name: "Content",
    title: "Loaded content",
    description:
      "When no pending, empty, or error state is active, DataView renders its children.",
    props: [
      {
        name: "loading",
        value: "false",
        description: "Keeps the loading layer hidden.",
      },
    ],
    loading: false,
    error: null,
    isEmpty: false,
    children: <ProjectListPreview />,
  },
  {
    name: "Loading",
    title: "Loading state",
    description:
      "Use a content-shaped skeleton while keeping the loaded children mounted to prevent layout shifts.",
    props: [
      {
        name: "loading",
        value: "true",
        description: "Shows the loading component over the content area.",
      },
      {
        name: "LoadingComponent",
        value: "Skeleton",
        description: "Mirrors the dimensions of the content being loaded.",
      },
    ],
    loading: true,
    error: null,
    isEmpty: false,
    children: <ProjectListPreview />,
  },
  {
    name: "Empty",
    title: "Empty state",
    description:
      "Use the empty state when a request succeeds without producing content.",
    props: [
      {
        name: "isEmpty",
        value: "true",
        description: "Renders the configured empty-state copy and actions.",
      },
    ],
    loading: false,
    error: null,
    isEmpty: true,
    children: null,
  },
  {
    name: "Error",
    title: "Error state",
    description:
      "Use the error state to explain a failed request and offer recovery.",
    props: [
      {
        name: "error",
        value: "Error",
        description: "Renders the configured error-state copy and actions.",
      },
    ],
    loading: false,
    error: new Error("Could not load projects."),
    isEmpty: false,
    children: null,
  },
] satisfies DataViewExampleDefinition[];

function Loader() {
  return (
    <Skeleton.Container minHeight={96} gap={12} justifyContent="center">
      <Skeleton.Text
        text="Three projects are ready."
        Component={Typography.Body}
      />
      <Skeleton.Bone width="60%" height={12} borderRadius={6} />
    </Skeleton.Container>
  );
}

function ProjectListPreview() {
  return (
    <View minHeight={96} justifyContent="center">
      <Typography.Body>Three projects are ready.</Typography.Body>
    </View>
  );
}

interface DataViewExampleProps {
  example: DataViewExampleDefinition;
  elevated?: boolean;
}

export const DataViewExample = memo(function DataViewExample({
  example,
  elevated,
}: DataViewExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <DataView
        loading={example.loading}
        error={example.error}
        isEmpty={example.isEmpty}
        LoadingComponent={Loader}
        errorViewProps={{
          text: "Could not load projects.",
          primaryActionLabel: "Try again",
          onPressPrimaryAction: () => undefined,
        }}
        emptyViewProps={{
          text: "No projects yet.",
          primaryActionLabel: "Create project",
          onPressPrimaryAction: () => undefined,
        }}
      >
        {example.children}
      </DataView>
    </StoryExample>
  );
});
