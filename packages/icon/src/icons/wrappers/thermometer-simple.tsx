import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThermometerSimpleBold } from "../bold";
import { ThermometerSimpleDuotone } from "../duotone";
import { ThermometerSimpleFill } from "../fill";
import { ThermometerSimpleLight } from "../light";
import { ThermometerSimpleRegular } from "../regular";
import { ThermometerSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThermometerSimple = memo(function ThermometerSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThermometerSimpleBold,
      duotone: ThermometerSimpleDuotone,
      fill: ThermometerSimpleFill,
      light: ThermometerSimpleLight,
      regular: ThermometerSimpleRegular,
      thin: ThermometerSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
