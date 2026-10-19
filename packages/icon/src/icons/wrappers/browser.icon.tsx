import { createIcon } from "../../hocs/create-icon.hoc";
import { BrowserBoldIcon } from "../bold/browser-bold.icon";
import { BrowserDuotoneIcon } from "../duotone/browser-duotone.icon";
import { BrowserFillIcon } from "../fill/browser-fill.icon";
import { BrowserLightIcon } from "../light/browser-light.icon";
import { BrowserRegularIcon } from "../regular/browser-regular.icon";
import { BrowserThinIcon } from "../thin/browser-thin.icon";

export const BrowserIcon = createIcon("Browser", {
  bold: BrowserBoldIcon,
  duotone: BrowserDuotoneIcon,
  fill: BrowserFillIcon,
  light: BrowserLightIcon,
  regular: BrowserRegularIcon,
  thin: BrowserThinIcon,
});
