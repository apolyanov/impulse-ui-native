import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RobotBoldIcon } from "../bold/robot-bold.icon";
import { RobotDuotoneIcon } from "../duotone/robot-duotone.icon";
import { RobotFillIcon } from "../fill/robot-fill.icon";
import { RobotLightIcon } from "../light/robot-light.icon";
import { RobotRegularIcon } from "../regular/robot-regular.icon";
import { RobotThinIcon } from "../thin/robot-thin.icon";

export const RobotIcon = memo(function Robot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RobotBoldIcon,
      duotone: RobotDuotoneIcon,
      fill: RobotFillIcon,
      light: RobotLightIcon,
      regular: RobotRegularIcon,
      thin: RobotThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
