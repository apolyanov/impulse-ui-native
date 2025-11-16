import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCenteredSlashBold } from "../bold";
import { ChatCenteredSlashDuotone } from "../duotone";
import { ChatCenteredSlashFill } from "../fill";
import { ChatCenteredSlashLight } from "../light";
import { ChatCenteredSlashRegular } from "../regular";
import { ChatCenteredSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCenteredSlash = memo(function ChatCenteredSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredSlashBold,
      duotone: ChatCenteredSlashDuotone,
      fill: ChatCenteredSlashFill,
      light: ChatCenteredSlashLight,
      regular: ChatCenteredSlashRegular,
      thin: ChatCenteredSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
