import { createIcon } from "../../hocs/create-icon.hoc";
import { BeerSteinBoldIcon } from "../bold/beer-stein-bold.icon";
import { BeerSteinDuotoneIcon } from "../duotone/beer-stein-duotone.icon";
import { BeerSteinFillIcon } from "../fill/beer-stein-fill.icon";
import { BeerSteinLightIcon } from "../light/beer-stein-light.icon";
import { BeerSteinRegularIcon } from "../regular/beer-stein-regular.icon";
import { BeerSteinThinIcon } from "../thin/beer-stein-thin.icon";

export const BeerSteinIcon = createIcon("BeerStein", {
  bold: BeerSteinBoldIcon,
  duotone: BeerSteinDuotoneIcon,
  fill: BeerSteinFillIcon,
  light: BeerSteinLightIcon,
  regular: BeerSteinRegularIcon,
  thin: BeerSteinThinIcon,
});
