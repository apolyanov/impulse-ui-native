import { Card } from "@impulse-ui-native/card";
import { Carousel } from "@impulse-ui-native/carousel";
import { Typography, View } from "@impulse-ui-native/primitives";

export function ProductCarouselRecipe() {
  return (
    <View gap={16}>
      <Typography.Title4>Explore workspaces</Typography.Title4>
      <Carousel peek={24} slideAspectRatio={1.8} tone="primary" showNavigation>
        <Card
          header={<Typography.Title5>Personal workspace</Typography.Title5>}
        >
          <Typography.Body>A focused place for your projects.</Typography.Body>
        </Card>
        <Card header={<Typography.Title5>Team workspace</Typography.Title5>}>
          <Typography.Body>Shared projects and conversations.</Typography.Body>
        </Card>
      </Carousel>
    </View>
  );
}
