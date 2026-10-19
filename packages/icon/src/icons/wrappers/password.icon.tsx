import { createIcon } from "../../hocs/create-icon.hoc";
import { PasswordBoldIcon } from "../bold/password-bold.icon";
import { PasswordDuotoneIcon } from "../duotone/password-duotone.icon";
import { PasswordFillIcon } from "../fill/password-fill.icon";
import { PasswordLightIcon } from "../light/password-light.icon";
import { PasswordRegularIcon } from "../regular/password-regular.icon";
import { PasswordThinIcon } from "../thin/password-thin.icon";

export const PasswordIcon = createIcon("Password", {
  bold: PasswordBoldIcon,
  duotone: PasswordDuotoneIcon,
  fill: PasswordFillIcon,
  light: PasswordLightIcon,
  regular: PasswordRegularIcon,
  thin: PasswordThinIcon,
});
