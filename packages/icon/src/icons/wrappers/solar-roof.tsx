import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SolarRoofBold } from "../bold";
import { SolarRoofDuotone } from "../duotone";
import { SolarRoofFill } from "../fill";
import { SolarRoofLight } from "../light";
import { SolarRoofRegular } from "../regular";
import { SolarRoofThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SolarRoof = memo(function SolarRoof(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SolarRoofBold,
      duotone: SolarRoofDuotone,
      fill: SolarRoofFill,
      light: SolarRoofLight,
      regular: SolarRoofRegular,
      thin: SolarRoofThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
