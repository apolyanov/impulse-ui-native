import { createIcon } from "../../hocs/create-icon.hoc";
import { AtomBoldIcon } from "../bold/atom-bold.icon";
import { AtomDuotoneIcon } from "../duotone/atom-duotone.icon";
import { AtomFillIcon } from "../fill/atom-fill.icon";
import { AtomLightIcon } from "../light/atom-light.icon";
import { AtomRegularIcon } from "../regular/atom-regular.icon";
import { AtomThinIcon } from "../thin/atom-thin.icon";

export const AtomIcon = createIcon("Atom", {
  bold: AtomBoldIcon,
  duotone: AtomDuotoneIcon,
  fill: AtomFillIcon,
  light: AtomLightIcon,
  regular: AtomRegularIcon,
  thin: AtomThinIcon,
});
