import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { useStepperContext } from "@impulse-ui-native/stepper";

export function RecipeOnboardingStep() {
  const stepper = useStepperContext();
  return (
    <View gap={12}>
      <Typography.Body>
        Step {stepper.current + 1}: review your workspace settings.
      </Typography.Body>
      <Button tone={stepper.tone} onPress={stepper.next}>
        Continue
      </Button>
    </View>
  );
}
