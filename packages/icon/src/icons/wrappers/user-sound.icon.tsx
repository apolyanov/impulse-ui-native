import { createIcon } from "../../hocs/create-icon.hoc";
import { UserSoundBoldIcon } from "../bold/user-sound-bold.icon";
import { UserSoundDuotoneIcon } from "../duotone/user-sound-duotone.icon";
import { UserSoundFillIcon } from "../fill/user-sound-fill.icon";
import { UserSoundLightIcon } from "../light/user-sound-light.icon";
import { UserSoundRegularIcon } from "../regular/user-sound-regular.icon";
import { UserSoundThinIcon } from "../thin/user-sound-thin.icon";

export const UserSoundIcon = createIcon("UserSound", {
  bold: UserSoundBoldIcon,
  duotone: UserSoundDuotoneIcon,
  fill: UserSoundFillIcon,
  light: UserSoundLightIcon,
  regular: UserSoundRegularIcon,
  thin: UserSoundThinIcon,
});
