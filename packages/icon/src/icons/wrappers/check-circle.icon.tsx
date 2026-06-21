import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheckCircleBoldIcon } from "../bold";
import { CheckCircleDuotoneIcon } from "../duotone";
import { CheckCircleFillIcon } from "../fill";
import { CheckCircleLightIcon } from "../light";
import { CheckCircleRegularIcon } from "../regular";
import { CheckCircleThinIcon } from "../thin";

export const CheckCircleIcon = memo(function CheckCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckCircleBoldIcon,
      duotone: CheckCircleDuotoneIcon,
      fill: CheckCircleFillIcon,
      light: CheckCircleLightIcon,
      regular: CheckCircleRegularIcon,
      thin: CheckCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
