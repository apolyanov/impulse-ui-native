import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberSevenBoldIcon } from "../bold/number-seven-bold.icon";
import { NumberSevenDuotoneIcon } from "../duotone/number-seven-duotone.icon";
import { NumberSevenFillIcon } from "../fill/number-seven-fill.icon";
import { NumberSevenLightIcon } from "../light/number-seven-light.icon";
import { NumberSevenRegularIcon } from "../regular/number-seven-regular.icon";
import { NumberSevenThinIcon } from "../thin/number-seven-thin.icon";

export const NumberSevenIcon = memo(function NumberSeven(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSevenBoldIcon,
      duotone: NumberSevenDuotoneIcon,
      fill: NumberSevenFillIcon,
      light: NumberSevenLightIcon,
      regular: NumberSevenRegularIcon,
      thin: NumberSevenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
