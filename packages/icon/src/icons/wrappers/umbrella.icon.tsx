import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UmbrellaBoldIcon } from "../bold";
import { UmbrellaDuotoneIcon } from "../duotone";
import { UmbrellaFillIcon } from "../fill";
import { UmbrellaLightIcon } from "../light";
import { UmbrellaRegularIcon } from "../regular";
import { UmbrellaThinIcon } from "../thin";

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
