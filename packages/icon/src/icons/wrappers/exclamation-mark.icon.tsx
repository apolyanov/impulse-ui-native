import { createIcon } from "../../hocs/create-icon.hoc";
import { ExclamationMarkBoldIcon } from "../bold/exclamation-mark-bold.icon";
import { ExclamationMarkDuotoneIcon } from "../duotone/exclamation-mark-duotone.icon";
import { ExclamationMarkFillIcon } from "../fill/exclamation-mark-fill.icon";
import { ExclamationMarkLightIcon } from "../light/exclamation-mark-light.icon";
import { ExclamationMarkRegularIcon } from "../regular/exclamation-mark-regular.icon";
import { ExclamationMarkThinIcon } from "../thin/exclamation-mark-thin.icon";

export const ExclamationMarkIcon = createIcon("ExclamationMark", {
  bold: ExclamationMarkBoldIcon,
  duotone: ExclamationMarkDuotoneIcon,
  fill: ExclamationMarkFillIcon,
  light: ExclamationMarkLightIcon,
  regular: ExclamationMarkRegularIcon,
  thin: ExclamationMarkThinIcon,
});
