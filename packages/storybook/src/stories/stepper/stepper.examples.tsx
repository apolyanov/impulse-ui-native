import { memo, useState } from "react";

import { Button, Typography, View } from "@impulse-ui-native/primitives";
import {
  Stepper,
  StepperTabsNavigation,
  useStepperContext,
} from "@impulse-ui-native/stepper";

import {
  StoryExample,
  StoryExamplePropDefinition,
} from "../../components/story-example";

interface StepperExampleDefinition {
  name: string;
  title: string;
  description: string;
  props: StoryExamplePropDefinition[];
  showTabs: boolean;
}

function DetailsStep() {
  const stepper = useStepperContext();

  return (
    <View gap={12}>
      <Typography.Body>Enter the details for this flow.</Typography.Body>
      <Button onPress={stepper.next}>Continue</Button>
    </View>
  );
}

function ReviewStep() {
  const stepper = useStepperContext();

  return (
    <View gap={12}>
      <Typography.Body>
        Review the information before finishing.
      </Typography.Body>
      <Button variant="outlined" onPress={stepper.previous}>
        Back
      </Button>
    </View>
  );
}

const steps = [
  { title: "Details", Component: DetailsStep },
  { title: "Review", Component: ReviewStep },
];

export const StepperExampleDefinitions = [
  {
    name: "Flow",
    title: "Controlled flow",
    description:
      "Stepper renders the active item and exposes bounded navigation to each step.",
    props: [
      {
        name: "current",
        value: "number",
        description: "Controls the active step index.",
      },
      {
        name: "onChange",
        value: "(index) => void",
        description: "Receives navigation changes.",
      },
    ],
    showTabs: false,
  },
  {
    name: "Tabs",
    title: "Flow with tab navigation",
    description:
      "StepperTabsNavigation visualizes progress using the same items and current index.",
    props: [
      {
        name: "items",
        value: "Step[]",
        description: "Supplies titles and components for the flow.",
      },
    ],
    showTabs: true,
  },
] satisfies StepperExampleDefinition[];

interface StepperPreviewProps {
  showTabs: boolean;
}

function StepperPreview({ showTabs }: StepperPreviewProps) {
  const [current, setCurrent] = useState(0);

  return (
    <View gap={16}>
      {showTabs ? (
        <StepperTabsNavigation current={current} items={steps} />
      ) : null}
      <Stepper current={current} items={steps} onChange={setCurrent} />
    </View>
  );
}

interface StepperExampleProps {
  example: StepperExampleDefinition;
  elevated?: boolean;
}

export const StepperExample = memo(function StepperExample({
  example,
  elevated,
}: StepperExampleProps) {
  return (
    <StoryExample
      title={example.title}
      description={example.description}
      props={example.props}
      elevated={elevated}
    >
      <StepperPreview showTabs={example.showTabs} />
    </StoryExample>
  );
});
