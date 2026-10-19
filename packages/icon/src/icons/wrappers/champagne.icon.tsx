import { createIcon } from "../../hocs/create-icon.hoc";
import { ChampagneBoldIcon } from "../bold/champagne-bold.icon";
import { ChampagneDuotoneIcon } from "../duotone/champagne-duotone.icon";
import { ChampagneFillIcon } from "../fill/champagne-fill.icon";
import { ChampagneLightIcon } from "../light/champagne-light.icon";
import { ChampagneRegularIcon } from "../regular/champagne-regular.icon";
import { ChampagneThinIcon } from "../thin/champagne-thin.icon";

export const ChampagneIcon = createIcon("Champagne", {
  bold: ChampagneBoldIcon,
  duotone: ChampagneDuotoneIcon,
  fill: ChampagneFillIcon,
  light: ChampagneLightIcon,
  regular: ChampagneRegularIcon,
  thin: ChampagneThinIcon,
});
