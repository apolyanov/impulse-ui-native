import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  DatetimeExample,
  DatetimeExampleDefinitions,
} from "./datetime.examples";

export function DatetimeDocumentation() {
  return (
    <StoryDocumentationPage
      title="Date and time"
      description="The datetime package provides consistent controls for dates, times, combined values, and ranges."
    >
      {DatetimeExampleDefinitions.map((example) => (
        <View key={example.name}>
          <DatetimeExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
