import { createIcon } from "../../hocs/create-icon.hoc";
import { TreasureChestBoldIcon } from "../bold/treasure-chest-bold.icon";
import { TreasureChestDuotoneIcon } from "../duotone/treasure-chest-duotone.icon";
import { TreasureChestFillIcon } from "../fill/treasure-chest-fill.icon";
import { TreasureChestLightIcon } from "../light/treasure-chest-light.icon";
import { TreasureChestRegularIcon } from "../regular/treasure-chest-regular.icon";
import { TreasureChestThinIcon } from "../thin/treasure-chest-thin.icon";

export const TreasureChestIcon = createIcon("TreasureChest", {
  bold: TreasureChestBoldIcon,
  duotone: TreasureChestDuotoneIcon,
  fill: TreasureChestFillIcon,
  light: TreasureChestLightIcon,
  regular: TreasureChestRegularIcon,
  thin: TreasureChestThinIcon,
});
