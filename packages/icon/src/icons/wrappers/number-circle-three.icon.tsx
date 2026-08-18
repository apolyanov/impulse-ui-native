import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleThreeBoldIcon } from "../bold/number-circle-three-bold.icon";
import { NumberCircleThreeDuotoneIcon } from "../duotone/number-circle-three-duotone.icon";
import { NumberCircleThreeFillIcon } from "../fill/number-circle-three-fill.icon";
import { NumberCircleThreeLightIcon } from "../light/number-circle-three-light.icon";
import { NumberCircleThreeRegularIcon } from "../regular/number-circle-three-regular.icon";
import { NumberCircleThreeThinIcon } from "../thin/number-circle-three-thin.icon";

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
