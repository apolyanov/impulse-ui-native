import { createIcon } from "../../hocs/create-icon.hoc";
import { SignpostBoldIcon } from "../bold/signpost-bold.icon";
import { SignpostDuotoneIcon } from "../duotone/signpost-duotone.icon";
import { SignpostFillIcon } from "../fill/signpost-fill.icon";
import { SignpostLightIcon } from "../light/signpost-light.icon";
import { SignpostRegularIcon } from "../regular/signpost-regular.icon";
import { SignpostThinIcon } from "../thin/signpost-thin.icon";

export const SignpostIcon = createIcon("Signpost", {
  bold: SignpostBoldIcon,
  duotone: SignpostDuotoneIcon,
  fill: SignpostFillIcon,
  light: SignpostLightIcon,
  regular: SignpostRegularIcon,
  thin: SignpostThinIcon,
});
