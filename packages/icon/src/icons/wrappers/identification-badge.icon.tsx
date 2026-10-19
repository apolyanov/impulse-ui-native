import { createIcon } from "../../hocs/create-icon.hoc";
import { IdentificationBadgeBoldIcon } from "../bold/identification-badge-bold.icon";
import { IdentificationBadgeDuotoneIcon } from "../duotone/identification-badge-duotone.icon";
import { IdentificationBadgeFillIcon } from "../fill/identification-badge-fill.icon";
import { IdentificationBadgeLightIcon } from "../light/identification-badge-light.icon";
import { IdentificationBadgeRegularIcon } from "../regular/identification-badge-regular.icon";
import { IdentificationBadgeThinIcon } from "../thin/identification-badge-thin.icon";

export const IdentificationBadgeIcon = createIcon("IdentificationBadge", {
  bold: IdentificationBadgeBoldIcon,
  duotone: IdentificationBadgeDuotoneIcon,
  fill: IdentificationBadgeFillIcon,
  light: IdentificationBadgeLightIcon,
  regular: IdentificationBadgeRegularIcon,
  thin: IdentificationBadgeThinIcon,
});
