import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GlobeXBoldIcon } from "../bold";
import { GlobeXDuotoneIcon } from "../duotone";
import { GlobeXFillIcon } from "../fill";
import { GlobeXLightIcon } from "../light";
import { GlobeXRegularIcon } from "../regular";
import { GlobeXThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
