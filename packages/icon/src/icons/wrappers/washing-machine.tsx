import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WashingMachineBold } from "../bold";
import { WashingMachineDuotone } from "../duotone";
import { WashingMachineFill } from "../fill";
import { WashingMachineLight } from "../light";
import { WashingMachineRegular } from "../regular";
import { WashingMachineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WashingMachine = memo(function WashingMachine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WashingMachineBold,
      duotone: WashingMachineDuotone,
      fill: WashingMachineFill,
      light: WashingMachineLight,
      regular: WashingMachineRegular,
      thin: WashingMachineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
