import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ClockUserBoldIcon } from "../bold/clock-user-bold.icon";
import { ClockUserDuotoneIcon } from "../duotone/clock-user-duotone.icon";
import { ClockUserFillIcon } from "../fill/clock-user-fill.icon";
import { ClockUserLightIcon } from "../light/clock-user-light.icon";
import { ClockUserRegularIcon } from "../regular/clock-user-regular.icon";
import { ClockUserThinIcon } from "../thin/clock-user-thin.icon";

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
