import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "@impulse-ui-native/carousel";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { CarouselDocumentation } from "./carousel.documentation";
import {
  CarouselExample,
  CarouselExampleDefinitions,
} from "./carousel.examples";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    index: { control: "number" },
    defaultIndex: { control: "number" },
    pagination: {
      control: "select",
      options: ["dots", "segments", "counter", "none"],
    },
    peek: { control: "number" },
    slideAspectRatio: { control: "number" },
    disabled: { control: "boolean" },
    showNavigation: { control: "boolean" },
    children: { control: false },
    onIndexChange: { control: false },
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = { render: () => <CarouselDocumentation /> };
export const Default: Story = createCarouselStory("Default");
export const Peek: Story = createCarouselStory("Peek");
export const Segments: Story = createCarouselStory("Segments");
export const Counter: Story = createCarouselStory("Counter");
export const ControlledRejected: Story =
  createCarouselStory("ControlledRejected");
export const DynamicSlides: Story = createCarouselStory("DynamicSlides");
export const Disabled: Story = createCarouselStory("Disabled");
export const Controlled: Story = createCarouselStory("Controlled");
export const DarkOverride: Story = createCarouselStory("DarkOverride");
export const SingleSlide: Story = createCarouselStory("SingleSlide");
export const Empty: Story = createCarouselStory("Empty");
export const Overflow: Story = createCarouselStory("Overflow");
export const ContentOnly: Story = createCarouselStory("ContentOnly");

function createCarouselStory(name: string): Story {
  const example = CarouselExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Carousel story ${name} was not found.`);
  }

  return {
    args: example.args,
    render: (args) => <CarouselExample example={{ ...example, args }} />,
    parameters: createStoryDescription(example.description),
  };
}
