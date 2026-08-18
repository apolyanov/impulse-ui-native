import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WashingMachineBoldIcon } from "../bold/washing-machine-bold.icon";
import { WashingMachineDuotoneIcon } from "../duotone/washing-machine-duotone.icon";
import { WashingMachineFillIcon } from "../fill/washing-machine-fill.icon";
import { WashingMachineLightIcon } from "../light/washing-machine-light.icon";
import { WashingMachineRegularIcon } from "../regular/washing-machine-regular.icon";
import { WashingMachineThinIcon } from "../thin/washing-machine-thin.icon";

export const WashingMachineIcon = memo(function WashingMachine(
  props: IconWrapperProps,
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
