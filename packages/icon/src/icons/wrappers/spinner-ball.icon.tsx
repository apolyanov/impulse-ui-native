import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SpinnerBallBoldIcon } from "../bold/spinner-ball-bold.icon";
import { SpinnerBallDuotoneIcon } from "../duotone/spinner-ball-duotone.icon";
import { SpinnerBallFillIcon } from "../fill/spinner-ball-fill.icon";
import { SpinnerBallLightIcon } from "../light/spinner-ball-light.icon";
import { SpinnerBallRegularIcon } from "../regular/spinner-ball-regular.icon";
import { SpinnerBallThinIcon } from "../thin/spinner-ball-thin.icon";

export const SpinnerBallIcon = memo(function SpinnerBall(
  props: IconWrapperProps,
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
