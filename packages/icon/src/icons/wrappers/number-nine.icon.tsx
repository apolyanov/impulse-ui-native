import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberNineBoldIcon } from "../bold/number-nine-bold.icon";
import { NumberNineDuotoneIcon } from "../duotone/number-nine-duotone.icon";
import { NumberNineFillIcon } from "../fill/number-nine-fill.icon";
import { NumberNineLightIcon } from "../light/number-nine-light.icon";
import { NumberNineRegularIcon } from "../regular/number-nine-regular.icon";
import { NumberNineThinIcon } from "../thin/number-nine-thin.icon";

export const NumberNineIcon = memo(function NumberNine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberNineBoldIcon,
      duotone: NumberNineDuotoneIcon,
      fill: NumberNineFillIcon,
      light: NumberNineLightIcon,
      regular: NumberNineRegularIcon,
      thin: NumberNineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
