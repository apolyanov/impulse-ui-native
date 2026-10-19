import { createIcon } from "../../hocs/create-icon.hoc";
import { CatBoldIcon } from "../bold/cat-bold.icon";
import { CatDuotoneIcon } from "../duotone/cat-duotone.icon";
import { CatFillIcon } from "../fill/cat-fill.icon";
import { CatLightIcon } from "../light/cat-light.icon";
import { CatRegularIcon } from "../regular/cat-regular.icon";
import { CatThinIcon } from "../thin/cat-thin.icon";

export const CatIcon = createIcon("Cat", {
  bold: CatBoldIcon,
  duotone: CatDuotoneIcon,
  fill: CatFillIcon,
  light: CatLightIcon,
  regular: CatRegularIcon,
  thin: CatThinIcon,
});
