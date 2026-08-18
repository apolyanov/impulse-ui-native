import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GasPumpBoldIcon } from "../bold/gas-pump-bold.icon";
import { GasPumpDuotoneIcon } from "../duotone/gas-pump-duotone.icon";
import { GasPumpFillIcon } from "../fill/gas-pump-fill.icon";
import { GasPumpLightIcon } from "../light/gas-pump-light.icon";
import { GasPumpRegularIcon } from "../regular/gas-pump-regular.icon";
import { GasPumpThinIcon } from "../thin/gas-pump-thin.icon";

export const GasPumpIcon = memo(function GasPump(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GasPumpBoldIcon,
      duotone: GasPumpDuotoneIcon,
      fill: GasPumpFillIcon,
      light: GasPumpLightIcon,
      regular: GasPumpRegularIcon,
      thin: GasPumpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
