import type { PropsWithChildren } from "react";
import { memo } from "react";
import { ScrollView } from "react-native";

import { Typography, useSpace, View } from "@impulse-ui-native/toolkit";

interface StoryDocumentationPageProps extends PropsWithChildren {
  title: string;
  description?: string;
}

export const StoryDocumentationPage = memo(function StoryDocumentationPage({
  title,
  description,
  children,
}: StoryDocumentationPageProps) {
  const space = useSpace();

  return (
    <ScrollView>
      <View gap={space.md} padding={space.sm}>
        <View gap={space.xs}>
          <Typography.Title2>{title}</Typography.Title2>

          {description ? (
            <Typography.Master>{description}</Typography.Master>
          ) : null}
        </View>

        <View gap={space.md}>{children}</View>
      </View>
    </ScrollView>
  );
});
