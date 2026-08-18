import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UserSwitchBoldIcon } from "../bold/user-switch-bold.icon";
import { UserSwitchDuotoneIcon } from "../duotone/user-switch-duotone.icon";
import { UserSwitchFillIcon } from "../fill/user-switch-fill.icon";
import { UserSwitchLightIcon } from "../light/user-switch-light.icon";
import { UserSwitchRegularIcon } from "../regular/user-switch-regular.icon";
import { UserSwitchThinIcon } from "../thin/user-switch-thin.icon";

export const UserSwitchIcon = memo(function UserSwitch(
  props: IconWrapperProps,
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
