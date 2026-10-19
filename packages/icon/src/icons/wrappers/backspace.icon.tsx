import { createIcon } from "../../hocs/create-icon.hoc";
import { BackspaceBoldIcon } from "../bold/backspace-bold.icon";
import { BackspaceDuotoneIcon } from "../duotone/backspace-duotone.icon";
import { BackspaceFillIcon } from "../fill/backspace-fill.icon";
import { BackspaceLightIcon } from "../light/backspace-light.icon";
import { BackspaceRegularIcon } from "../regular/backspace-regular.icon";
import { BackspaceThinIcon } from "../thin/backspace-thin.icon";

export const BackspaceIcon = createIcon("Backspace", {
  bold: BackspaceBoldIcon,
  duotone: BackspaceDuotoneIcon,
  fill: BackspaceFillIcon,
  light: BackspaceLightIcon,
  regular: BackspaceRegularIcon,
  thin: BackspaceThinIcon,
});
