import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCircleSlashBoldIcon } from "../bold";
import { ChatCircleSlashDuotoneIcon } from "../duotone";
import { ChatCircleSlashFillIcon } from "../fill";
import { ChatCircleSlashLightIcon } from "../light";
import { ChatCircleSlashRegularIcon } from "../regular";
import { ChatCircleSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCircleSlashIcon = memo(function ChatCircleSlash(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleSlashBoldIcon,
      duotone: ChatCircleSlashDuotoneIcon,
      fill: ChatCircleSlashFillIcon,
      light: ChatCircleSlashLightIcon,
      regular: ChatCircleSlashRegularIcon,
      thin: ChatCircleSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
