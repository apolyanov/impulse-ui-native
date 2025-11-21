import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { JoystickBoldIcon } from "../bold";
import { JoystickDuotoneIcon } from "../duotone";
import { JoystickFillIcon } from "../fill";
import { JoystickLightIcon } from "../light";
import { JoystickRegularIcon } from "../regular";
import { JoystickThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const JoystickIcon = memo(function Joystick(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: JoystickBoldIcon,
      duotone: JoystickDuotoneIcon,
      fill: JoystickFillIcon,
      light: JoystickLightIcon,
      regular: JoystickRegularIcon,
      thin: JoystickThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
