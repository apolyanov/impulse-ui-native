import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberEightBoldIcon } from "../bold";
import { NumberEightDuotoneIcon } from "../duotone";
import { NumberEightFillIcon } from "../fill";
import { NumberEightLightIcon } from "../light";
import { NumberEightRegularIcon } from "../regular";
import { NumberEightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberEightIcon = memo(function NumberEight(
  props: IconWrapperProps
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
