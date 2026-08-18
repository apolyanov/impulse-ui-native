import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CallBellBoldIcon } from "../bold/call-bell-bold.icon";
import { CallBellDuotoneIcon } from "../duotone/call-bell-duotone.icon";
import { CallBellFillIcon } from "../fill/call-bell-fill.icon";
import { CallBellLightIcon } from "../light/call-bell-light.icon";
import { CallBellRegularIcon } from "../regular/call-bell-regular.icon";
import { CallBellThinIcon } from "../thin/call-bell-thin.icon";

export const CallBellIcon = memo(function CallBell(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CallBellBoldIcon,
      duotone: CallBellDuotoneIcon,
      fill: CallBellFillIcon,
      light: CallBellLightIcon,
      regular: CallBellRegularIcon,
      thin: CallBellThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
