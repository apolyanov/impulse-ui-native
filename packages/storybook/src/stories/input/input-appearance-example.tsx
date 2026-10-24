import { memo } from "react";

import type { InputProps } from "@impulse-ui-native/input";
import { EnvelopeIcon } from "@impulse-ui-native/icon/icons/envelope";
import { Input } from "@impulse-ui-native/input";
import { Typography, View } from "@impulse-ui-native/primitives";
import { useSpace } from "@impulse-ui-native/theme";

import { FieldToneOptions, FieldVariantOptions } from "../../constants";

export const InputAppearanceExample = memo(function InputAppearanceExample(
  props: InputProps,
) {
  const space = useSpace();

  return (
    <View gap={space.lg}>
      {FieldVariantOptions.map((variant) => (
        <View key={variant} gap={space.xs}>
          <Typography.Label>{variant}</Typography.Label>
          {FieldToneOptions.map((tone) => {
            const label = `${variant} / ${tone}`;

            return (
              <Input
                {...props}
                key={tone}
                label={label}
                variant={variant}
                tone={tone}
                PrefixIcon={EnvelopeIcon}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
});
