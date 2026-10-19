import { createIcon } from "../../hocs/create-icon.hoc";
import { SignOutBoldIcon } from "../bold/sign-out-bold.icon";
import { SignOutDuotoneIcon } from "../duotone/sign-out-duotone.icon";
import { SignOutFillIcon } from "../fill/sign-out-fill.icon";
import { SignOutLightIcon } from "../light/sign-out-light.icon";
import { SignOutRegularIcon } from "../regular/sign-out-regular.icon";
import { SignOutThinIcon } from "../thin/sign-out-thin.icon";

export const SignOutIcon = createIcon("SignOut", {
  bold: SignOutBoldIcon,
  duotone: SignOutDuotoneIcon,
  fill: SignOutFillIcon,
  light: SignOutLightIcon,
  regular: SignOutRegularIcon,
  thin: SignOutThinIcon,
});
