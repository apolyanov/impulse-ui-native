import { createIcon } from "../../hocs/create-icon.hoc";
import { SealCheckBoldIcon } from "../bold/seal-check-bold.icon";
import { SealCheckDuotoneIcon } from "../duotone/seal-check-duotone.icon";
import { SealCheckFillIcon } from "../fill/seal-check-fill.icon";
import { SealCheckLightIcon } from "../light/seal-check-light.icon";
import { SealCheckRegularIcon } from "../regular/seal-check-regular.icon";
import { SealCheckThinIcon } from "../thin/seal-check-thin.icon";

export const SealCheckIcon = createIcon("SealCheck", {
  bold: SealCheckBoldIcon,
  duotone: SealCheckDuotoneIcon,
  fill: SealCheckFillIcon,
  light: SealCheckLightIcon,
  regular: SealCheckRegularIcon,
  thin: SealCheckThinIcon,
});
