import type { ReactNode } from "react";
import { memo } from "react";

import { Icon } from "@impulse-ui-native/icon/components/icon";
import { HeartIcon } from "@impulse-ui-native/icon/icons/heart";
import { SparkleIcon } from "@impulse-ui-native/icon/icons/sparkle";
import { View } from "@impulse-ui-native/primitives";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface IconExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  preview: ReactNode;
}

const variants = [
  "bold",
  "duotone",
  "fill",
  "light",
  "regular",
  "thin",
] as const;

export const IconExampleDefinitions = [
  {
    name: "Renderer",
    title: "Shared icon renderer",
    description:
      "Use Icon to normalize semantic sizes, colors, and visual weights.",
    props: [
      {
        name: "icon",
        value: "SparkleIcon",
        description: "Selects the named wrapper to render.",
      },
      {
        name: "size",
        value: "large",
        description: "Maps to the large semantic icon size.",
      },
    ],
    preview: (
      <Icon icon={SparkleIcon} size="large" variant="duotone" color="#6D5DFC" />
    ),
  },
  {
    name: "Variants",
    title: "Visual weights",
    description:
      "Named wrappers expose six weights through a consistent variant prop.",
    props: [
      {
        name: "variant",
        value: "IconVariant",
        description: "Chooses the generated SVG weight.",
      },
    ],
    preview: (
      <View flexDirection="row" flexWrap="wrap" gap={16}>
        {variants.map((variant) => (
          <HeartIcon
            key={variant}
            variant={variant}
            width={28}
            height={28}
            color="#6D5DFC"
          />
        ))}
      </View>
    ),
  },
] satisfies IconExampleDefinition[];

interface IconExampleProps {
  example: IconExampleDefinition;
  elevated?: boolean;
}

export const IconExample = memo(function IconExample({
  example,
  elevated,
}: IconExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      {example.preview}
    </StoryExample>
  );
});
