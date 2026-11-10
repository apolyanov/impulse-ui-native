import { View } from "@impulse-ui-native/primitives";

import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  TypographyExample,
  TypographyExampleDefinitions,
} from "./typography.examples";

export function TypographyDocumentation() {
  return (
    <StoryDocumentationPage
      title="Typography"
      description="Headings and main content use text.primary. Subtitles, BodySmall, Caption, Helper, Overline, and Eyebrow use text.secondary. Both adapt to the active theme. Explicit color props and styles override preset colors. All presets accept View’s margin and padding props, including side, horizontal, and vertical spacing. Explicit style values take precedence."
    >
      {TypographyExampleDefinitions.map((example) => (
        <View key={example.name}>
          <TypographyExample example={example} elevated />
        </View>
      ))}
    </StoryDocumentationPage>
  );
}
