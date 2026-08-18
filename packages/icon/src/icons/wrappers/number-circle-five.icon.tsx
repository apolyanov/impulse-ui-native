import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleFiveBoldIcon } from "../bold/number-circle-five-bold.icon";
import { NumberCircleFiveDuotoneIcon } from "../duotone/number-circle-five-duotone.icon";
import { NumberCircleFiveFillIcon } from "../fill/number-circle-five-fill.icon";
import { NumberCircleFiveLightIcon } from "../light/number-circle-five-light.icon";
import { NumberCircleFiveRegularIcon } from "../regular/number-circle-five-regular.icon";
import { NumberCircleFiveThinIcon } from "../thin/number-circle-five-thin.icon";

export const NumberCircleFiveIcon = memo(function NumberCircleFive(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleFiveBoldIcon,
      duotone: NumberCircleFiveDuotoneIcon,
      fill: NumberCircleFiveFillIcon,
      light: NumberCircleFiveLightIcon,
      regular: NumberCircleFiveRegularIcon,
      thin: NumberCircleFiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
