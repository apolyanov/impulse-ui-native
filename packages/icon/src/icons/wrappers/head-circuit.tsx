import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeadCircuitBold } from "../bold";
import { HeadCircuitDuotone } from "../duotone";
import { HeadCircuitFill } from "../fill";
import { HeadCircuitLight } from "../light";
import { HeadCircuitRegular } from "../regular";
import { HeadCircuitThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HeadCircuit = memo(function HeadCircuit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeadCircuitBold,
      duotone: HeadCircuitDuotone,
      fill: HeadCircuitFill,
      light: HeadCircuitLight,
      regular: HeadCircuitRegular,
      thin: HeadCircuitThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
