import { createIcon } from "../../hocs/create-icon.hoc";
import { CropBoldIcon } from "../bold/crop-bold.icon";
import { CropDuotoneIcon } from "../duotone/crop-duotone.icon";
import { CropFillIcon } from "../fill/crop-fill.icon";
import { CropLightIcon } from "../light/crop-light.icon";
import { CropRegularIcon } from "../regular/crop-regular.icon";
import { CropThinIcon } from "../thin/crop-thin.icon";

export const CropIcon = createIcon("Crop", {
  bold: CropBoldIcon,
  duotone: CropDuotoneIcon,
  fill: CropFillIcon,
  light: CropLightIcon,
  regular: CropRegularIcon,
  thin: CropThinIcon,
});
