import { createIcon } from "../../hocs/create-icon.hoc";
import { ListChecksBoldIcon } from "../bold/list-checks-bold.icon";
import { ListChecksDuotoneIcon } from "../duotone/list-checks-duotone.icon";
import { ListChecksFillIcon } from "../fill/list-checks-fill.icon";
import { ListChecksLightIcon } from "../light/list-checks-light.icon";
import { ListChecksRegularIcon } from "../regular/list-checks-regular.icon";
import { ListChecksThinIcon } from "../thin/list-checks-thin.icon";

export const ListChecksIcon = createIcon("ListChecks", {
  bold: ListChecksBoldIcon,
  duotone: ListChecksDuotoneIcon,
  fill: ListChecksFillIcon,
  light: ListChecksLightIcon,
  regular: ListChecksRegularIcon,
  thin: ListChecksThinIcon,
});
