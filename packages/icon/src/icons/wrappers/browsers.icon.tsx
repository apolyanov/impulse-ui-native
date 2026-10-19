import { createIcon } from "../../hocs/create-icon.hoc";
import { BrowsersBoldIcon } from "../bold/browsers-bold.icon";
import { BrowsersDuotoneIcon } from "../duotone/browsers-duotone.icon";
import { BrowsersFillIcon } from "../fill/browsers-fill.icon";
import { BrowsersLightIcon } from "../light/browsers-light.icon";
import { BrowsersRegularIcon } from "../regular/browsers-regular.icon";
import { BrowsersThinIcon } from "../thin/browsers-thin.icon";

export const BrowsersIcon = createIcon("Browsers", {
  bold: BrowsersBoldIcon,
  duotone: BrowsersDuotoneIcon,
  fill: BrowsersFillIcon,
  light: BrowsersLightIcon,
  regular: BrowsersRegularIcon,
  thin: BrowsersThinIcon,
});
