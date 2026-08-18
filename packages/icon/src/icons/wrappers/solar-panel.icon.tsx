import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SolarPanelBoldIcon } from "../bold/solar-panel-bold.icon";
import { SolarPanelDuotoneIcon } from "../duotone/solar-panel-duotone.icon";
import { SolarPanelFillIcon } from "../fill/solar-panel-fill.icon";
import { SolarPanelLightIcon } from "../light/solar-panel-light.icon";
import { SolarPanelRegularIcon } from "../regular/solar-panel-regular.icon";
import { SolarPanelThinIcon } from "../thin/solar-panel-thin.icon";

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
