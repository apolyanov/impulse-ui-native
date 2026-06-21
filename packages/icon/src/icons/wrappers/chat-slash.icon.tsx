import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatSlashBoldIcon } from "../bold";
import { ChatSlashDuotoneIcon } from "../duotone";
import { ChatSlashFillIcon } from "../fill";
import { ChatSlashLightIcon } from "../light";
import { ChatSlashRegularIcon } from "../regular";
import { ChatSlashThinIcon } from "../thin";

export const ChatSlashIcon = memo(function ChatSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatSlashBoldIcon,
      duotone: ChatSlashDuotoneIcon,
      fill: ChatSlashFillIcon,
      light: ChatSlashLightIcon,
      regular: ChatSlashRegularIcon,
      thin: ChatSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
