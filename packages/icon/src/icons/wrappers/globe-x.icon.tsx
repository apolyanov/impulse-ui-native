import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GlobeXBoldIcon } from "../bold/globe-x-bold.icon";
import { GlobeXDuotoneIcon } from "../duotone/globe-x-duotone.icon";
import { GlobeXFillIcon } from "../fill/globe-x-fill.icon";
import { GlobeXLightIcon } from "../light/globe-x-light.icon";
import { GlobeXRegularIcon } from "../regular/globe-x-regular.icon";
import { GlobeXThinIcon } from "../thin/globe-x-thin.icon";

export const GlobeXIcon = memo(function GlobeX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GlobeXBoldIcon,
      duotone: GlobeXDuotoneIcon,
      fill: GlobeXFillIcon,
      light: GlobeXLightIcon,
      regular: GlobeXRegularIcon,
      thin: GlobeXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
