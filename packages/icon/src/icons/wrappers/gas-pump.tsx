import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GasPumpBold } from "../bold";
import { GasPumpDuotone } from "../duotone";
import { GasPumpFill } from "../fill";
import { GasPumpLight } from "../light";
import { GasPumpRegular } from "../regular";
import { GasPumpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GasPump = memo(function GasPump(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GasPumpBold,
      duotone: GasPumpDuotone,
      fill: GasPumpFill,
      light: GasPumpLight,
      regular: GasPumpRegular,
      thin: GasPumpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
