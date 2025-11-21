import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberFiveBoldIcon } from "../bold";
import { NumberFiveDuotoneIcon } from "../duotone";
import { NumberFiveFillIcon } from "../fill";
import { NumberFiveLightIcon } from "../light";
import { NumberFiveRegularIcon } from "../regular";
import { NumberFiveThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberFiveIcon = memo(function NumberFive(
  props: IconWrapperProps
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
