import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SunglassesBold } from "../bold";
import { SunglassesDuotone } from "../duotone";
import { SunglassesFill } from "../fill";
import { SunglassesLight } from "../light";
import { SunglassesRegular } from "../regular";
import { SunglassesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sunglasses = memo(function Sunglasses(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SunglassesBold,
      duotone: SunglassesDuotone,
      fill: SunglassesFill,
      light: SunglassesLight,
      regular: SunglassesRegular,
      thin: SunglassesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
