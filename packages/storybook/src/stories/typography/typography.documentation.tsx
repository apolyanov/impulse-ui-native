import { View } from "@impulse-ui-native/toolkit";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  TypographyExample,
  TypographyExampleDefinitions,
} from "./typography.examples";

export function TypographyDocumentation() {
  return (
    <StoryDocumentationPage
      title="Typography"
      description="Typography presets provide consistent text hierarchy, spacing, weight, and readability across the interface."
    >
      {TypographyExampleDefinitions.map((example) => (
        <View key={example.name}>
          <TypographyExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
