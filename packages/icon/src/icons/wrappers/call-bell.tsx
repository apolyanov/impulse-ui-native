import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CallBellBold } from "../bold";
import { CallBellDuotone } from "../duotone";
import { CallBellFill } from "../fill";
import { CallBellLight } from "../light";
import { CallBellRegular } from "../regular";
import { CallBellThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CallBell = memo(function CallBell(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CallBellBold,
      duotone: CallBellDuotone,
      fill: CallBellFill,
      light: CallBellLight,
      regular: CallBellRegular,
      thin: CallBellThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
