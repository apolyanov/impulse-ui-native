import { createIcon } from "../../hocs/create-icon.hoc";
import { ListBoldIcon } from "../bold/list-bold.icon";
import { ListDuotoneIcon } from "../duotone/list-duotone.icon";
import { ListFillIcon } from "../fill/list-fill.icon";
import { ListLightIcon } from "../light/list-light.icon";
import { ListRegularIcon } from "../regular/list-regular.icon";
import { ListThinIcon } from "../thin/list-thin.icon";

export const ListIcon = createIcon("List", {
  bold: ListBoldIcon,
  duotone: ListDuotoneIcon,
  fill: ListFillIcon,
  light: ListLightIcon,
  regular: ListRegularIcon,
  thin: ListThinIcon,
});
