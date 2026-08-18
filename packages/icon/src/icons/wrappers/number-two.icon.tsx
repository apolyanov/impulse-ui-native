import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberTwoBoldIcon } from "../bold/number-two-bold.icon";
import { NumberTwoDuotoneIcon } from "../duotone/number-two-duotone.icon";
import { NumberTwoFillIcon } from "../fill/number-two-fill.icon";
import { NumberTwoLightIcon } from "../light/number-two-light.icon";
import { NumberTwoRegularIcon } from "../regular/number-two-regular.icon";
import { NumberTwoThinIcon } from "../thin/number-two-thin.icon";

export const NumberTwoIcon = memo(function NumberTwo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberTwoBoldIcon,
      duotone: NumberTwoDuotoneIcon,
      fill: NumberTwoFillIcon,
      light: NumberTwoLightIcon,
      regular: NumberTwoRegularIcon,
      thin: NumberTwoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
