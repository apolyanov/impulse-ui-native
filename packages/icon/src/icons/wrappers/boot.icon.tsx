import { createIcon } from "../../hocs/create-icon.hoc";
import { BootBoldIcon } from "../bold/boot-bold.icon";
import { BootDuotoneIcon } from "../duotone/boot-duotone.icon";
import { BootFillIcon } from "../fill/boot-fill.icon";
import { BootLightIcon } from "../light/boot-light.icon";
import { BootRegularIcon } from "../regular/boot-regular.icon";
import { BootThinIcon } from "../thin/boot-thin.icon";

export const BootIcon = createIcon("Boot", {
  bold: BootBoldIcon,
  duotone: BootDuotoneIcon,
  fill: BootFillIcon,
  light: BootLightIcon,
  regular: BootRegularIcon,
  thin: BootThinIcon,
});
