import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RobotBoldIcon } from "../bold";
import { RobotDuotoneIcon } from "../duotone";
import { RobotFillIcon } from "../fill";
import { RobotLightIcon } from "../light";
import { RobotRegularIcon } from "../regular";
import { RobotThinIcon } from "../thin";

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
