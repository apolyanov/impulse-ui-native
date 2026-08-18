import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ThermometerSimpleBoldIcon } from "../bold/thermometer-simple-bold.icon";
import { ThermometerSimpleDuotoneIcon } from "../duotone/thermometer-simple-duotone.icon";
import { ThermometerSimpleFillIcon } from "../fill/thermometer-simple-fill.icon";
import { ThermometerSimpleLightIcon } from "../light/thermometer-simple-light.icon";
import { ThermometerSimpleRegularIcon } from "../regular/thermometer-simple-regular.icon";
import { ThermometerSimpleThinIcon } from "../thin/thermometer-simple-thin.icon";

export const ThermometerSimpleIcon = memo(function ThermometerSimple(
  props: IconWrapperProps,
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
