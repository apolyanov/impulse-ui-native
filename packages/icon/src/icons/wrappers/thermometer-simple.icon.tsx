import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThermometerSimpleBoldIcon } from "../bold";
import { ThermometerSimpleDuotoneIcon } from "../duotone";
import { ThermometerSimpleFillIcon } from "../fill";
import { ThermometerSimpleLightIcon } from "../light";
import { ThermometerSimpleRegularIcon } from "../regular";
import { ThermometerSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThermometerSimpleIcon = memo(function ThermometerSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThermometerSimpleBoldIcon,
      duotone: ThermometerSimpleDuotoneIcon,
      fill: ThermometerSimpleFillIcon,
      light: ThermometerSimpleLightIcon,
      regular: ThermometerSimpleRegularIcon,
      thin: ThermometerSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
