import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleOneBoldIcon } from "../bold/number-circle-one-bold.icon";
import { NumberCircleOneDuotoneIcon } from "../duotone/number-circle-one-duotone.icon";
import { NumberCircleOneFillIcon } from "../fill/number-circle-one-fill.icon";
import { NumberCircleOneLightIcon } from "../light/number-circle-one-light.icon";
import { NumberCircleOneRegularIcon } from "../regular/number-circle-one-regular.icon";
import { NumberCircleOneThinIcon } from "../thin/number-circle-one-thin.icon";

export const NumberCircleOneIcon = memo(function NumberCircleOne(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleOneBoldIcon,
      duotone: NumberCircleOneDuotoneIcon,
      fill: NumberCircleOneFillIcon,
      light: NumberCircleOneLightIcon,
      regular: NumberCircleOneRegularIcon,
      thin: NumberCircleOneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
