import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CityBoldIcon } from "../bold";
import { CityDuotoneIcon } from "../duotone";
import { CityFillIcon } from "../fill";
import { CityLightIcon } from "../light";
import { CityRegularIcon } from "../regular";
import { CityThinIcon } from "../thin";

export const CityIcon = memo(function City(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CityBoldIcon,
      duotone: CityDuotoneIcon,
      fill: CityFillIcon,
      light: CityLightIcon,
      regular: CityRegularIcon,
      thin: CityThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
