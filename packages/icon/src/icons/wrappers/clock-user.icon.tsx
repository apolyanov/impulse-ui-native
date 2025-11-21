import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ClockUserBoldIcon } from "../bold";
import { ClockUserDuotoneIcon } from "../duotone";
import { ClockUserFillIcon } from "../fill";
import { ClockUserLightIcon } from "../light";
import { ClockUserRegularIcon } from "../regular";
import { ClockUserThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ClockUserIcon = memo(function ClockUser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ClockUserBoldIcon,
      duotone: ClockUserDuotoneIcon,
      fill: ClockUserFillIcon,
      light: ClockUserLightIcon,
      regular: ClockUserRegularIcon,
      thin: ClockUserThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
