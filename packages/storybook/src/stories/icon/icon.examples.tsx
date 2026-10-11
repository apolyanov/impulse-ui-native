import type { ReactNode } from "react";
import { memo } from "react";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";
import { IconRendererPreview } from "./icon-renderer-preview";
import { IconVariantsPreview } from "./icon-variants-preview";

interface IconExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  preview: ReactNode;
}

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
    preview: <IconRendererPreview />,
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
    preview: <IconVariantsPreview />,
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
