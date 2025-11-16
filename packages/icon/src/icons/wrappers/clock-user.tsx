import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockUserBold } from "../bold";
import { ClockUserDuotone } from "../duotone";
import { ClockUserFill } from "../fill";
import { ClockUserLight } from "../light";
import { ClockUserRegular } from "../regular";
import { ClockUserThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClockUser = memo(function ClockUser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockUserBold,
      duotone: ClockUserDuotone,
      fill: ClockUserFill,
      light: ClockUserLight,
      regular: ClockUserRegular,
      thin: ClockUserThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
