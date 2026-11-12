import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import { ChartExample, ChartExampleDefinitions } from "./charts.examples";
import { DistributionBarExample } from "./distribution-bar.example";

export function ChartsDocumentation() {
  return (
    <StoryDocumentationPage
      title="Charts"
      description="Charts provides Skia-rendered line, bar, and pie visualizations with typed data, theme colors, and lower-level composition APIs."
    >
      <DistributionBarExample />
      {ChartExampleDefinitions.map((example) => (
        <View key={example.name}>
          <ChartExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
