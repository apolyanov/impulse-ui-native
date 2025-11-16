import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeSimpleXBold } from "../bold";
import { GlobeSimpleXDuotone } from "../duotone";
import { GlobeSimpleXFill } from "../fill";
import { GlobeSimpleXLight } from "../light";
import { GlobeSimpleXRegular } from "../regular";
import { GlobeSimpleXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GlobeSimpleX = memo(function GlobeSimpleX(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeSimpleXBold,
      duotone: GlobeSimpleXDuotone,
      fill: GlobeSimpleXFill,
      light: GlobeSimpleXLight,
      regular: GlobeSimpleXRegular,
      thin: GlobeSimpleXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
