import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberCircleNineBoldIcon } from "../bold/number-circle-nine-bold.icon";
import { NumberCircleNineDuotoneIcon } from "../duotone/number-circle-nine-duotone.icon";
import { NumberCircleNineFillIcon } from "../fill/number-circle-nine-fill.icon";
import { NumberCircleNineLightIcon } from "../light/number-circle-nine-light.icon";
import { NumberCircleNineRegularIcon } from "../regular/number-circle-nine-regular.icon";
import { NumberCircleNineThinIcon } from "../thin/number-circle-nine-thin.icon";

export const NumberCircleNineIcon = memo(function NumberCircleNine(
  props: IconWrapperProps,
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
