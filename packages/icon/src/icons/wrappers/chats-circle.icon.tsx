import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatsCircleBoldIcon } from "../bold/chats-circle-bold.icon";
import { ChatsCircleDuotoneIcon } from "../duotone/chats-circle-duotone.icon";
import { ChatsCircleFillIcon } from "../fill/chats-circle-fill.icon";
import { ChatsCircleLightIcon } from "../light/chats-circle-light.icon";
import { ChatsCircleRegularIcon } from "../regular/chats-circle-regular.icon";
import { ChatsCircleThinIcon } from "../thin/chats-circle-thin.icon";

export const ChatsCircleIcon = memo(function ChatsCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatsCircleBoldIcon,
      duotone: ChatsCircleDuotoneIcon,
      fill: ChatsCircleFillIcon,
      light: ChatsCircleLightIcon,
      regular: ChatsCircleRegularIcon,
      thin: ChatsCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
