import type { ReactNode } from "react";
import { memo } from "react";

import { Modal } from "@impulse-ui-native/modal";
import { Typography, View } from "@impulse-ui-native/primitives";

import { StoryExample } from "../../components/story-example";

interface ModalExampleDefinition {
  name: string;
  title: string;
  description: string;
  preview: ReactNode;
}

export const ModalExampleDefinitions = [
  {
    name: "Composition",
    title: "Compound presentation",
    description:
      "Root contains the supplied visual parts. Content is a regular View, with no scrolling or dialog behavior.",
    preview: (
      <Modal.Root>
        <Modal.Header>
          <Modal.Title>Project details</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Review the project details before continuing.
          </Modal.Description>
        </Modal.Content>
        <Modal.Footer>
          <Typography.Label>Application actions</Typography.Label>
        </Modal.Footer>
      </Modal.Root>
    ),
  },
  {
    name: "ReadyMade",
    title: "Convenience composition",
    description:
      "Modal assembles Root, Header, Content, and Footer from supplied content.",
    preview: (
      <Modal header={<Modal.Title>Project details</Modal.Title>}>
        <Modal.Description>
          All content is supplied by the application.
        </Modal.Description>
      </Modal>
    ),
  },
  ...(["small", "medium", "large"] as const).map((size) => ({
    name: size,
    title: `${size} surface`,
    description:
      "The surface fills its parent up to the size token's maximum width.",
    preview: (
      <Modal.Root size={size}>
        <Modal.Header>
          <Modal.Title>{size} presentation</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            Short content keeps the surface compact.
          </Modal.Description>
        </Modal.Content>
      </Modal.Root>
    ),
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
