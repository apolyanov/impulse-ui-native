import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleSixBoldIcon } from "../bold";
import { NumberCircleSixDuotoneIcon } from "../duotone";
import { NumberCircleSixFillIcon } from "../fill";
import { NumberCircleSixLightIcon } from "../light";
import { NumberCircleSixRegularIcon } from "../regular";
import { NumberCircleSixThinIcon } from "../thin";

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
