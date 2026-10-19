import { createIcon } from "../../hocs/create-icon.hoc";
import { SignInBoldIcon } from "../bold/sign-in-bold.icon";
import { SignInDuotoneIcon } from "../duotone/sign-in-duotone.icon";
import { SignInFillIcon } from "../fill/sign-in-fill.icon";
import { SignInLightIcon } from "../light/sign-in-light.icon";
import { SignInRegularIcon } from "../regular/sign-in-regular.icon";
import { SignInThinIcon } from "../thin/sign-in-thin.icon";

export const SignInIcon = createIcon("SignIn", {
  bold: SignInBoldIcon,
  duotone: SignInDuotoneIcon,
  fill: SignInFillIcon,
  light: SignInLightIcon,
  regular: SignInRegularIcon,
  thin: SignInThinIcon,
});
