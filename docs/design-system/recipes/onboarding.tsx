import { useMemo, useState } from "react";

import { Typography, View } from "@impulse-ui-native/primitives";
import { Stepper, StepperTabsNavigation } from "@impulse-ui-native/stepper";
import { Tabs } from "@impulse-ui-native/tabs";

import { RecipeOnboardingStep } from "./recipe-onboarding-step";

export function OnboardingRecipe() {
  const [current, setCurrent] = useState(0);
  const steps = useMemo(
    () => [
      { title: "Details", Component: RecipeOnboardingStep },
      { title: "Review", Component: RecipeOnboardingStep },
    ],
    [],
  );
  const tabs = useMemo(
    () => [
      {
        value: "setup",
        label: "Setup",
        content: (
          <View gap={12}>
            <StepperTabsNavigation current={current} items={steps} />
            <Stepper current={current} onChange={setCurrent} items={steps} />
          </View>
        ),
      },
      {
        value: "help",
        label: "Help",
        content: (
          <Typography.Body>
            Configure your workspace, then review it.
          </Typography.Body>
        ),
      },
    ],
    [current, steps],
  );
  return <Tabs items={tabs} defaultValue="setup" />;
}
