import { createIcon } from "../../hocs/create-icon.hoc";
import { MemberOfBoldIcon } from "../bold/member-of-bold.icon";
import { MemberOfDuotoneIcon } from "../duotone/member-of-duotone.icon";
import { MemberOfFillIcon } from "../fill/member-of-fill.icon";
import { MemberOfLightIcon } from "../light/member-of-light.icon";
import { MemberOfRegularIcon } from "../regular/member-of-regular.icon";
import { MemberOfThinIcon } from "../thin/member-of-thin.icon";

export const MemberOfIcon = createIcon("MemberOf", {
  bold: MemberOfBoldIcon,
  duotone: MemberOfDuotoneIcon,
  fill: MemberOfFillIcon,
  light: MemberOfLightIcon,
  regular: MemberOfRegularIcon,
  thin: MemberOfThinIcon,
});
