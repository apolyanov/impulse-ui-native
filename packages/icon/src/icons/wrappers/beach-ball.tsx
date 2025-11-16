import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BeachBallBold } from "../bold";
import { BeachBallDuotone } from "../duotone";
import { BeachBallFill } from "../fill";
import { BeachBallLight } from "../light";
import { BeachBallRegular } from "../regular";
import { BeachBallThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BeachBall = memo(function BeachBall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeachBallBold,
      duotone: BeachBallDuotone,
      fill: BeachBallFill,
      light: BeachBallLight,
      regular: BeachBallRegular,
      thin: BeachBallThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
