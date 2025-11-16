import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleSixBold } from "../bold";
import { NumberCircleSixDuotone } from "../duotone";
import { NumberCircleSixFill } from "../fill";
import { NumberCircleSixLight } from "../light";
import { NumberCircleSixRegular } from "../regular";
import { NumberCircleSixThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleSix = memo(function NumberCircleSix(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleSixBold,
      duotone: NumberCircleSixDuotone,
      fill: NumberCircleSixFill,
      light: NumberCircleSixLight,
      regular: NumberCircleSixRegular,
      thin: NumberCircleSixThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
