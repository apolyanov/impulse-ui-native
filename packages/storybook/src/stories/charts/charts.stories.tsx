import type { Meta, StoryObj } from "@storybook/react";

import { LineChart } from "@impulse-ui-native/charts";
import { createStoryDescription } from "@impulse-ui-native/storybook";

import { ChartsDocumentation } from "./charts.documentation";
import { ChartExample, ChartExampleDefinitions } from "./charts.examples";

const meta = {
  title: "Components/Charts",
  component: LineChart,
  args: {
    data: [],
  },
} satisfies Meta<typeof LineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Documentation: Story = {
  render: function renderDocumentation() {
    return <ChartsDocumentation />;
  },
};

export const Line: Story = createChartStory("Line");
export const MultiLine: Story = createChartStory("MultiLine");
export const Bar: Story = createChartStory("Bar");
export const MultiBar: Story = createChartStory("MultiBar");
export const Pie: Story = createChartStory("Pie");
export const MultiPie: Story = createChartStory("MultiPie");

function createChartStory(name: string): Story {
  const example = ChartExampleDefinitions.find((item) => item.name === name);

  if (!example) {
    throw new Error(`Chart story "${name}" was not found.`);
  }

  return {
    render: function renderChartStory() {
      return <ChartExample example={example} elevated />;
    },
    parameters: createStoryDescription(example.description),
  };
}
