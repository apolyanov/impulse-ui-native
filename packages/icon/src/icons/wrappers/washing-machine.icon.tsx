import { createIcon } from "../../hocs/create-icon.hoc";
import { WashingMachineBoldIcon } from "../bold/washing-machine-bold.icon";
import { WashingMachineDuotoneIcon } from "../duotone/washing-machine-duotone.icon";
import { WashingMachineFillIcon } from "../fill/washing-machine-fill.icon";
import { WashingMachineLightIcon } from "../light/washing-machine-light.icon";
import { WashingMachineRegularIcon } from "../regular/washing-machine-regular.icon";
import { WashingMachineThinIcon } from "../thin/washing-machine-thin.icon";

export const WashingMachineIcon = createIcon("WashingMachine", {
  bold: WashingMachineBoldIcon,
  duotone: WashingMachineDuotoneIcon,
  fill: WashingMachineFillIcon,
  light: WashingMachineLightIcon,
  regular: WashingMachineRegularIcon,
  thin: WashingMachineThinIcon,
});
