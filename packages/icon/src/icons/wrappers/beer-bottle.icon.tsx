import { createIcon } from "../../hocs/create-icon.hoc";
import { BeerBottleBoldIcon } from "../bold/beer-bottle-bold.icon";
import { BeerBottleDuotoneIcon } from "../duotone/beer-bottle-duotone.icon";
import { BeerBottleFillIcon } from "../fill/beer-bottle-fill.icon";
import { BeerBottleLightIcon } from "../light/beer-bottle-light.icon";
import { BeerBottleRegularIcon } from "../regular/beer-bottle-regular.icon";
import { BeerBottleThinIcon } from "../thin/beer-bottle-thin.icon";

export const BeerBottleIcon = createIcon("BeerBottle", {
  bold: BeerBottleBoldIcon,
  duotone: BeerBottleDuotoneIcon,
  fill: BeerBottleFillIcon,
  light: BeerBottleLightIcon,
  regular: BeerBottleRegularIcon,
  thin: BeerBottleThinIcon,
});
