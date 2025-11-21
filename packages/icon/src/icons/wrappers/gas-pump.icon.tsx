import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GasPumpBoldIcon } from "../bold";
import { GasPumpDuotoneIcon } from "../duotone";
import { GasPumpFillIcon } from "../fill";
import { GasPumpLightIcon } from "../light";
import { GasPumpRegularIcon } from "../regular";
import { GasPumpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
