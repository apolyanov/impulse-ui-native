import { createIcon } from "../../hocs/create-icon.hoc";
import { TipiBoldIcon } from "../bold/tipi-bold.icon";
import { TipiDuotoneIcon } from "../duotone/tipi-duotone.icon";
import { TipiFillIcon } from "../fill/tipi-fill.icon";
import { TipiLightIcon } from "../light/tipi-light.icon";
import { TipiRegularIcon } from "../regular/tipi-regular.icon";
import { TipiThinIcon } from "../thin/tipi-thin.icon";

export const TipiIcon = createIcon("Tipi", {
  bold: TipiBoldIcon,
  duotone: TipiDuotoneIcon,
  fill: TipiFillIcon,
  light: TipiLightIcon,
  regular: TipiRegularIcon,
  thin: TipiThinIcon,
});
