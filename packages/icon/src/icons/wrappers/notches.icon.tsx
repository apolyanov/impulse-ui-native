import { createIcon } from "../../hocs/create-icon.hoc";
import { NotchesBoldIcon } from "../bold/notches-bold.icon";
import { NotchesDuotoneIcon } from "../duotone/notches-duotone.icon";
import { NotchesFillIcon } from "../fill/notches-fill.icon";
import { NotchesLightIcon } from "../light/notches-light.icon";
import { NotchesRegularIcon } from "../regular/notches-regular.icon";
import { NotchesThinIcon } from "../thin/notches-thin.icon";

export const NotchesIcon = createIcon("Notches", {
  bold: NotchesBoldIcon,
  duotone: NotchesDuotoneIcon,
  fill: NotchesFillIcon,
  light: NotchesLightIcon,
  regular: NotchesRegularIcon,
  thin: NotchesThinIcon,
});
