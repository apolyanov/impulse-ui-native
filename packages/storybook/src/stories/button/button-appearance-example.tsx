import { memo } from "react";

import type { ButtonProps } from "@impulse-ui-native/primitives";
import { SparkleIcon } from "@impulse-ui-native/icon/icons/sparkle";
import {
  Button,
  IconButton,
  Typography,
  View,
} from "@impulse-ui-native/primitives";
import { useSpace } from "@impulse-ui-native/theme";

import { ActionVariantOptions, ButtonToneOptions } from "../../constants";

export const ButtonAppearanceExample = memo(function ButtonAppearanceExample({
  size = "medium",
  disabled,
  loading,
}: Pick<ButtonProps, "size" | "disabled" | "loading">) {
  const space = useSpace();

  return (
    <View gap={space.lg}>
      {ActionVariantOptions.map((variant) => (
        <View key={variant} gap={space.xs}>
          <Typography.Label>{variant}</Typography.Label>
          {ButtonToneOptions.map((tone) => (
            <View
              key={tone}
              flexDirection="row"
              alignItems="center"
              gap={space.xs}
            >
              <View flex={1}>
                <Button
                  size={size}
                  variant={variant}
                  tone={tone}
                  disabled={disabled}
                  loading={loading}
                >
                  {tone}
                </Button>
              </View>
              <IconButton
                icon={SparkleIcon}
                size={size}
                variant={variant}
                tone={tone}
                disabled={disabled}
                loading={loading}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
});
