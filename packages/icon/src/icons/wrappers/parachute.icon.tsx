import { createIcon } from "../../hocs/create-icon.hoc";
import { ParachuteBoldIcon } from "../bold/parachute-bold.icon";
import { ParachuteDuotoneIcon } from "../duotone/parachute-duotone.icon";
import { ParachuteFillIcon } from "../fill/parachute-fill.icon";
import { ParachuteLightIcon } from "../light/parachute-light.icon";
import { ParachuteRegularIcon } from "../regular/parachute-regular.icon";
import { ParachuteThinIcon } from "../thin/parachute-thin.icon";

export const ParachuteIcon = createIcon("Parachute", {
  bold: ParachuteBoldIcon,
  duotone: ParachuteDuotoneIcon,
  fill: ParachuteFillIcon,
  light: ParachuteLightIcon,
  regular: ParachuteRegularIcon,
  thin: ParachuteThinIcon,
});
