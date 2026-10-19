import { createIcon } from "../../hocs/create-icon.hoc";
import { ListNumbersBoldIcon } from "../bold/list-numbers-bold.icon";
import { ListNumbersDuotoneIcon } from "../duotone/list-numbers-duotone.icon";
import { ListNumbersFillIcon } from "../fill/list-numbers-fill.icon";
import { ListNumbersLightIcon } from "../light/list-numbers-light.icon";
import { ListNumbersRegularIcon } from "../regular/list-numbers-regular.icon";
import { ListNumbersThinIcon } from "../thin/list-numbers-thin.icon";

export const ListNumbersIcon = createIcon("ListNumbers", {
  bold: ListNumbersBoldIcon,
  duotone: ListNumbersDuotoneIcon,
  fill: ListNumbersFillIcon,
  light: ListNumbersLightIcon,
  regular: ListNumbersRegularIcon,
  thin: ListNumbersThinIcon,
});
