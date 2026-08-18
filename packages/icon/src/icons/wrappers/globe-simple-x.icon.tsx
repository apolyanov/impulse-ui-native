import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GlobeSimpleXBoldIcon } from "../bold/globe-simple-x-bold.icon";
import { GlobeSimpleXDuotoneIcon } from "../duotone/globe-simple-x-duotone.icon";
import { GlobeSimpleXFillIcon } from "../fill/globe-simple-x-fill.icon";
import { GlobeSimpleXLightIcon } from "../light/globe-simple-x-light.icon";
import { GlobeSimpleXRegularIcon } from "../regular/globe-simple-x-regular.icon";
import { GlobeSimpleXThinIcon } from "../thin/globe-simple-x-thin.icon";

export const GlobeSimpleXIcon = memo(function GlobeSimpleX(
  props: IconWrapperProps,
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
