import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpinnerBallBold } from "../bold";
import { SpinnerBallDuotone } from "../duotone";
import { SpinnerBallFill } from "../fill";
import { SpinnerBallLight } from "../light";
import { SpinnerBallRegular } from "../regular";
import { SpinnerBallThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SpinnerBall = memo(function SpinnerBall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpinnerBallBold,
      duotone: SpinnerBallDuotone,
      fill: SpinnerBallFill,
      light: SpinnerBallLight,
      regular: SpinnerBallRegular,
      thin: SpinnerBallThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
