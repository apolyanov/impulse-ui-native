import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WashingMachineBoldIcon } from "../bold";
import { WashingMachineDuotoneIcon } from "../duotone";
import { WashingMachineFillIcon } from "../fill";
import { WashingMachineLightIcon } from "../light";
import { WashingMachineRegularIcon } from "../regular";
import { WashingMachineThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WashingMachineIcon = memo(function WashingMachine(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WashingMachineBoldIcon,
      duotone: WashingMachineDuotoneIcon,
      fill: WashingMachineFillIcon,
      light: WashingMachineLightIcon,
      regular: WashingMachineRegularIcon,
      thin: WashingMachineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
