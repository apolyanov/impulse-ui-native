import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotsThreeCircleBoldIcon } from "../bold";
import { DotsThreeCircleDuotoneIcon } from "../duotone";
import { DotsThreeCircleFillIcon } from "../fill";
import { DotsThreeCircleLightIcon } from "../light";
import { DotsThreeCircleRegularIcon } from "../regular";
import { DotsThreeCircleThinIcon } from "../thin";

export const DotsThreeCircleIcon = memo(function DotsThreeCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeCircleBoldIcon,
      duotone: DotsThreeCircleDuotoneIcon,
      fill: DotsThreeCircleFillIcon,
      light: DotsThreeCircleLightIcon,
      regular: DotsThreeCircleRegularIcon,
      thin: DotsThreeCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
