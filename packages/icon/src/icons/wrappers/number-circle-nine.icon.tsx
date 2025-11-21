import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberCircleNineBoldIcon } from "../bold";
import { NumberCircleNineDuotoneIcon } from "../duotone";
import { NumberCircleNineFillIcon } from "../fill";
import { NumberCircleNineLightIcon } from "../light";
import { NumberCircleNineRegularIcon } from "../regular";
import { NumberCircleNineThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberCircleNineIcon = memo(function NumberCircleNine(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberCircleNineBoldIcon,
      duotone: NumberCircleNineDuotoneIcon,
      fill: NumberCircleNineFillIcon,
      light: NumberCircleNineLightIcon,
      regular: NumberCircleNineRegularIcon,
      thin: NumberCircleNineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
