import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudRainBold } from "../bold";
import { CloudRainDuotone } from "../duotone";
import { CloudRainFill } from "../fill";
import { CloudRainLight } from "../light";
import { CloudRainRegular } from "../regular";
import { CloudRainThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudRain = memo(function CloudRain(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudRainBold,
      duotone: CloudRainDuotone,
      fill: CloudRainFill,
      light: CloudRainLight,
      regular: CloudRainRegular,
      thin: CloudRainThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
