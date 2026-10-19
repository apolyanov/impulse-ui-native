import { createIcon } from "../../hocs/create-icon.hoc";
import { ConfettiBoldIcon } from "../bold/confetti-bold.icon";
import { ConfettiDuotoneIcon } from "../duotone/confetti-duotone.icon";
import { ConfettiFillIcon } from "../fill/confetti-fill.icon";
import { ConfettiLightIcon } from "../light/confetti-light.icon";
import { ConfettiRegularIcon } from "../regular/confetti-regular.icon";
import { ConfettiThinIcon } from "../thin/confetti-thin.icon";

export const ConfettiIcon = createIcon("Confetti", {
  bold: ConfettiBoldIcon,
  duotone: ConfettiDuotoneIcon,
  fill: ConfettiFillIcon,
  light: ConfettiLightIcon,
  regular: ConfettiRegularIcon,
  thin: ConfettiThinIcon,
});
