import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CloudRainBoldIcon } from "../bold/cloud-rain-bold.icon";
import { CloudRainDuotoneIcon } from "../duotone/cloud-rain-duotone.icon";
import { CloudRainFillIcon } from "../fill/cloud-rain-fill.icon";
import { CloudRainLightIcon } from "../light/cloud-rain-light.icon";
import { CloudRainRegularIcon } from "../regular/cloud-rain-regular.icon";
import { CloudRainThinIcon } from "../thin/cloud-rain-thin.icon";

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
