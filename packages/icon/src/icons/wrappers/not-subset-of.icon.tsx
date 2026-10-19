import { createIcon } from "../../hocs/create-icon.hoc";
import { NotSubsetOfBoldIcon } from "../bold/not-subset-of-bold.icon";
import { NotSubsetOfDuotoneIcon } from "../duotone/not-subset-of-duotone.icon";
import { NotSubsetOfFillIcon } from "../fill/not-subset-of-fill.icon";
import { NotSubsetOfLightIcon } from "../light/not-subset-of-light.icon";
import { NotSubsetOfRegularIcon } from "../regular/not-subset-of-regular.icon";
import { NotSubsetOfThinIcon } from "../thin/not-subset-of-thin.icon";

export const NotSubsetOfIcon = createIcon("NotSubsetOf", {
  bold: NotSubsetOfBoldIcon,
  duotone: NotSubsetOfDuotoneIcon,
  fill: NotSubsetOfFillIcon,
  light: NotSubsetOfLightIcon,
  regular: NotSubsetOfRegularIcon,
  thin: NotSubsetOfThinIcon,
});
