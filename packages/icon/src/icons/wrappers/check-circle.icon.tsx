import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheckCircleBoldIcon } from "../bold/check-circle-bold.icon";
import { CheckCircleDuotoneIcon } from "../duotone/check-circle-duotone.icon";
import { CheckCircleFillIcon } from "../fill/check-circle-fill.icon";
import { CheckCircleLightIcon } from "../light/check-circle-light.icon";
import { CheckCircleRegularIcon } from "../regular/check-circle-regular.icon";
import { CheckCircleThinIcon } from "../thin/check-circle-thin.icon";

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
