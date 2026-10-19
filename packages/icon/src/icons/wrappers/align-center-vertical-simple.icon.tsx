import { createIcon } from "../../hocs/create-icon.hoc";
import { AlignCenterVerticalSimpleBoldIcon } from "../bold/align-center-vertical-simple-bold.icon";
import { AlignCenterVerticalSimpleDuotoneIcon } from "../duotone/align-center-vertical-simple-duotone.icon";
import { AlignCenterVerticalSimpleFillIcon } from "../fill/align-center-vertical-simple-fill.icon";
import { AlignCenterVerticalSimpleLightIcon } from "../light/align-center-vertical-simple-light.icon";
import { AlignCenterVerticalSimpleRegularIcon } from "../regular/align-center-vertical-simple-regular.icon";
import { AlignCenterVerticalSimpleThinIcon } from "../thin/align-center-vertical-simple-thin.icon";

export const AlignCenterVerticalSimpleIcon = createIcon(
  "AlignCenterVerticalSimple",
  {
    bold: AlignCenterVerticalSimpleBoldIcon,
    duotone: AlignCenterVerticalSimpleDuotoneIcon,
    fill: AlignCenterVerticalSimpleFillIcon,
    light: AlignCenterVerticalSimpleLightIcon,
    regular: AlignCenterVerticalSimpleRegularIcon,
    thin: AlignCenterVerticalSimpleThinIcon,
  },
);
