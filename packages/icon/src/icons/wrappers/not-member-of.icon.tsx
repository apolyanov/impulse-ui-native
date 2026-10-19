import { createIcon } from "../../hocs/create-icon.hoc";
import { NotMemberOfBoldIcon } from "../bold/not-member-of-bold.icon";
import { NotMemberOfDuotoneIcon } from "../duotone/not-member-of-duotone.icon";
import { NotMemberOfFillIcon } from "../fill/not-member-of-fill.icon";
import { NotMemberOfLightIcon } from "../light/not-member-of-light.icon";
import { NotMemberOfRegularIcon } from "../regular/not-member-of-regular.icon";
import { NotMemberOfThinIcon } from "../thin/not-member-of-thin.icon";

export const NotMemberOfIcon = createIcon("NotMemberOf", {
  bold: NotMemberOfBoldIcon,
  duotone: NotMemberOfDuotoneIcon,
  fill: NotMemberOfFillIcon,
  light: NotMemberOfLightIcon,
  regular: NotMemberOfRegularIcon,
  thin: NotMemberOfThinIcon,
});
