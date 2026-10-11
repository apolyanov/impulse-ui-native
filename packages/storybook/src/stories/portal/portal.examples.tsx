import { memo, useState } from "react";

import {
  Portal,
  PortalProvider,
  PortalsHost,
  PortalStore,
} from "@impulse-ui-native/portal";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useTheme } from "@impulse-ui-native/theme";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";

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
  const { colors, space, radii, borderSize } = useTheme();

  const [store] = useState(() => new PortalStore());

  return (
    <PortalProvider store={store}>
      <Portal id={`${hostName}-status-message`} name={hostName}>
        <View
          padding={space.mxs}
          borderRadius={radii.md}
          backgroundColor={colors.surface.secondary.value}
        >
          <Typography.Body>
            Rendered through the {hostName} host.
          </Typography.Body>
        </View>
      </Portal>

      <View
        minHeight={64}
        padding={space.xs}
        borderWidth={borderSize.sm}
        borderColor={colors.border.default.value}
        borderRadius={radii.md}
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
