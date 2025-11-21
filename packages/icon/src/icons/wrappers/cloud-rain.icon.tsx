import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudRainBoldIcon } from "../bold";
import { CloudRainDuotoneIcon } from "../duotone";
import { CloudRainFillIcon } from "../fill";
import { CloudRainLightIcon } from "../light";
import { CloudRainRegularIcon } from "../regular";
import { CloudRainThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudRainIcon = memo(function CloudRain(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudRainBoldIcon,
      duotone: CloudRainDuotoneIcon,
      fill: CloudRainFillIcon,
      light: CloudRainLightIcon,
      regular: CloudRainRegularIcon,
      thin: CloudRainThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
