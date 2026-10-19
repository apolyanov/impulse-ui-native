import { createIcon } from "../../hocs/create-icon.hoc";
import { CheeseBoldIcon } from "../bold/cheese-bold.icon";
import { CheeseDuotoneIcon } from "../duotone/cheese-duotone.icon";
import { CheeseFillIcon } from "../fill/cheese-fill.icon";
import { CheeseLightIcon } from "../light/cheese-light.icon";
import { CheeseRegularIcon } from "../regular/cheese-regular.icon";
import { CheeseThinIcon } from "../thin/cheese-thin.icon";

export const CheeseIcon = createIcon("Cheese", {
  bold: CheeseBoldIcon,
  duotone: CheeseDuotoneIcon,
  fill: CheeseFillIcon,
  light: CheeseLightIcon,
  regular: CheeseRegularIcon,
  thin: CheeseThinIcon,
});
