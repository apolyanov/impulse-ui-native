import { createIcon } from "../../hocs/create-icon.hoc";
import { ListStarBoldIcon } from "../bold/list-star-bold.icon";
import { ListStarDuotoneIcon } from "../duotone/list-star-duotone.icon";
import { ListStarFillIcon } from "../fill/list-star-fill.icon";
import { ListStarLightIcon } from "../light/list-star-light.icon";
import { ListStarRegularIcon } from "../regular/list-star-regular.icon";
import { ListStarThinIcon } from "../thin/list-star-thin.icon";

export const ListStarIcon = createIcon("ListStar", {
  bold: ListStarBoldIcon,
  duotone: ListStarDuotoneIcon,
  fill: ListStarFillIcon,
  light: ListStarLightIcon,
  regular: ListStarRegularIcon,
  thin: ListStarThinIcon,
});
