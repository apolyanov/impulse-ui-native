import type { PropsWithChildren } from "react";
import { memo } from "react";

import {
  Typography,
  useColors,
  useRadii,
  useSpace,
  View,
} from "@impulse-ui-native/toolkit";

export interface StoryExamplePropDefinition {
  name: string;
  value: string;
  description?: string;
}

interface StoryExampleProps extends PropsWithChildren {
  title: string;
  description: string;
  props?: StoryExamplePropDefinition[];
  elevated?: boolean;
}

export const StoryExample = memo(function StoryExample({
  title,
  description,
  props,
  children,
  elevated,
}: StoryExampleProps) {
  const colors = useColors();
  const radii = useRadii();
  const space = useSpace();

  return (
    <View
      gap={space.md}
      padding={space.sm}
      borderRadius={elevated ? radii.sm : undefined}
      backgroundColor={elevated ? colors.surface.elevated.value : undefined}
      shadow={elevated ? "sm" : undefined}
    >
      <View gap={space.xs}>
        <Typography.Title4>{title}</Typography.Title4>
        <Typography.Master>{description}</Typography.Master>
      </View>

      {props?.length ? (
        <View gap={space.sm}>
          <Typography.Overline>Props</Typography.Overline>

          <View gap={space.xs}>
            {props.map((prop) => (
              <View
                key={prop.name}
                gap={space.xs}
                padding={space.xs}
                borderRadius={radii.md}
                backgroundColor={colors.surface.secondary.value}
              >
                <View
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={space.sm}
                >
                  <Typography.Label>{prop.name}</Typography.Label>

                  <View
                    paddingHorizontal={space.xs}
                    paddingVertical={space.xxs}
                    borderRadius={radii.sm}
                    backgroundColor={colors.surface.primary.value}
                  >
                    <Typography.Code>{prop.value}</Typography.Code>
                  </View>
                </View>

                {prop.description ? (
                  <Typography.Helper>{prop.description}</Typography.Helper>
                ) : null}
              </View>
            ))}
          </View>
        </View>
      ) : null}

      <View gap={space.xs}>
        <Typography.Caption>Preview</Typography.Caption>
        {children}
      </View>
    </View>
  );
});
