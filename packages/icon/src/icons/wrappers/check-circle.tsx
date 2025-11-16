import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CheckCircleBold } from "../bold";
import { CheckCircleDuotone } from "../duotone";
import { CheckCircleFill } from "../fill";
import { CheckCircleLight } from "../light";
import { CheckCircleRegular } from "../regular";
import { CheckCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CheckCircle = memo(function CheckCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckCircleBold,
      duotone: CheckCircleDuotone,
      fill: CheckCircleFill,
      light: CheckCircleLight,
      regular: CheckCircleRegular,
      thin: CheckCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
