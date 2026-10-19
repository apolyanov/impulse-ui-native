import { createIcon } from "../../hocs/create-icon.hoc";
import { ChurchBoldIcon } from "../bold/church-bold.icon";
import { ChurchDuotoneIcon } from "../duotone/church-duotone.icon";
import { ChurchFillIcon } from "../fill/church-fill.icon";
import { ChurchLightIcon } from "../light/church-light.icon";
import { ChurchRegularIcon } from "../regular/church-regular.icon";
import { ChurchThinIcon } from "../thin/church-thin.icon";

export const ChurchIcon = createIcon("Church", {
  bold: ChurchBoldIcon,
  duotone: ChurchDuotoneIcon,
  fill: ChurchFillIcon,
  light: ChurchLightIcon,
  regular: ChurchRegularIcon,
  thin: ChurchThinIcon,
});
