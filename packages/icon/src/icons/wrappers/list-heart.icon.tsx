import { createIcon } from "../../hocs/create-icon.hoc";
import { ListHeartBoldIcon } from "../bold/list-heart-bold.icon";
import { ListHeartDuotoneIcon } from "../duotone/list-heart-duotone.icon";
import { ListHeartFillIcon } from "../fill/list-heart-fill.icon";
import { ListHeartLightIcon } from "../light/list-heart-light.icon";
import { ListHeartRegularIcon } from "../regular/list-heart-regular.icon";
import { ListHeartThinIcon } from "../thin/list-heart-thin.icon";

export const ListHeartIcon = createIcon("ListHeart", {
  bold: ListHeartBoldIcon,
  duotone: ListHeartDuotoneIcon,
  fill: ListHeartFillIcon,
  light: ListHeartLightIcon,
  regular: ListHeartRegularIcon,
  thin: ListHeartThinIcon,
});
