import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CityBoldIcon } from "../bold/city-bold.icon";
import { CityDuotoneIcon } from "../duotone/city-duotone.icon";
import { CityFillIcon } from "../fill/city-fill.icon";
import { CityLightIcon } from "../light/city-light.icon";
import { CityRegularIcon } from "../regular/city-regular.icon";
import { CityThinIcon } from "../thin/city-thin.icon";

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
