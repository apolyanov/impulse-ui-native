import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EyeglassesBold } from "../bold";
import { EyeglassesDuotone } from "../duotone";
import { EyeglassesFill } from "../fill";
import { EyeglassesLight } from "../light";
import { EyeglassesRegular } from "../regular";
import { EyeglassesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Eyeglasses = memo(function Eyeglasses(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyeglassesBold,
      duotone: EyeglassesDuotone,
      fill: EyeglassesFill,
      light: EyeglassesLight,
      regular: EyeglassesRegular,
      thin: EyeglassesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
