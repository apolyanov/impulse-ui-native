import { createIcon } from "../../hocs/create-icon.hoc";
import { ThreadsLogoBoldIcon } from "../bold/threads-logo-bold.icon";
import { ThreadsLogoDuotoneIcon } from "../duotone/threads-logo-duotone.icon";
import { ThreadsLogoFillIcon } from "../fill/threads-logo-fill.icon";
import { ThreadsLogoLightIcon } from "../light/threads-logo-light.icon";
import { ThreadsLogoRegularIcon } from "../regular/threads-logo-regular.icon";
import { ThreadsLogoThinIcon } from "../thin/threads-logo-thin.icon";

export const ThreadsLogoIcon = createIcon("ThreadsLogo", {
  bold: ThreadsLogoBoldIcon,
  duotone: ThreadsLogoDuotoneIcon,
  fill: ThreadsLogoFillIcon,
  light: ThreadsLogoLightIcon,
  regular: ThreadsLogoRegularIcon,
  thin: ThreadsLogoThinIcon,
});
