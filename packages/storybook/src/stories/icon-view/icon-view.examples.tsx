import { memo } from "react";

import type {
  BadgeTone,
  ComponentSize,
  DisplayVariant,
} from "@impulse-ui-native/theme";
import { IconView } from "@impulse-ui-native/icon-view";
import { CheckIcon } from "@impulse-ui-native/icon/icons/check";
import { View } from "@impulse-ui-native/primitives";

import { StoryExample } from "../../components/story-example";

export const IconViewExamples = memo(function IconViewExamples() {
  const sizes: ComponentSize[] = ["small", "medium", "large"];
  const variants: DisplayVariant[] = ["filled", "outlined", "soft"];
  const tones: BadgeTone[] = [
    "primary",
    "secondary",
    "neutral",
    "error",
    "warning",
    "success",
    "info",
  ];

  return (
    <View gap="md">
      <StoryExample
        title="Sizes"
        description="The same square dimensions and icon sizes as IconButton."
      >
        <View flexDirection="row" alignItems="center" gap="xs">
          {sizes.map((size) => (
            <IconView key={size} icon={CheckIcon} size={size} />
          ))}
        </View>
      </StoryExample>
      {variants.map((variant) => (
        <StoryExample
          key={variant}
          title={variant}
          description="All seven Badge tones share the same foreground, background, and border pairings."
        >
          <View flexDirection="row" flexWrap="wrap" gap="xs">
            {tones.map((tone) => (
              <IconView
                key={tone}
                icon={CheckIcon}
                tone={tone}
                variant={variant}
              />
            ))}
          </View>
        </StoryExample>
      ))}
    </View>
  );
});
