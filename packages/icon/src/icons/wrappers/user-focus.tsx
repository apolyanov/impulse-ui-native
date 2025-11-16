import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UserFocusBold } from "../bold";
import { UserFocusDuotone } from "../duotone";
import { UserFocusFill } from "../fill";
import { UserFocusLight } from "../light";
import { UserFocusRegular } from "../regular";
import { UserFocusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const UserFocus = memo(function UserFocus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UserFocusBold,
      duotone: UserFocusDuotone,
      fill: UserFocusFill,
      light: UserFocusLight,
      regular: UserFocusRegular,
      thin: UserFocusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
