import { createIcon } from "../../hocs/create-icon.hoc";
import { PianoKeysBoldIcon } from "../bold/piano-keys-bold.icon";
import { PianoKeysDuotoneIcon } from "../duotone/piano-keys-duotone.icon";
import { PianoKeysFillIcon } from "../fill/piano-keys-fill.icon";
import { PianoKeysLightIcon } from "../light/piano-keys-light.icon";
import { PianoKeysRegularIcon } from "../regular/piano-keys-regular.icon";
import { PianoKeysThinIcon } from "../thin/piano-keys-thin.icon";

export const PianoKeysIcon = createIcon("PianoKeys", {
  bold: PianoKeysBoldIcon,
  duotone: PianoKeysDuotoneIcon,
  fill: PianoKeysFillIcon,
  light: PianoKeysLightIcon,
  regular: PianoKeysRegularIcon,
  thin: PianoKeysThinIcon,
});
