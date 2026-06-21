import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberTwoBoldIcon } from "../bold";
import { NumberTwoDuotoneIcon } from "../duotone";
import { NumberTwoFillIcon } from "../fill";
import { NumberTwoLightIcon } from "../light";
import { NumberTwoRegularIcon } from "../regular";
import { NumberTwoThinIcon } from "../thin";

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
