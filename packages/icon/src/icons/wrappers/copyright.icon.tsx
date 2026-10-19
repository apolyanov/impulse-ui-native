import { createIcon } from "../../hocs/create-icon.hoc";
import { CopyrightBoldIcon } from "../bold/copyright-bold.icon";
import { CopyrightDuotoneIcon } from "../duotone/copyright-duotone.icon";
import { CopyrightFillIcon } from "../fill/copyright-fill.icon";
import { CopyrightLightIcon } from "../light/copyright-light.icon";
import { CopyrightRegularIcon } from "../regular/copyright-regular.icon";
import { CopyrightThinIcon } from "../thin/copyright-thin.icon";

export const CopyrightIcon = createIcon("Copyright", {
  bold: CopyrightBoldIcon,
  duotone: CopyrightDuotoneIcon,
  fill: CopyrightFillIcon,
  light: CopyrightLightIcon,
  regular: CopyrightRegularIcon,
  thin: CopyrightThinIcon,
});
