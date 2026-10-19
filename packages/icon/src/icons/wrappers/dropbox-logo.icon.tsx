import { createIcon } from "../../hocs/create-icon.hoc";
import { DropboxLogoBoldIcon } from "../bold/dropbox-logo-bold.icon";
import { DropboxLogoDuotoneIcon } from "../duotone/dropbox-logo-duotone.icon";
import { DropboxLogoFillIcon } from "../fill/dropbox-logo-fill.icon";
import { DropboxLogoLightIcon } from "../light/dropbox-logo-light.icon";
import { DropboxLogoRegularIcon } from "../regular/dropbox-logo-regular.icon";
import { DropboxLogoThinIcon } from "../thin/dropbox-logo-thin.icon";

export const DropboxLogoIcon = createIcon("DropboxLogo", {
  bold: DropboxLogoBoldIcon,
  duotone: DropboxLogoDuotoneIcon,
  fill: DropboxLogoFillIcon,
  light: DropboxLogoLightIcon,
  regular: DropboxLogoRegularIcon,
  thin: DropboxLogoThinIcon,
});
