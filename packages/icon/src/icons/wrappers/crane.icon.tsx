import { createIcon } from "../../hocs/create-icon.hoc";
import { CraneBoldIcon } from "../bold/crane-bold.icon";
import { CraneDuotoneIcon } from "../duotone/crane-duotone.icon";
import { CraneFillIcon } from "../fill/crane-fill.icon";
import { CraneLightIcon } from "../light/crane-light.icon";
import { CraneRegularIcon } from "../regular/crane-regular.icon";
import { CraneThinIcon } from "../thin/crane-thin.icon";

export const CraneIcon = createIcon("Crane", {
  bold: CraneBoldIcon,
  duotone: CraneDuotoneIcon,
  fill: CraneFillIcon,
  light: CraneLightIcon,
  regular: CraneRegularIcon,
  thin: CraneThinIcon,
});
