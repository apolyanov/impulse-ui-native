import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSquareOneBoldIcon } from "../bold/number-square-one-bold.icon";
import { NumberSquareOneDuotoneIcon } from "../duotone/number-square-one-duotone.icon";
import { NumberSquareOneFillIcon } from "../fill/number-square-one-fill.icon";
import { NumberSquareOneLightIcon } from "../light/number-square-one-light.icon";
import { NumberSquareOneRegularIcon } from "../regular/number-square-one-regular.icon";
import { NumberSquareOneThinIcon } from "../thin/number-square-one-thin.icon";

export const NumberSquareOneIcon = memo(function NumberSquareOne(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareOneBoldIcon,
      duotone: NumberSquareOneDuotoneIcon,
      fill: NumberSquareOneFillIcon,
      light: NumberSquareOneLightIcon,
      regular: NumberSquareOneRegularIcon,
      thin: NumberSquareOneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
