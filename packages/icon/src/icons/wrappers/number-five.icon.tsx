import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberFiveBoldIcon } from "../bold/number-five-bold.icon";
import { NumberFiveDuotoneIcon } from "../duotone/number-five-duotone.icon";
import { NumberFiveFillIcon } from "../fill/number-five-fill.icon";
import { NumberFiveLightIcon } from "../light/number-five-light.icon";
import { NumberFiveRegularIcon } from "../regular/number-five-regular.icon";
import { NumberFiveThinIcon } from "../thin/number-five-thin.icon";

export const NumberFiveIcon = memo(function NumberFive(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberFiveBoldIcon,
      duotone: NumberFiveDuotoneIcon,
      fill: NumberFiveFillIcon,
      light: NumberFiveLightIcon,
      regular: NumberFiveRegularIcon,
      thin: NumberFiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
