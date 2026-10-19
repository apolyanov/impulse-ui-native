import { createIcon } from "../../hocs/create-icon.hoc";
import { OrangeSliceBoldIcon } from "../bold/orange-slice-bold.icon";
import { OrangeSliceDuotoneIcon } from "../duotone/orange-slice-duotone.icon";
import { OrangeSliceFillIcon } from "../fill/orange-slice-fill.icon";
import { OrangeSliceLightIcon } from "../light/orange-slice-light.icon";
import { OrangeSliceRegularIcon } from "../regular/orange-slice-regular.icon";
import { OrangeSliceThinIcon } from "../thin/orange-slice-thin.icon";

export const OrangeSliceIcon = createIcon("OrangeSlice", {
  bold: OrangeSliceBoldIcon,
  duotone: OrangeSliceDuotoneIcon,
  fill: OrangeSliceFillIcon,
  light: OrangeSliceLightIcon,
  regular: OrangeSliceRegularIcon,
  thin: OrangeSliceThinIcon,
});
