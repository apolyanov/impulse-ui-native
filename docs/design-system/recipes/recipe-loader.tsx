import { View } from "@impulse-ui-native/primitives";
import { Skeleton } from "@impulse-ui-native/skeleton";

export function RecipeLoader() {
  return (
    <Skeleton.Container>
      <View gap={12}>
        <Skeleton.Control />
        <Skeleton.Control />
        <Skeleton.Control />
      </View>
    </Skeleton.Container>
  );
}
