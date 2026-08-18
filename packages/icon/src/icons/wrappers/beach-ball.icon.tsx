import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BeachBallBoldIcon } from "../bold/beach-ball-bold.icon";
import { BeachBallDuotoneIcon } from "../duotone/beach-ball-duotone.icon";
import { BeachBallFillIcon } from "../fill/beach-ball-fill.icon";
import { BeachBallLightIcon } from "../light/beach-ball-light.icon";
import { BeachBallRegularIcon } from "../regular/beach-ball-regular.icon";
import { BeachBallThinIcon } from "../thin/beach-ball-thin.icon";

export const BeachBallIcon = memo(function BeachBall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeachBallBoldIcon,
      duotone: BeachBallDuotoneIcon,
      fill: BeachBallFillIcon,
      light: BeachBallLightIcon,
      regular: BeachBallRegularIcon,
      thin: BeachBallThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
