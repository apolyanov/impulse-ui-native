import { createIcon } from "../../hocs/create-icon.hoc";
import { ClubBoldIcon } from "../bold/club-bold.icon";
import { ClubDuotoneIcon } from "../duotone/club-duotone.icon";
import { ClubFillIcon } from "../fill/club-fill.icon";
import { ClubLightIcon } from "../light/club-light.icon";
import { ClubRegularIcon } from "../regular/club-regular.icon";
import { ClubThinIcon } from "../thin/club-thin.icon";

export const ClubIcon = createIcon("Club", {
  bold: ClubBoldIcon,
  duotone: ClubDuotoneIcon,
  fill: ClubFillIcon,
  light: ClubLightIcon,
  regular: ClubRegularIcon,
  thin: ClubThinIcon,
});
