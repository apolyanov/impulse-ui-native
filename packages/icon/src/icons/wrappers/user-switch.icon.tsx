import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserSwitchBoldIcon } from "../bold";
import { UserSwitchDuotoneIcon } from "../duotone";
import { UserSwitchFillIcon } from "../fill";
import { UserSwitchLightIcon } from "../light";
import { UserSwitchRegularIcon } from "../regular";
import { UserSwitchThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserSwitchIcon = memo(function UserSwitch(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserSwitchBoldIcon,
      duotone: UserSwitchDuotoneIcon,
      fill: UserSwitchFillIcon,
      light: UserSwitchLightIcon,
      regular: UserSwitchRegularIcon,
      thin: UserSwitchThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
