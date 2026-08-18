import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SolarRoofBoldIcon } from "../bold/solar-roof-bold.icon";
import { SolarRoofDuotoneIcon } from "../duotone/solar-roof-duotone.icon";
import { SolarRoofFillIcon } from "../fill/solar-roof-fill.icon";
import { SolarRoofLightIcon } from "../light/solar-roof-light.icon";
import { SolarRoofRegularIcon } from "../regular/solar-roof-regular.icon";
import { SolarRoofThinIcon } from "../thin/solar-roof-thin.icon";

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
