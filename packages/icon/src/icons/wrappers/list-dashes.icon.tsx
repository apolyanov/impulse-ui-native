import { createIcon } from "../../hocs/create-icon.hoc";
import { ListDashesBoldIcon } from "../bold/list-dashes-bold.icon";
import { ListDashesDuotoneIcon } from "../duotone/list-dashes-duotone.icon";
import { ListDashesFillIcon } from "../fill/list-dashes-fill.icon";
import { ListDashesLightIcon } from "../light/list-dashes-light.icon";
import { ListDashesRegularIcon } from "../regular/list-dashes-regular.icon";
import { ListDashesThinIcon } from "../thin/list-dashes-thin.icon";

export const ListDashesIcon = createIcon("ListDashes", {
  bold: ListDashesBoldIcon,
  duotone: ListDashesDuotoneIcon,
  fill: ListDashesFillIcon,
  light: ListDashesLightIcon,
  regular: ListDashesRegularIcon,
  thin: ListDashesThinIcon,
});
