import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CarrotBoldIcon } from "../bold";
import { CarrotDuotoneIcon } from "../duotone";
import { CarrotFillIcon } from "../fill";
import { CarrotLightIcon } from "../light";
import { CarrotRegularIcon } from "../regular";
import { CarrotThinIcon } from "../thin";

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
