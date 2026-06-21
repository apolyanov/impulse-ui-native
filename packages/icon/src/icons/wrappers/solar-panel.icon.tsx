import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SolarPanelBoldIcon } from "../bold";
import { SolarPanelDuotoneIcon } from "../duotone";
import { SolarPanelFillIcon } from "../fill";
import { SolarPanelLightIcon } from "../light";
import { SolarPanelRegularIcon } from "../regular";
import { SolarPanelThinIcon } from "../thin";

export const SolarPanelIcon = memo(function SolarPanel(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SolarPanelBoldIcon,
      duotone: SolarPanelDuotoneIcon,
      fill: SolarPanelFillIcon,
      light: SolarPanelLightIcon,
      regular: SolarPanelRegularIcon,
      thin: SolarPanelThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
