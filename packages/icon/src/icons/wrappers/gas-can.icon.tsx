import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GasCanBoldIcon } from "../bold/gas-can-bold.icon";
import { GasCanDuotoneIcon } from "../duotone/gas-can-duotone.icon";
import { GasCanFillIcon } from "../fill/gas-can-fill.icon";
import { GasCanLightIcon } from "../light/gas-can-light.icon";
import { GasCanRegularIcon } from "../regular/gas-can-regular.icon";
import { GasCanThinIcon } from "../thin/gas-can-thin.icon";

export const GasCanIcon = memo(function GasCan(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GasCanBoldIcon,
      duotone: GasCanDuotoneIcon,
      fill: GasCanFillIcon,
      light: GasCanLightIcon,
      regular: GasCanRegularIcon,
      thin: GasCanThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
