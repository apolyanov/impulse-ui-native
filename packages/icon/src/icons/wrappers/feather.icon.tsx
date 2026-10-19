import { createIcon } from "../../hocs/create-icon.hoc";
import { FeatherBoldIcon } from "../bold/feather-bold.icon";
import { FeatherDuotoneIcon } from "../duotone/feather-duotone.icon";
import { FeatherFillIcon } from "../fill/feather-fill.icon";
import { FeatherLightIcon } from "../light/feather-light.icon";
import { FeatherRegularIcon } from "../regular/feather-regular.icon";
import { FeatherThinIcon } from "../thin/feather-thin.icon";

export const FeatherIcon = createIcon("Feather", {
  bold: FeatherBoldIcon,
  duotone: FeatherDuotoneIcon,
  fill: FeatherFillIcon,
  light: FeatherLightIcon,
  regular: FeatherRegularIcon,
  thin: FeatherThinIcon,
});
