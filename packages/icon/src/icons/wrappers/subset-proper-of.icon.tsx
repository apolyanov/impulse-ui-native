import { createIcon } from "../../hocs/create-icon.hoc";
import { SubsetProperOfBoldIcon } from "../bold/subset-proper-of-bold.icon";
import { SubsetProperOfDuotoneIcon } from "../duotone/subset-proper-of-duotone.icon";
import { SubsetProperOfFillIcon } from "../fill/subset-proper-of-fill.icon";
import { SubsetProperOfLightIcon } from "../light/subset-proper-of-light.icon";
import { SubsetProperOfRegularIcon } from "../regular/subset-proper-of-regular.icon";
import { SubsetProperOfThinIcon } from "../thin/subset-proper-of-thin.icon";

export const SubsetProperOfIcon = createIcon("SubsetProperOf", {
  bold: SubsetProperOfBoldIcon,
  duotone: SubsetProperOfDuotoneIcon,
  fill: SubsetProperOfFillIcon,
  light: SubsetProperOfLightIcon,
  regular: SubsetProperOfRegularIcon,
  thin: SubsetProperOfThinIcon,
});
