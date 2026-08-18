import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SwatchesBoldIcon } from "../bold/swatches-bold.icon";
import { SwatchesDuotoneIcon } from "../duotone/swatches-duotone.icon";
import { SwatchesFillIcon } from "../fill/swatches-fill.icon";
import { SwatchesLightIcon } from "../light/swatches-light.icon";
import { SwatchesRegularIcon } from "../regular/swatches-regular.icon";
import { SwatchesThinIcon } from "../thin/swatches-thin.icon";

export const SwatchesIcon = memo(function Swatches(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SwatchesBoldIcon,
      duotone: SwatchesDuotoneIcon,
      fill: SwatchesFillIcon,
      light: SwatchesLightIcon,
      regular: SwatchesRegularIcon,
      thin: SwatchesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
