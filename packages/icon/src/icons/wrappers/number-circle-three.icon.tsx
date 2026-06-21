import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleThreeBoldIcon } from "../bold";
import { NumberCircleThreeDuotoneIcon } from "../duotone";
import { NumberCircleThreeFillIcon } from "../fill";
import { NumberCircleThreeLightIcon } from "../light";
import { NumberCircleThreeRegularIcon } from "../regular";
import { NumberCircleThreeThinIcon } from "../thin";

export const NumberCircleThreeIcon = memo(function NumberCircleThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleThreeBoldIcon,
      duotone: NumberCircleThreeDuotoneIcon,
      fill: NumberCircleThreeFillIcon,
      light: NumberCircleThreeLightIcon,
      regular: NumberCircleThreeRegularIcon,
      thin: NumberCircleThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
