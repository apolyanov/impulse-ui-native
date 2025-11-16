import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SoccerBallBold } from "../bold";
import { SoccerBallDuotone } from "../duotone";
import { SoccerBallFill } from "../fill";
import { SoccerBallLight } from "../light";
import { SoccerBallRegular } from "../regular";
import { SoccerBallThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SoccerBall = memo(function SoccerBall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SoccerBallBold,
      duotone: SoccerBallDuotone,
      fill: SoccerBallFill,
      light: SoccerBallLight,
      regular: SoccerBallRegular,
      thin: SoccerBallThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
