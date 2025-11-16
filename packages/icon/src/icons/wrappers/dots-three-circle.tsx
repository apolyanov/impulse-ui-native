import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsThreeCircleBold } from "../bold";
import { DotsThreeCircleDuotone } from "../duotone";
import { DotsThreeCircleFill } from "../fill";
import { DotsThreeCircleLight } from "../light";
import { DotsThreeCircleRegular } from "../regular";
import { DotsThreeCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsThreeCircle = memo(function DotsThreeCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeCircleBold,
      duotone: DotsThreeCircleDuotone,
      fill: DotsThreeCircleFill,
      light: DotsThreeCircleLight,
      regular: DotsThreeCircleRegular,
      thin: DotsThreeCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
