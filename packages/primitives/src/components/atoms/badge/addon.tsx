import type { ComponentType } from "react";
import { memo, useMemo } from "react";

import type { IconProps } from "@impulse-ui-native/icon/types";
import { Icon } from "@impulse-ui-native/icon/components/icon";

import type { PressableCoreProps } from "../../../types";
import { Pressable } from "../pressable";
import { View } from "../view";

interface BadgeAddonProps {
  color: string | undefined;
  Content: ComponentType | undefined;
  hitSlop: number;
  iconSize: number;
  IconComponent: IconProps["icon"] | undefined;
  onPress: PressableCoreProps["onPress"] | undefined;
}

export const BadgeAddon = memo(function BadgeAddon({
  color,
  Content,
  hitSlop,
  iconSize,
  IconComponent,
  onPress,
}: BadgeAddonProps) {
  const Container = useMemo(() => (onPress ? Pressable : View), [onPress]);
  const content = useMemo(() => {
    if (Content) return <Content />;

    if (IconComponent) {
      return <Icon color={color} icon={IconComponent} size={iconSize} />;
    }

    return null;
  }, [color, Content, iconSize, IconComponent]);

  if (!content) return null;

  return (
    <Container hitSlop={hitSlop} onPress={onPress}>
      {content}
    </Container>
  );
});
