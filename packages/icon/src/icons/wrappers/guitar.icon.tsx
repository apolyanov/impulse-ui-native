import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GuitarBoldIcon } from "../bold/guitar-bold.icon";
import { GuitarDuotoneIcon } from "../duotone/guitar-duotone.icon";
import { GuitarFillIcon } from "../fill/guitar-fill.icon";
import { GuitarLightIcon } from "../light/guitar-light.icon";
import { GuitarRegularIcon } from "../regular/guitar-regular.icon";
import { GuitarThinIcon } from "../thin/guitar-thin.icon";

export const GuitarIcon = memo(function Guitar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GuitarBoldIcon,
      duotone: GuitarDuotoneIcon,
      fill: GuitarFillIcon,
      light: GuitarLightIcon,
      regular: GuitarRegularIcon,
      thin: GuitarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
