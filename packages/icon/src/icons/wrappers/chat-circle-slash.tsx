import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCircleSlashBold } from "../bold";
import { ChatCircleSlashDuotone } from "../duotone";
import { ChatCircleSlashFill } from "../fill";
import { ChatCircleSlashLight } from "../light";
import { ChatCircleSlashRegular } from "../regular";
import { ChatCircleSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCircleSlash = memo(function ChatCircleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleSlashBold,
      duotone: ChatCircleSlashDuotone,
      fill: ChatCircleSlashFill,
      light: ChatCircleSlashLight,
      regular: ChatCircleSlashRegular,
      thin: ChatCircleSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
