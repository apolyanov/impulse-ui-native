import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatSlashBold } from "../bold";
import { ChatSlashDuotone } from "../duotone";
import { ChatSlashFill } from "../fill";
import { ChatSlashLight } from "../light";
import { ChatSlashRegular } from "../regular";
import { ChatSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatSlash = memo(function ChatSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatSlashBold,
      duotone: ChatSlashDuotone,
      fill: ChatSlashFill,
      light: ChatSlashLight,
      regular: ChatSlashRegular,
      thin: ChatSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
