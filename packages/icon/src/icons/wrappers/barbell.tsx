import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BarbellBold } from "../bold";
import { BarbellDuotone } from "../duotone";
import { BarbellFill } from "../fill";
import { BarbellLight } from "../light";
import { BarbellRegular } from "../regular";
import { BarbellThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Barbell = memo(function Barbell(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BarbellBold,
      duotone: BarbellDuotone,
      fill: BarbellFill,
      light: BarbellLight,
      regular: BarbellRegular,
      thin: BarbellThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
