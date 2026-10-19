import { createIcon } from "../../hocs/create-icon.hoc";
import { BowlSteamBoldIcon } from "../bold/bowl-steam-bold.icon";
import { BowlSteamDuotoneIcon } from "../duotone/bowl-steam-duotone.icon";
import { BowlSteamFillIcon } from "../fill/bowl-steam-fill.icon";
import { BowlSteamLightIcon } from "../light/bowl-steam-light.icon";
import { BowlSteamRegularIcon } from "../regular/bowl-steam-regular.icon";
import { BowlSteamThinIcon } from "../thin/bowl-steam-thin.icon";

export const BowlSteamIcon = createIcon("BowlSteam", {
  bold: BowlSteamBoldIcon,
  duotone: BowlSteamDuotoneIcon,
  fill: BowlSteamFillIcon,
  light: BowlSteamLightIcon,
  regular: BowlSteamRegularIcon,
  thin: BowlSteamThinIcon,
});
