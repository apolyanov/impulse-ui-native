import { createIcon } from "../../hocs/create-icon.hoc";
import { YarnBoldIcon } from "../bold/yarn-bold.icon";
import { YarnDuotoneIcon } from "../duotone/yarn-duotone.icon";
import { YarnFillIcon } from "../fill/yarn-fill.icon";
import { YarnLightIcon } from "../light/yarn-light.icon";
import { YarnRegularIcon } from "../regular/yarn-regular.icon";
import { YarnThinIcon } from "../thin/yarn-thin.icon";

export const YarnIcon = createIcon("Yarn", {
  bold: YarnBoldIcon,
  duotone: YarnDuotoneIcon,
  fill: YarnFillIcon,
  light: YarnLightIcon,
  regular: YarnRegularIcon,
  thin: YarnThinIcon,
});
