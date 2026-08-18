import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberEightBoldIcon } from "../bold/number-eight-bold.icon";
import { NumberEightDuotoneIcon } from "../duotone/number-eight-duotone.icon";
import { NumberEightFillIcon } from "../fill/number-eight-fill.icon";
import { NumberEightLightIcon } from "../light/number-eight-light.icon";
import { NumberEightRegularIcon } from "../regular/number-eight-regular.icon";
import { NumberEightThinIcon } from "../thin/number-eight-thin.icon";

export const NumberEightIcon = memo(function NumberEight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberEightBoldIcon,
      duotone: NumberEightDuotoneIcon,
      fill: NumberEightFillIcon,
      light: NumberEightLightIcon,
      regular: NumberEightRegularIcon,
      thin: NumberEightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
