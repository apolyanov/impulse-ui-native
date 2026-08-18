import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { JoystickBoldIcon } from "../bold/joystick-bold.icon";
import { JoystickDuotoneIcon } from "../duotone/joystick-duotone.icon";
import { JoystickFillIcon } from "../fill/joystick-fill.icon";
import { JoystickLightIcon } from "../light/joystick-light.icon";
import { JoystickRegularIcon } from "../regular/joystick-regular.icon";
import { JoystickThinIcon } from "../thin/joystick-thin.icon";

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
