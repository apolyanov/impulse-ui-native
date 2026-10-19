import { createIcon } from "../../hocs/create-icon.hoc";
import { LegoSmileyBoldIcon } from "../bold/lego-smiley-bold.icon";
import { LegoSmileyDuotoneIcon } from "../duotone/lego-smiley-duotone.icon";
import { LegoSmileyFillIcon } from "../fill/lego-smiley-fill.icon";
import { LegoSmileyLightIcon } from "../light/lego-smiley-light.icon";
import { LegoSmileyRegularIcon } from "../regular/lego-smiley-regular.icon";
import { LegoSmileyThinIcon } from "../thin/lego-smiley-thin.icon";

export const LegoSmileyIcon = createIcon("LegoSmiley", {
  bold: LegoSmileyBoldIcon,
  duotone: LegoSmileyDuotoneIcon,
  fill: LegoSmileyFillIcon,
  light: LegoSmileyLightIcon,
  regular: LegoSmileyRegularIcon,
  thin: LegoSmileyThinIcon,
});
