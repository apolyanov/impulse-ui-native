import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CarrotBoldIcon } from "../bold/carrot-bold.icon";
import { CarrotDuotoneIcon } from "../duotone/carrot-duotone.icon";
import { CarrotFillIcon } from "../fill/carrot-fill.icon";
import { CarrotLightIcon } from "../light/carrot-light.icon";
import { CarrotRegularIcon } from "../regular/carrot-regular.icon";
import { CarrotThinIcon } from "../thin/carrot-thin.icon";

export const CarrotIcon = memo(function Carrot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarrotBoldIcon,
      duotone: CarrotDuotoneIcon,
      fill: CarrotFillIcon,
      light: CarrotLightIcon,
      regular: CarrotRegularIcon,
      thin: CarrotThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
