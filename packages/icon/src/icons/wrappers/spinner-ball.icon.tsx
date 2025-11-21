import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpinnerBallBoldIcon } from "../bold";
import { SpinnerBallDuotoneIcon } from "../duotone";
import { SpinnerBallFillIcon } from "../fill";
import { SpinnerBallLightIcon } from "../light";
import { SpinnerBallRegularIcon } from "../regular";
import { SpinnerBallThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpinnerBallIcon = memo(function SpinnerBall(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpinnerBallBoldIcon,
      duotone: SpinnerBallDuotoneIcon,
      fill: SpinnerBallFillIcon,
      light: SpinnerBallLightIcon,
      regular: SpinnerBallRegularIcon,
      thin: SpinnerBallThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
