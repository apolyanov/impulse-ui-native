import type { ComponentProps } from "react";
import { memo } from "react";

import { Accordion } from "@impulse-ui-native/accordion";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useSpace } from "@impulse-ui-native/theme";

import type { StoryExamplePropDefinition } from "../../components/story-example";
import { StoryExample } from "../../components/story-example";
import { AccordionExampleTrigger } from "./accordion-example-trigger";

interface AccordionExampleDefinition {
  args: ComponentProps<typeof Accordion.Root>;
  description: string;
  name: string;
  nested?: boolean;
  props: StoryExamplePropDefinition[];
  title: string;
}

export const AccordionExampleDefinitions = [
  {
    name: "Single",
    title: "Single expansion",
    description:
      "Open one item at a time and allow the current item to collapse.",
    props: [
      { name: "type", value: "single" },
      { name: "defaultValue", value: "shipping" },
    ],
    args: { defaultValue: "shipping", type: "single" },
  },
  {
    name: "Multiple",
    title: "Multiple expansion",
    description: "Keep several sections open independently.",
    props: [
      { name: "type", value: "multiple" },
      { name: "defaultValue", value: '["shipping", "returns"]' },
    ],
    args: {
      defaultValue: ["shipping", "returns"],
      type: "multiple",
    },
  },
  {
    name: "NonCollapsible",
    title: "Required expansion",
    description:
      "Keep one item open by disabling collapse in single-selection mode.",
    props: [{ name: "collapsible", value: "false" }],
    args: {
      collapsible: false,
      defaultValue: "shipping",
      type: "single",
    },
  },
  {
    name: "DisabledItem",
    title: "Disabled item",
    description:
      "Disable an individual item without removing it from the disclosure group.",
    props: [
      {
        name: "Accordion.Item disabled",
        value: "true",
      },
    ],
    args: { type: "single" },
  },
  {
    name: "Nested",
    title: "Nested content",
    description:
      "Nest another accordion inside content while preserving independent expansion state.",
    props: [{ name: "defaultValue", value: "account" }],
    args: { defaultValue: "account", type: "single" },
    nested: true,
  },
] satisfies AccordionExampleDefinition[];

interface AccordionExampleProps {
  elevated?: boolean;
  example: AccordionExampleDefinition;
}

export const AccordionExample = memo(function AccordionExample({
  elevated,
  example,
}: AccordionExampleProps) {
  return (
    <StoryExample
      description={example.description}
      elevated={elevated}
      props={example.props}
      title={example.title}
    >
      <View maxWidth={520} width="100%">
        <Accordion.Root {...example.args}>
          {example.nested ? <NestedItems /> : <StandardItems />}
        </Accordion.Root>
      </View>
    </StoryExample>
  );
});

function StandardItems() {
  return (
    <>
      <Accordion.Item value="shipping">
        <AccordionExampleTrigger>
          How long does shipping take?
        </AccordionExampleTrigger>
        <Accordion.Content>
          <Typography.Body>
            Standard shipping normally arrives in three to five business days.
          </Typography.Body>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="returns">
        <AccordionExampleTrigger>
          Can I return an order?
        </AccordionExampleTrigger>
        <Accordion.Content>
          <Typography.Body>
            Unused items can be returned within thirty days of delivery.
          </Typography.Body>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item disabled value="support">
        <AccordionExampleTrigger disabled>
          Priority support
        </AccordionExampleTrigger>
        <Accordion.Content>
          <Typography.Body>
            Priority support is available on selected plans.
          </Typography.Body>
        </Accordion.Content>
      </Accordion.Item>
    </>
  );
}

function NestedItems() {
  const space = useSpace();

  return (
    <Accordion.Item value="account">
      <AccordionExampleTrigger>Account settings</AccordionExampleTrigger>
      <Accordion.Content>
        <View marginBottom={space.xs}>
          <Typography.Body>Choose a section to learn more.</Typography.Body>
        </View>

        <Accordion.Root>
          <Accordion.Item value="profile">
            <AccordionExampleTrigger>Profile</AccordionExampleTrigger>
            <Accordion.Content>
              <Typography.Body>
                Update your display name and profile details.
              </Typography.Body>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="security">
            <AccordionExampleTrigger>Security</AccordionExampleTrigger>
            <Accordion.Content>
              <Typography.Body>
                Manage passwords and active sessions.
              </Typography.Body>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </Accordion.Content>
    </Accordion.Item>
  );
}
