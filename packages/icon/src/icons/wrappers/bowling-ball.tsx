import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BowlingBallBold } from "../bold";
import { BowlingBallDuotone } from "../duotone";
import { BowlingBallFill } from "../fill";
import { BowlingBallLight } from "../light";
import { BowlingBallRegular } from "../regular";
import { BowlingBallThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BowlingBall = memo(function BowlingBall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BowlingBallBold,
      duotone: BowlingBallDuotone,
      fill: BowlingBallFill,
      light: BowlingBallLight,
      regular: BowlingBallRegular,
      thin: BowlingBallThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
