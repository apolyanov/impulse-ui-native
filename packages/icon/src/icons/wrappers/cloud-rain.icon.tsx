import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudRainBoldIcon } from "../bold";
import { CloudRainDuotoneIcon } from "../duotone";
import { CloudRainFillIcon } from "../fill";
import { CloudRainLightIcon } from "../light";
import { CloudRainRegularIcon } from "../regular";
import { CloudRainThinIcon } from "../thin";

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
