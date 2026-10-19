import { createIcon } from "../../hocs/create-icon.hoc";
import { ListPlusBoldIcon } from "../bold/list-plus-bold.icon";
import { ListPlusDuotoneIcon } from "../duotone/list-plus-duotone.icon";
import { ListPlusFillIcon } from "../fill/list-plus-fill.icon";
import { ListPlusLightIcon } from "../light/list-plus-light.icon";
import { ListPlusRegularIcon } from "../regular/list-plus-regular.icon";
import { ListPlusThinIcon } from "../thin/list-plus-thin.icon";

export const ListPlusIcon = createIcon("ListPlus", {
  bold: ListPlusBoldIcon,
  duotone: ListPlusDuotoneIcon,
  fill: ListPlusFillIcon,
  light: ListPlusLightIcon,
  regular: ListPlusRegularIcon,
  thin: ListPlusThinIcon,
});
