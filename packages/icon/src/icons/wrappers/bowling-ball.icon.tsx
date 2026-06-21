import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BowlingBallBoldIcon } from "../bold";
import { BowlingBallDuotoneIcon } from "../duotone";
import { BowlingBallFillIcon } from "../fill";
import { BowlingBallLightIcon } from "../light";
import { BowlingBallRegularIcon } from "../regular";
import { BowlingBallThinIcon } from "../thin";

export const BowlingBallIcon = memo(function BowlingBall(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BowlingBallBoldIcon,
      duotone: BowlingBallDuotoneIcon,
      fill: BowlingBallFillIcon,
      light: BowlingBallLightIcon,
      regular: BowlingBallRegularIcon,
      thin: BowlingBallThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
