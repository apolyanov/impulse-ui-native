import { createIcon } from "../../hocs/create-icon.hoc";
import { TShirtBoldIcon } from "../bold/t-shirt-bold.icon";
import { TShirtDuotoneIcon } from "../duotone/t-shirt-duotone.icon";
import { TShirtFillIcon } from "../fill/t-shirt-fill.icon";
import { TShirtLightIcon } from "../light/t-shirt-light.icon";
import { TShirtRegularIcon } from "../regular/t-shirt-regular.icon";
import { TShirtThinIcon } from "../thin/t-shirt-thin.icon";

export const TShirtIcon = createIcon("TShirt", {
  bold: TShirtBoldIcon,
  duotone: TShirtDuotoneIcon,
  fill: TShirtFillIcon,
  light: TShirtLightIcon,
  regular: TShirtRegularIcon,
  thin: TShirtThinIcon,
});
