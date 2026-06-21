import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareNineBoldIcon } from "../bold";
import { NumberSquareNineDuotoneIcon } from "../duotone";
import { NumberSquareNineFillIcon } from "../fill";
import { NumberSquareNineLightIcon } from "../light";
import { NumberSquareNineRegularIcon } from "../regular";
import { NumberSquareNineThinIcon } from "../thin";

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
