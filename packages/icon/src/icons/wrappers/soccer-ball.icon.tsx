import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SoccerBallBoldIcon } from "../bold/soccer-ball-bold.icon";
import { SoccerBallDuotoneIcon } from "../duotone/soccer-ball-duotone.icon";
import { SoccerBallFillIcon } from "../fill/soccer-ball-fill.icon";
import { SoccerBallLightIcon } from "../light/soccer-ball-light.icon";
import { SoccerBallRegularIcon } from "../regular/soccer-ball-regular.icon";
import { SoccerBallThinIcon } from "../thin/soccer-ball-thin.icon";

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
