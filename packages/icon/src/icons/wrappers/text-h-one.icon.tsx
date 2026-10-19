import { createIcon } from "../../hocs/create-icon.hoc";
import { TextHOneBoldIcon } from "../bold/text-h-one-bold.icon";
import { TextHOneDuotoneIcon } from "../duotone/text-h-one-duotone.icon";
import { TextHOneFillIcon } from "../fill/text-h-one-fill.icon";
import { TextHOneLightIcon } from "../light/text-h-one-light.icon";
import { TextHOneRegularIcon } from "../regular/text-h-one-regular.icon";
import { TextHOneThinIcon } from "../thin/text-h-one-thin.icon";

export const TextHOneIcon = createIcon("TextHOne", {
  bold: TextHOneBoldIcon,
  duotone: TextHOneDuotoneIcon,
  fill: TextHOneFillIcon,
  light: TextHOneLightIcon,
  regular: TextHOneRegularIcon,
  thin: TextHOneThinIcon,
});
