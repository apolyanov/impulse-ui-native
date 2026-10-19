import { createIcon } from "../../hocs/create-icon.hoc";
import { AppWindowBoldIcon } from "../bold/app-window-bold.icon";
import { AppWindowDuotoneIcon } from "../duotone/app-window-duotone.icon";
import { AppWindowFillIcon } from "../fill/app-window-fill.icon";
import { AppWindowLightIcon } from "../light/app-window-light.icon";
import { AppWindowRegularIcon } from "../regular/app-window-regular.icon";
import { AppWindowThinIcon } from "../thin/app-window-thin.icon";

export const AppWindowIcon = createIcon("AppWindow", {
  bold: AppWindowBoldIcon,
  duotone: AppWindowDuotoneIcon,
  fill: AppWindowFillIcon,
  light: AppWindowLightIcon,
  regular: AppWindowRegularIcon,
  thin: AppWindowThinIcon,
});
