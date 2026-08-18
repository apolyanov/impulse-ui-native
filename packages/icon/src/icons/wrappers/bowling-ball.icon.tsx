import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BowlingBallBoldIcon } from "../bold/bowling-ball-bold.icon";
import { BowlingBallDuotoneIcon } from "../duotone/bowling-ball-duotone.icon";
import { BowlingBallFillIcon } from "../fill/bowling-ball-fill.icon";
import { BowlingBallLightIcon } from "../light/bowling-ball-light.icon";
import { BowlingBallRegularIcon } from "../regular/bowling-ball-regular.icon";
import { BowlingBallThinIcon } from "../thin/bowling-ball-thin.icon";

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
