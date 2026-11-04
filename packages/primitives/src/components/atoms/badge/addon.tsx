import { memo, useMemo } from "react";

import { Icon } from "@impulse-ui-native/icon";

import type { BadgeAddonProps } from "../../../types/badge-addon.types";
import { Pressable } from "../pressable";
import { View } from "../view";

export const BadgeAddon = memo(function BadgeAddon({
  color,
  Content,
  hitSlop,
  iconSize,
  IconComponent,
  onPress,
}: BadgeAddonProps) {
  const Container = onPress ? Pressable : View;
  const content = useMemo(() => {
    if (Content) {
      return <Content />;
    }

    if (IconComponent) {
      return <Icon color={color} icon={IconComponent} size={iconSize} />;
    }

    return null;
  }, [color, Content, iconSize, IconComponent]);

  if (!content) {
    return null;
  }

  return (
    <Container hitSlop={hitSlop} onPress={onPress}>
      {content}
    </Container>
  );
});
