import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from "@impulse-ui-native/popover";
import { Typography } from "@impulse-ui-native/primitives";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { PopoverPlacementPreview } from "./popover-placement-preview";
import { PopoverPreview } from "./popover-preview";
import { PopoverDocumentation } from "./popover.documentation";
import { PopoverExample, PopoverExampleDefinitions } from "./popover.examples";

const meta = {
  title: "Components/Popover",
  component: Popover.Root,
} satisfies Meta<typeof Popover.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <PopoverDocumentation />;
  },
};

export const Default: Story = createPopoverStory("Default");

export const Uncontrolled: Story = {
  render: function renderUncontrolled() {
    return (
      <Popover trigger={<Typography.Label>Project details</Typography.Label>}>
        <Popover.Title>Project details</Popover.Title>
        <Popover.Description>
          Open state is owned by the popover.
        </Popover.Description>
        <Popover.Close>
          <Typography.Label>Close</Typography.Label>
        </Popover.Close>
      </Popover>
    );
  },

  parameters: createStoryDescription(
    "The convenience component assembles Trigger and Content and owns its uncontrolled state.",
  ),
};

export const Design: Story = {
  render: function renderDesign() {
    return <PopoverPreview initiallyOpen />;
  },

  parameters: createStoryDescription(
    "Initially open Project visibility popover matching the picture-first concept. Select a row and Apply, or close to discard the draft.",
  ),
};

export const TooltipDesign: Story = {
  render: function renderTooltipDesign() {
    return <PopoverPreview tooltip initiallyOpen />;
  },

  parameters: createStoryDescription(
    "Initially open Auto-sync tooltip matching the picture-first concept. The hint persists for visual inspection.",
  ),
};

export const Controlled: Story = createPopoverStory("Controlled");
export const Disabled: Story = createPopoverStory("Disabled");
export const Tooltip: Story = createPopoverStory("Tooltip");
export const LongPress: Story = createPopoverStory("LongPress");
export const Top: Story = createPopoverStory("Top");
export const Bottom: Story = createPopoverStory("Bottom");
export const Left: Story = createPopoverStory("Left");
export const Right: Story = createPopoverStory("Right");
export const RightEdge: Story = createPopoverStory("RightEdge");

function createPopoverStory(name: string): Story {
  const example = PopoverExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Popover example "${name}" was not found.`);
  }

  return {
    render: function renderExample() {
      if (example.preview === "placement") {
        return <PopoverPlacementPreview {...example.props} initiallyOpen />;
      }

      return <PopoverExample example={example} />;
    },

    parameters: createStoryDescription(example.description),
  };
}
