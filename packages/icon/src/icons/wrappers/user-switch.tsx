import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserSwitchBold } from "../bold";
import { UserSwitchDuotone } from "../duotone";
import { UserSwitchFill } from "../fill";
import { UserSwitchLight } from "../light";
import { UserSwitchRegular } from "../regular";
import { UserSwitchThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserSwitch = memo(function UserSwitch(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserSwitchBold,
      duotone: UserSwitchDuotone,
      fill: UserSwitchFill,
      light: UserSwitchLight,
      regular: UserSwitchRegular,
      thin: UserSwitchThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
