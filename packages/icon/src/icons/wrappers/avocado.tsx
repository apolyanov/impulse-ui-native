import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AvocadoBold } from "../bold";
import { AvocadoDuotone } from "../duotone";
import { AvocadoFill } from "../fill";
import { AvocadoLight } from "../light";
import { AvocadoRegular } from "../regular";
import { AvocadoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Avocado = memo(function Avocado(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AvocadoBold,
      duotone: AvocadoDuotone,
      fill: AvocadoFill,
      light: AvocadoLight,
      regular: AvocadoRegular,
      thin: AvocadoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
