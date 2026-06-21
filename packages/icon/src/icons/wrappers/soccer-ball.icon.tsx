import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SoccerBallBoldIcon } from "../bold";
import { SoccerBallDuotoneIcon } from "../duotone";
import { SoccerBallFillIcon } from "../fill";
import { SoccerBallLightIcon } from "../light";
import { SoccerBallRegularIcon } from "../regular";
import { SoccerBallThinIcon } from "../thin";

export const SoccerBallIcon = memo(function SoccerBall(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SoccerBallBoldIcon,
      duotone: SoccerBallDuotoneIcon,
      fill: SoccerBallFillIcon,
      light: SoccerBallLightIcon,
      regular: SoccerBallRegularIcon,
      thin: SoccerBallThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
