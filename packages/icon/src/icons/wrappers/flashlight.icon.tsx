import { createIcon } from "../../hocs/create-icon.hoc";
import { FlashlightBoldIcon } from "../bold/flashlight-bold.icon";
import { FlashlightDuotoneIcon } from "../duotone/flashlight-duotone.icon";
import { FlashlightFillIcon } from "../fill/flashlight-fill.icon";
import { FlashlightLightIcon } from "../light/flashlight-light.icon";
import { FlashlightRegularIcon } from "../regular/flashlight-regular.icon";
import { FlashlightThinIcon } from "../thin/flashlight-thin.icon";

export const FlashlightIcon = createIcon("Flashlight", {
  bold: FlashlightBoldIcon,
  duotone: FlashlightDuotoneIcon,
  fill: FlashlightFillIcon,
  light: FlashlightLightIcon,
  regular: FlashlightRegularIcon,
  thin: FlashlightThinIcon,
});
