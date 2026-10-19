import { createIcon } from "../../hocs/create-icon.hoc";
import { CheersBoldIcon } from "../bold/cheers-bold.icon";
import { CheersDuotoneIcon } from "../duotone/cheers-duotone.icon";
import { CheersFillIcon } from "../fill/cheers-fill.icon";
import { CheersLightIcon } from "../light/cheers-light.icon";
import { CheersRegularIcon } from "../regular/cheers-regular.icon";
import { CheersThinIcon } from "../thin/cheers-thin.icon";

export const CheersIcon = createIcon("Cheers", {
  bold: CheersBoldIcon,
  duotone: CheersDuotoneIcon,
  fill: CheersFillIcon,
  light: CheersLightIcon,
  regular: CheersRegularIcon,
  thin: CheersThinIcon,
});
