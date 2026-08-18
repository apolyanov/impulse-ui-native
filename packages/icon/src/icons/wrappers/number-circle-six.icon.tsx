import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleSixBoldIcon } from "../bold/number-circle-six-bold.icon";
import { NumberCircleSixDuotoneIcon } from "../duotone/number-circle-six-duotone.icon";
import { NumberCircleSixFillIcon } from "../fill/number-circle-six-fill.icon";
import { NumberCircleSixLightIcon } from "../light/number-circle-six-light.icon";
import { NumberCircleSixRegularIcon } from "../regular/number-circle-six-regular.icon";
import { NumberCircleSixThinIcon } from "../thin/number-circle-six-thin.icon";

export const NumberCircleSixIcon = memo(function NumberCircleSix(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleSixBoldIcon,
      duotone: NumberCircleSixDuotoneIcon,
      fill: NumberCircleSixFillIcon,
      light: NumberCircleSixLightIcon,
      regular: NumberCircleSixRegularIcon,
      thin: NumberCircleSixThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
