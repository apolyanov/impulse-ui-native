import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeadCircuitBoldIcon } from "../bold";
import { HeadCircuitDuotoneIcon } from "../duotone";
import { HeadCircuitFillIcon } from "../fill";
import { HeadCircuitLightIcon } from "../light";
import { HeadCircuitRegularIcon } from "../regular";
import { HeadCircuitThinIcon } from "../thin";

export const HeadCircuitIcon = memo(function HeadCircuit(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeadCircuitBoldIcon,
      duotone: HeadCircuitDuotoneIcon,
      fill: HeadCircuitFillIcon,
      light: HeadCircuitLightIcon,
      regular: HeadCircuitRegularIcon,
      thin: HeadCircuitThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
