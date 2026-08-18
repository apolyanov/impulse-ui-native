import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CircuitryBoldIcon } from "../bold/circuitry-bold.icon";
import { CircuitryDuotoneIcon } from "../duotone/circuitry-duotone.icon";
import { CircuitryFillIcon } from "../fill/circuitry-fill.icon";
import { CircuitryLightIcon } from "../light/circuitry-light.icon";
import { CircuitryRegularIcon } from "../regular/circuitry-regular.icon";
import { CircuitryThinIcon } from "../thin/circuitry-thin.icon";

export const CircuitryIcon = memo(function Circuitry(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircuitryBoldIcon,
      duotone: CircuitryDuotoneIcon,
      fill: CircuitryFillIcon,
      light: CircuitryLightIcon,
      regular: CircuitryRegularIcon,
      thin: CircuitryThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
