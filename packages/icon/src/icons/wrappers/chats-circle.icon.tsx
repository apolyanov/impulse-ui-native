import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatsCircleBoldIcon } from "../bold";
import { ChatsCircleDuotoneIcon } from "../duotone";
import { ChatsCircleFillIcon } from "../fill";
import { ChatsCircleLightIcon } from "../light";
import { ChatsCircleRegularIcon } from "../regular";
import { ChatsCircleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatsCircleIcon = memo(function ChatsCircle(
  props: IconWrapperProps
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
