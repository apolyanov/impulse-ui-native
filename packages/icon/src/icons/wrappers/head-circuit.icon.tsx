import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HeadCircuitBoldIcon } from "../bold/head-circuit-bold.icon";
import { HeadCircuitDuotoneIcon } from "../duotone/head-circuit-duotone.icon";
import { HeadCircuitFillIcon } from "../fill/head-circuit-fill.icon";
import { HeadCircuitLightIcon } from "../light/head-circuit-light.icon";
import { HeadCircuitRegularIcon } from "../regular/head-circuit-regular.icon";
import { HeadCircuitThinIcon } from "../thin/head-circuit-thin.icon";

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
