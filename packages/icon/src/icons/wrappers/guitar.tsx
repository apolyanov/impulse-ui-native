import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GuitarBold } from "../bold";
import { GuitarDuotone } from "../duotone";
import { GuitarFill } from "../fill";
import { GuitarLight } from "../light";
import { GuitarRegular } from "../regular";
import { GuitarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Guitar = memo(function Guitar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GuitarBold,
      duotone: GuitarDuotone,
      fill: GuitarFill,
      light: GuitarLight,
      regular: GuitarRegular,
      thin: GuitarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
