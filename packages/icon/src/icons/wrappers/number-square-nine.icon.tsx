import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareNineBoldIcon } from "../bold/number-square-nine-bold.icon";
import { NumberSquareNineDuotoneIcon } from "../duotone/number-square-nine-duotone.icon";
import { NumberSquareNineFillIcon } from "../fill/number-square-nine-fill.icon";
import { NumberSquareNineLightIcon } from "../light/number-square-nine-light.icon";
import { NumberSquareNineRegularIcon } from "../regular/number-square-nine-regular.icon";
import { NumberSquareNineThinIcon } from "../thin/number-square-nine-thin.icon";

export const NumberSquareNineIcon = memo(function NumberSquareNine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareNineBoldIcon,
      duotone: NumberSquareNineDuotoneIcon,
      fill: NumberSquareNineFillIcon,
      light: NumberSquareNineLightIcon,
      regular: NumberSquareNineRegularIcon,
      thin: NumberSquareNineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
