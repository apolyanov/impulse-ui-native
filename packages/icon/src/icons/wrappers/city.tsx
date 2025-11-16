import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CityBold } from "../bold";
import { CityDuotone } from "../duotone";
import { CityFill } from "../fill";
import { CityLight } from "../light";
import { CityRegular } from "../regular";
import { CityThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const City = memo(function City(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CityBold,
      duotone: CityDuotone,
      fill: CityFill,
      light: CityLight,
      regular: CityRegular,
      thin: CityThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
