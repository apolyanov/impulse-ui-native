import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeSimpleXBoldIcon } from "../bold";
import { GlobeSimpleXDuotoneIcon } from "../duotone";
import { GlobeSimpleXFillIcon } from "../fill";
import { GlobeSimpleXLightIcon } from "../light";
import { GlobeSimpleXRegularIcon } from "../regular";
import { GlobeSimpleXThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GlobeSimpleXIcon = memo(function GlobeSimpleX(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeSimpleXBoldIcon,
      duotone: GlobeSimpleXDuotoneIcon,
      fill: GlobeSimpleXFillIcon,
      light: GlobeSimpleXLightIcon,
      regular: GlobeSimpleXRegularIcon,
      thin: GlobeSimpleXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
