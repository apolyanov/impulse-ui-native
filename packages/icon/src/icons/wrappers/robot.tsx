import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RobotBold } from "../bold";
import { RobotDuotone } from "../duotone";
import { RobotFill } from "../fill";
import { RobotLight } from "../light";
import { RobotRegular } from "../regular";
import { RobotThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Robot = memo(function Robot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RobotBold,
      duotone: RobotDuotone,
      fill: RobotFill,
      light: RobotLight,
      regular: RobotRegular,
      thin: RobotThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
