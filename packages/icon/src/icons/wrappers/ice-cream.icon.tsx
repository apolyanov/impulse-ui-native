import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { IceCreamBoldIcon } from "../bold/ice-cream-bold.icon";
import { IceCreamDuotoneIcon } from "../duotone/ice-cream-duotone.icon";
import { IceCreamFillIcon } from "../fill/ice-cream-fill.icon";
import { IceCreamLightIcon } from "../light/ice-cream-light.icon";
import { IceCreamRegularIcon } from "../regular/ice-cream-regular.icon";
import { IceCreamThinIcon } from "../thin/ice-cream-thin.icon";

export const IceCreamIcon = memo(function IceCream(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IceCreamBoldIcon,
      duotone: IceCreamDuotoneIcon,
      fill: IceCreamFillIcon,
      light: IceCreamLightIcon,
      regular: IceCreamRegularIcon,
      thin: IceCreamThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
