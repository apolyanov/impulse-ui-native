import { createIcon } from "../../hocs/create-icon.hoc";
import { FadersBoldIcon } from "../bold/faders-bold.icon";
import { FadersDuotoneIcon } from "../duotone/faders-duotone.icon";
import { FadersFillIcon } from "../fill/faders-fill.icon";
import { FadersLightIcon } from "../light/faders-light.icon";
import { FadersRegularIcon } from "../regular/faders-regular.icon";
import { FadersThinIcon } from "../thin/faders-thin.icon";

export const FadersIcon = createIcon("Faders", {
  bold: FadersBoldIcon,
  duotone: FadersDuotoneIcon,
  fill: FadersFillIcon,
  light: FadersLightIcon,
  regular: FadersRegularIcon,
  thin: FadersThinIcon,
});
