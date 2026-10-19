import { createIcon } from "../../hocs/create-icon.hoc";
import { FlagPennantBoldIcon } from "../bold/flag-pennant-bold.icon";
import { FlagPennantDuotoneIcon } from "../duotone/flag-pennant-duotone.icon";
import { FlagPennantFillIcon } from "../fill/flag-pennant-fill.icon";
import { FlagPennantLightIcon } from "../light/flag-pennant-light.icon";
import { FlagPennantRegularIcon } from "../regular/flag-pennant-regular.icon";
import { FlagPennantThinIcon } from "../thin/flag-pennant-thin.icon";

export const FlagPennantIcon = createIcon("FlagPennant", {
  bold: FlagPennantBoldIcon,
  duotone: FlagPennantDuotoneIcon,
  fill: FlagPennantFillIcon,
  light: FlagPennantLightIcon,
  regular: FlagPennantRegularIcon,
  thin: FlagPennantThinIcon,
});
