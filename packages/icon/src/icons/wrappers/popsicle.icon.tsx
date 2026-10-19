import { createIcon } from "../../hocs/create-icon.hoc";
import { PopsicleBoldIcon } from "../bold/popsicle-bold.icon";
import { PopsicleDuotoneIcon } from "../duotone/popsicle-duotone.icon";
import { PopsicleFillIcon } from "../fill/popsicle-fill.icon";
import { PopsicleLightIcon } from "../light/popsicle-light.icon";
import { PopsicleRegularIcon } from "../regular/popsicle-regular.icon";
import { PopsicleThinIcon } from "../thin/popsicle-thin.icon";

export const PopsicleIcon = createIcon("Popsicle", {
  bold: PopsicleBoldIcon,
  duotone: PopsicleDuotoneIcon,
  fill: PopsicleFillIcon,
  light: PopsicleLightIcon,
  regular: PopsicleRegularIcon,
  thin: PopsicleThinIcon,
});
