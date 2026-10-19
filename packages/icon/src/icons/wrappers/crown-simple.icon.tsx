import { createIcon } from "../../hocs/create-icon.hoc";
import { CrownSimpleBoldIcon } from "../bold/crown-simple-bold.icon";
import { CrownSimpleDuotoneIcon } from "../duotone/crown-simple-duotone.icon";
import { CrownSimpleFillIcon } from "../fill/crown-simple-fill.icon";
import { CrownSimpleLightIcon } from "../light/crown-simple-light.icon";
import { CrownSimpleRegularIcon } from "../regular/crown-simple-regular.icon";
import { CrownSimpleThinIcon } from "../thin/crown-simple-thin.icon";

export const CrownSimpleIcon = createIcon("CrownSimple", {
  bold: CrownSimpleBoldIcon,
  duotone: CrownSimpleDuotoneIcon,
  fill: CrownSimpleFillIcon,
  light: CrownSimpleLightIcon,
  regular: CrownSimpleRegularIcon,
  thin: CrownSimpleThinIcon,
});
