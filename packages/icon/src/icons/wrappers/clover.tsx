import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloverBold } from "../bold";
import { CloverDuotone } from "../duotone";
import { CloverFill } from "../fill";
import { CloverLight } from "../light";
import { CloverRegular } from "../regular";
import { CloverThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Clover = memo(function Clover(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloverBold,
      duotone: CloverDuotone,
      fill: CloverFill,
      light: CloverLight,
      regular: CloverRegular,
      thin: CloverThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
