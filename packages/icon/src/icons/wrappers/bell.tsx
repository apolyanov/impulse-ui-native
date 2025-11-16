import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BellBold } from "../bold";
import { BellDuotone } from "../duotone";
import { BellFill } from "../fill";
import { BellLight } from "../light";
import { BellRegular } from "../regular";
import { BellThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bell = memo(function Bell(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellBold,
      duotone: BellDuotone,
      fill: BellFill,
      light: BellLight,
      regular: BellRegular,
      thin: BellThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
