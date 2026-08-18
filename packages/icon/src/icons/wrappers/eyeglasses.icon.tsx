import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EyeglassesBoldIcon } from "../bold/eyeglasses-bold.icon";
import { EyeglassesDuotoneIcon } from "../duotone/eyeglasses-duotone.icon";
import { EyeglassesFillIcon } from "../fill/eyeglasses-fill.icon";
import { EyeglassesLightIcon } from "../light/eyeglasses-light.icon";
import { EyeglassesRegularIcon } from "../regular/eyeglasses-regular.icon";
import { EyeglassesThinIcon } from "../thin/eyeglasses-thin.icon";

export const EyeglassesIcon = memo(function Eyeglasses(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyeglassesBoldIcon,
      duotone: EyeglassesDuotoneIcon,
      fill: EyeglassesFillIcon,
      light: EyeglassesLightIcon,
      regular: EyeglassesRegularIcon,
      thin: EyeglassesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
