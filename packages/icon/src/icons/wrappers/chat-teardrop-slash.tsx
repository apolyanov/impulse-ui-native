import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatTeardropSlashBold } from "../bold";
import { ChatTeardropSlashDuotone } from "../duotone";
import { ChatTeardropSlashFill } from "../fill";
import { ChatTeardropSlashLight } from "../light";
import { ChatTeardropSlashRegular } from "../regular";
import { ChatTeardropSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatTeardropSlash = memo(function ChatTeardropSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTeardropSlashBold,
      duotone: ChatTeardropSlashDuotone,
      fill: ChatTeardropSlashFill,
      light: ChatTeardropSlashLight,
      regular: ChatTeardropSlashRegular,
      thin: ChatTeardropSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
