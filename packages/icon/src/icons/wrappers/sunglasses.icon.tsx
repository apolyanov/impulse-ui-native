import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SunglassesBoldIcon } from "../bold/sunglasses-bold.icon";
import { SunglassesDuotoneIcon } from "../duotone/sunglasses-duotone.icon";
import { SunglassesFillIcon } from "../fill/sunglasses-fill.icon";
import { SunglassesLightIcon } from "../light/sunglasses-light.icon";
import { SunglassesRegularIcon } from "../regular/sunglasses-regular.icon";
import { SunglassesThinIcon } from "../thin/sunglasses-thin.icon";

export const SunglassesIcon = memo(function Sunglasses(
  props: IconWrapperProps,
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
