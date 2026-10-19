import { createIcon } from "../../hocs/create-icon.hoc";
import { SmileySadBoldIcon } from "../bold/smiley-sad-bold.icon";
import { SmileySadDuotoneIcon } from "../duotone/smiley-sad-duotone.icon";
import { SmileySadFillIcon } from "../fill/smiley-sad-fill.icon";
import { SmileySadLightIcon } from "../light/smiley-sad-light.icon";
import { SmileySadRegularIcon } from "../regular/smiley-sad-regular.icon";
import { SmileySadThinIcon } from "../thin/smiley-sad-thin.icon";

export const SmileySadIcon = createIcon("SmileySad", {
  bold: SmileySadBoldIcon,
  duotone: SmileySadDuotoneIcon,
  fill: SmileySadFillIcon,
  light: SmileySadLightIcon,
  regular: SmileySadRegularIcon,
  thin: SmileySadThinIcon,
});
