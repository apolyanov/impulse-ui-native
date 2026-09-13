import { memo, useState } from "react";

import {
  Portal,
  PortalProvider,
  PortalsHost,
  PortalStore,
} from "@impulse-ui-native/portal";
import { Typography, View } from "@impulse-ui-native/primitives";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface PortalExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  hostName: string;
}

export const PortalExampleDefinitions = [
  {
    name: "RootHost",
    title: "Default host",
    description:
      "Portal moves content from its declaration point into the default root host.",
    props: [
      {
        name: "id",
        value: "status-message",
        description: "Identifies the portal entry for updates and cleanup.",
      },
    ],
    hostName: "root",
  },
  {
    name: "NamedHost",
    title: "Named host",
    description:
      "Use matching names to create an independent portal destination.",
    props: [
      {
        name: "name",
        value: "notifications",
        description: "Routes content to the matching PortalsHost.",
      },
    ],
    hostName: "notifications",
  },
] satisfies PortalExampleDefinition[];

function PortalPreview({ hostName }: { hostName: string }) {
  const [store] = useState(() => new PortalStore());

  return (
    <PortalProvider store={store}>
      <Portal id={`${hostName}-status-message`} name={hostName}>
        <View padding={12} borderRadius={10} backgroundColor="#EEF2FF">
          <Typography.Body>
            Rendered through the {hostName} host.
          </Typography.Body>
        </View>
      </Portal>

      <View
        minHeight={64}
        padding={8}
        borderWidth={1}
        borderColor="#D4D4D8"
        borderRadius={12}
      >
        <PortalsHost name={hostName} />
      </View>
    </PortalProvider>
  );
}

interface PortalExampleProps {
  example: PortalExampleDefinition;
  elevated?: boolean;
}

export const PortalExample = memo(function PortalExample({
  example,
  elevated,
}: PortalExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <PortalPreview hostName={example.hostName} />
    </StoryExample>
  );
});
