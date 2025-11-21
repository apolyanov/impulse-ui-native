import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberFourBoldIcon } from "../bold";
import { NumberFourDuotoneIcon } from "../duotone";
import { NumberFourFillIcon } from "../fill";
import { NumberFourLightIcon } from "../light";
import { NumberFourRegularIcon } from "../regular";
import { NumberFourThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberFourIcon = memo(function NumberFour(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberFourBoldIcon,
      duotone: NumberFourDuotoneIcon,
      fill: NumberFourFillIcon,
      light: NumberFourLightIcon,
      regular: NumberFourRegularIcon,
      thin: NumberFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
