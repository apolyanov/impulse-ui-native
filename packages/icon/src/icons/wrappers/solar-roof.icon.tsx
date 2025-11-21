import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SolarRoofBoldIcon } from "../bold";
import { SolarRoofDuotoneIcon } from "../duotone";
import { SolarRoofFillIcon } from "../fill";
import { SolarRoofLightIcon } from "../light";
import { SolarRoofRegularIcon } from "../regular";
import { SolarRoofThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SolarRoofIcon = memo(function SolarRoof(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SolarRoofBoldIcon,
      duotone: SolarRoofDuotoneIcon,
      fill: SolarRoofFillIcon,
      light: SolarRoofLightIcon,
      regular: SolarRoofRegularIcon,
      thin: SolarRoofThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
