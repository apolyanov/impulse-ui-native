import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SolarPanelBold } from "../bold";
import { SolarPanelDuotone } from "../duotone";
import { SolarPanelFill } from "../fill";
import { SolarPanelLight } from "../light";
import { SolarPanelRegular } from "../regular";
import { SolarPanelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SolarPanel = memo(function SolarPanel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SolarPanelBold,
      duotone: SolarPanelDuotone,
      fill: SolarPanelFill,
      light: SolarPanelLight,
      regular: SolarPanelRegular,
      thin: SolarPanelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
