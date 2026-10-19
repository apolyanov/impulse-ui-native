import { createIcon } from "../../hocs/create-icon.hoc";
import { HashBoldIcon } from "../bold/hash-bold.icon";
import { HashDuotoneIcon } from "../duotone/hash-duotone.icon";
import { HashFillIcon } from "../fill/hash-fill.icon";
import { HashLightIcon } from "../light/hash-light.icon";
import { HashRegularIcon } from "../regular/hash-regular.icon";
import { HashThinIcon } from "../thin/hash-thin.icon";

export const HashIcon = createIcon("Hash", {
  bold: HashBoldIcon,
  duotone: HashDuotoneIcon,
  fill: HashFillIcon,
  light: HashLightIcon,
  regular: HashRegularIcon,
  thin: HashThinIcon,
});
