import { createIcon } from "../../hocs/create-icon.hoc";
import { TextAaBoldIcon } from "../bold/text-aa-bold.icon";
import { TextAaDuotoneIcon } from "../duotone/text-aa-duotone.icon";
import { TextAaFillIcon } from "../fill/text-aa-fill.icon";
import { TextAaLightIcon } from "../light/text-aa-light.icon";
import { TextAaRegularIcon } from "../regular/text-aa-regular.icon";
import { TextAaThinIcon } from "../thin/text-aa-thin.icon";

export const TextAaIcon = createIcon("TextAa", {
  bold: TextAaBoldIcon,
  duotone: TextAaDuotoneIcon,
  fill: TextAaFillIcon,
  light: TextAaLightIcon,
  regular: TextAaRegularIcon,
  thin: TextAaThinIcon,
});
