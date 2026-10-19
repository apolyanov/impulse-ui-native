import { createIcon } from "../../hocs/create-icon.hoc";
import { CloudMoonBoldIcon } from "../bold/cloud-moon-bold.icon";
import { CloudMoonDuotoneIcon } from "../duotone/cloud-moon-duotone.icon";
import { CloudMoonFillIcon } from "../fill/cloud-moon-fill.icon";
import { CloudMoonLightIcon } from "../light/cloud-moon-light.icon";
import { CloudMoonRegularIcon } from "../regular/cloud-moon-regular.icon";
import { CloudMoonThinIcon } from "../thin/cloud-moon-thin.icon";

export const CloudMoonIcon = createIcon("CloudMoon", {
  bold: CloudMoonBoldIcon,
  duotone: CloudMoonDuotoneIcon,
  fill: CloudMoonFillIcon,
  light: CloudMoonLightIcon,
  regular: CloudMoonRegularIcon,
  thin: CloudMoonThinIcon,
});
