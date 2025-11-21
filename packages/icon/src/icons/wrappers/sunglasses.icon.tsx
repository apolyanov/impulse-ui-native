import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SunglassesBoldIcon } from "../bold";
import { SunglassesDuotoneIcon } from "../duotone";
import { SunglassesFillIcon } from "../fill";
import { SunglassesLightIcon } from "../light";
import { SunglassesRegularIcon } from "../regular";
import { SunglassesThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SunglassesIcon = memo(function Sunglasses(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SunglassesBoldIcon,
      duotone: SunglassesDuotoneIcon,
      fill: SunglassesFillIcon,
      light: SunglassesLightIcon,
      regular: SunglassesRegularIcon,
      thin: SunglassesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
