import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleEightBoldIcon } from "../bold/number-circle-eight-bold.icon";
import { NumberCircleEightDuotoneIcon } from "../duotone/number-circle-eight-duotone.icon";
import { NumberCircleEightFillIcon } from "../fill/number-circle-eight-fill.icon";
import { NumberCircleEightLightIcon } from "../light/number-circle-eight-light.icon";
import { NumberCircleEightRegularIcon } from "../regular/number-circle-eight-regular.icon";
import { NumberCircleEightThinIcon } from "../thin/number-circle-eight-thin.icon";

export const NumberCircleEightIcon = memo(function NumberCircleEight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleEightBoldIcon,
      duotone: NumberCircleEightDuotoneIcon,
      fill: NumberCircleEightFillIcon,
      light: NumberCircleEightLightIcon,
      regular: NumberCircleEightRegularIcon,
      thin: NumberCircleEightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
