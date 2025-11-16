import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CircuitryBold } from "../bold";
import { CircuitryDuotone } from "../duotone";
import { CircuitryFill } from "../fill";
import { CircuitryLight } from "../light";
import { CircuitryRegular } from "../regular";
import { CircuitryThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Circuitry = memo(function Circuitry(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircuitryBold,
      duotone: CircuitryDuotone,
      fill: CircuitryFill,
      light: CircuitryLight,
      regular: CircuitryRegular,
      thin: CircuitryThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
