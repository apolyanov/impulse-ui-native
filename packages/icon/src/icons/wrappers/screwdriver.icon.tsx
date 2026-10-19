import { createIcon } from "../../hocs/create-icon.hoc";
import { ScrewdriverBoldIcon } from "../bold/screwdriver-bold.icon";
import { ScrewdriverDuotoneIcon } from "../duotone/screwdriver-duotone.icon";
import { ScrewdriverFillIcon } from "../fill/screwdriver-fill.icon";
import { ScrewdriverLightIcon } from "../light/screwdriver-light.icon";
import { ScrewdriverRegularIcon } from "../regular/screwdriver-regular.icon";
import { ScrewdriverThinIcon } from "../thin/screwdriver-thin.icon";

export const ScrewdriverIcon = createIcon("Screwdriver", {
  bold: ScrewdriverBoldIcon,
  duotone: ScrewdriverDuotoneIcon,
  fill: ScrewdriverFillIcon,
  light: ScrewdriverLightIcon,
  regular: ScrewdriverRegularIcon,
  thin: ScrewdriverThinIcon,
});
