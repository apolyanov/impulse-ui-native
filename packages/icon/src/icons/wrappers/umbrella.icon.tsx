import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UmbrellaBoldIcon } from "../bold/umbrella-bold.icon";
import { UmbrellaDuotoneIcon } from "../duotone/umbrella-duotone.icon";
import { UmbrellaFillIcon } from "../fill/umbrella-fill.icon";
import { UmbrellaLightIcon } from "../light/umbrella-light.icon";
import { UmbrellaRegularIcon } from "../regular/umbrella-regular.icon";
import { UmbrellaThinIcon } from "../thin/umbrella-thin.icon";

export const UmbrellaIcon = memo(function Umbrella(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UmbrellaBoldIcon,
      duotone: UmbrellaDuotoneIcon,
      fill: UmbrellaFillIcon,
      light: UmbrellaLightIcon,
      regular: UmbrellaRegularIcon,
      thin: UmbrellaThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
