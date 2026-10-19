import { createIcon } from "../../hocs/create-icon.hoc";
import { TextTBoldIcon } from "../bold/text-t-bold.icon";
import { TextTDuotoneIcon } from "../duotone/text-t-duotone.icon";
import { TextTFillIcon } from "../fill/text-t-fill.icon";
import { TextTLightIcon } from "../light/text-t-light.icon";
import { TextTRegularIcon } from "../regular/text-t-regular.icon";
import { TextTThinIcon } from "../thin/text-t-thin.icon";

export const TextTIcon = createIcon("TextT", {
  bold: TextTBoldIcon,
  duotone: TextTDuotoneIcon,
  fill: TextTFillIcon,
  light: TextTLightIcon,
  regular: TextTRegularIcon,
  thin: TextTThinIcon,
});
