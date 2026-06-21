import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleOneBoldIcon } from "../bold";
import { NumberCircleOneDuotoneIcon } from "../duotone";
import { NumberCircleOneFillIcon } from "../fill";
import { NumberCircleOneLightIcon } from "../light";
import { NumberCircleOneRegularIcon } from "../regular";
import { NumberCircleOneThinIcon } from "../thin";

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
