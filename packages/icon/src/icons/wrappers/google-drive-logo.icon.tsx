import { createIcon } from "../../hocs/create-icon.hoc";
import { GoogleDriveLogoBoldIcon } from "../bold/google-drive-logo-bold.icon";
import { GoogleDriveLogoDuotoneIcon } from "../duotone/google-drive-logo-duotone.icon";
import { GoogleDriveLogoFillIcon } from "../fill/google-drive-logo-fill.icon";
import { GoogleDriveLogoLightIcon } from "../light/google-drive-logo-light.icon";
import { GoogleDriveLogoRegularIcon } from "../regular/google-drive-logo-regular.icon";
import { GoogleDriveLogoThinIcon } from "../thin/google-drive-logo-thin.icon";

export const GoogleDriveLogoIcon = createIcon("GoogleDriveLogo", {
  bold: GoogleDriveLogoBoldIcon,
  duotone: GoogleDriveLogoDuotoneIcon,
  fill: GoogleDriveLogoFillIcon,
  light: GoogleDriveLogoLightIcon,
  regular: GoogleDriveLogoRegularIcon,
  thin: GoogleDriveLogoThinIcon,
});
