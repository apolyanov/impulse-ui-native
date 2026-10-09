import type { ReactNode } from "react";
import { memo } from "react";

import { View } from "@impulse-ui-native/primitives";

import { StoryExample } from "../../components/story-example";
import { ModalPreview } from "./modal-preview";
import { RegisteredModalPreview } from "./registered-modal-preview";

interface ModalExampleDefinition {
  name: string;
  title: string;
  description: string;
  preview: ReactNode;
}

export const ModalExampleDefinitions = [
  {
    name: "Composition",
    title: "Compound local modal",
    description:
      "Keep Portal mounted around Root. Root owns the lifecycle; its visual parts render supplied children without context or providers.",
    preview: <ModalPreview compound />,
  },
  {
    name: "ReadyMade",
    title: "Convenience local modal",
    description:
      "Modal composes a title header, content, and supplied footer. Backdrop and Android back dismissal use the same lifecycle.",
    preview: <ModalPreview />,
  },
  {
    name: "Registered",
    title: "Global OverlayHost modal",
    description:
      "Register Modal directly with OverlayStore. OverlayHost supplies lifecycle props and removes the entry after its exit animation.",
    preview: <RegisteredModalPreview />,
  },
  ...(["small", "medium", "large"] as const).map((size) => ({
    name: size,
    title: `${size} modal`,
    description:
      "Maximum widths are 320, 440, and 640, constrained by the host's safe-area padding. Content does not scroll.",
    preview: <ModalPreview size={size} />,
  })),
] satisfies ModalExampleDefinition[];

interface ModalExampleProps {
  example: ModalExampleDefinition;
  elevated?: boolean;
}

export const ModalExample = memo(function ModalExample({
  example,
  elevated,
}: ModalExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={[]}
      elevated={elevated}
    >
      <View width="100%" alignItems="center">
        {example.preview}
      </View>
    </StoryExample>
  );
});
