import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleSevenBoldIcon } from "../bold/number-circle-seven-bold.icon";
import { NumberCircleSevenDuotoneIcon } from "../duotone/number-circle-seven-duotone.icon";
import { NumberCircleSevenFillIcon } from "../fill/number-circle-seven-fill.icon";
import { NumberCircleSevenLightIcon } from "../light/number-circle-seven-light.icon";
import { NumberCircleSevenRegularIcon } from "../regular/number-circle-seven-regular.icon";
import { NumberCircleSevenThinIcon } from "../thin/number-circle-seven-thin.icon";

export const NumberCircleSevenIcon = memo(function NumberCircleSeven(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleSevenBoldIcon,
      duotone: NumberCircleSevenDuotoneIcon,
      fill: NumberCircleSevenFillIcon,
      light: NumberCircleSevenLightIcon,
      regular: NumberCircleSevenRegularIcon,
      thin: NumberCircleSevenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
