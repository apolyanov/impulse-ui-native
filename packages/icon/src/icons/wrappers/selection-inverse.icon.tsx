import { createIcon } from "../../hocs/create-icon.hoc";
import { SelectionInverseBoldIcon } from "../bold/selection-inverse-bold.icon";
import { SelectionInverseDuotoneIcon } from "../duotone/selection-inverse-duotone.icon";
import { SelectionInverseFillIcon } from "../fill/selection-inverse-fill.icon";
import { SelectionInverseLightIcon } from "../light/selection-inverse-light.icon";
import { SelectionInverseRegularIcon } from "../regular/selection-inverse-regular.icon";
import { SelectionInverseThinIcon } from "../thin/selection-inverse-thin.icon";

export const SelectionInverseIcon = createIcon("SelectionInverse", {
  bold: SelectionInverseBoldIcon,
  duotone: SelectionInverseDuotoneIcon,
  fill: SelectionInverseFillIcon,
  light: SelectionInverseLightIcon,
  regular: SelectionInverseRegularIcon,
  thin: SelectionInverseThinIcon,
});
