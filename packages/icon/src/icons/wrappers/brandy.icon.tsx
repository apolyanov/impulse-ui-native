import { createIcon } from "../../hocs/create-icon.hoc";
import { BrandyBoldIcon } from "../bold/brandy-bold.icon";
import { BrandyDuotoneIcon } from "../duotone/brandy-duotone.icon";
import { BrandyFillIcon } from "../fill/brandy-fill.icon";
import { BrandyLightIcon } from "../light/brandy-light.icon";
import { BrandyRegularIcon } from "../regular/brandy-regular.icon";
import { BrandyThinIcon } from "../thin/brandy-thin.icon";

export const BrandyIcon = createIcon("Brandy", {
  bold: BrandyBoldIcon,
  duotone: BrandyDuotoneIcon,
  fill: BrandyFillIcon,
  light: BrandyLightIcon,
  regular: BrandyRegularIcon,
  thin: BrandyThinIcon,
});
