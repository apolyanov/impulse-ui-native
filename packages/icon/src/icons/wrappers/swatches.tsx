import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SwatchesBold } from "../bold";
import { SwatchesDuotone } from "../duotone";
import { SwatchesFill } from "../fill";
import { SwatchesLight } from "../light";
import { SwatchesRegular } from "../regular";
import { SwatchesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Swatches = memo(function Swatches(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SwatchesBold,
      duotone: SwatchesDuotone,
      fill: SwatchesFill,
      light: SwatchesLight,
      regular: SwatchesRegular,
      thin: SwatchesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
