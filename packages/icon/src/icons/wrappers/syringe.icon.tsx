import { createIcon } from "../../hocs/create-icon.hoc";
import { SyringeBoldIcon } from "../bold/syringe-bold.icon";
import { SyringeDuotoneIcon } from "../duotone/syringe-duotone.icon";
import { SyringeFillIcon } from "../fill/syringe-fill.icon";
import { SyringeLightIcon } from "../light/syringe-light.icon";
import { SyringeRegularIcon } from "../regular/syringe-regular.icon";
import { SyringeThinIcon } from "../thin/syringe-thin.icon";

export const SyringeIcon = createIcon("Syringe", {
  bold: SyringeBoldIcon,
  duotone: SyringeDuotoneIcon,
  fill: SyringeFillIcon,
  light: SyringeLightIcon,
  regular: SyringeRegularIcon,
  thin: SyringeThinIcon,
});
