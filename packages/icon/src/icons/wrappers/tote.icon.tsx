import { createIcon } from "../../hocs/create-icon.hoc";
import { ToteBoldIcon } from "../bold/tote-bold.icon";
import { ToteDuotoneIcon } from "../duotone/tote-duotone.icon";
import { ToteFillIcon } from "../fill/tote-fill.icon";
import { ToteLightIcon } from "../light/tote-light.icon";
import { ToteRegularIcon } from "../regular/tote-regular.icon";
import { ToteThinIcon } from "../thin/tote-thin.icon";

export const ToteIcon = createIcon("Tote", {
  bold: ToteBoldIcon,
  duotone: ToteDuotoneIcon,
  fill: ToteFillIcon,
  light: ToteLightIcon,
  regular: ToteRegularIcon,
  thin: ToteThinIcon,
});
