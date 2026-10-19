import { createIcon } from "../../hocs/create-icon.hoc";
import { SprayBottleBoldIcon } from "../bold/spray-bottle-bold.icon";
import { SprayBottleDuotoneIcon } from "../duotone/spray-bottle-duotone.icon";
import { SprayBottleFillIcon } from "../fill/spray-bottle-fill.icon";
import { SprayBottleLightIcon } from "../light/spray-bottle-light.icon";
import { SprayBottleRegularIcon } from "../regular/spray-bottle-regular.icon";
import { SprayBottleThinIcon } from "../thin/spray-bottle-thin.icon";

export const SprayBottleIcon = createIcon("SprayBottle", {
  bold: SprayBottleBoldIcon,
  duotone: SprayBottleDuotoneIcon,
  fill: SprayBottleFillIcon,
  light: SprayBottleLightIcon,
  regular: SprayBottleRegularIcon,
  thin: SprayBottleThinIcon,
});
