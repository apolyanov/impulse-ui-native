import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { JoystickBold } from "../bold";
import { JoystickDuotone } from "../duotone";
import { JoystickFill } from "../fill";
import { JoystickLight } from "../light";
import { JoystickRegular } from "../regular";
import { JoystickThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Joystick = memo(function Joystick(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: JoystickBold,
      duotone: JoystickDuotone,
      fill: JoystickFill,
      light: JoystickLight,
      regular: JoystickRegular,
      thin: JoystickThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
