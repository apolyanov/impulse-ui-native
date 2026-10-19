import { createIcon } from "../../hocs/create-icon.hoc";
import { MatrixLogoBoldIcon } from "../bold/matrix-logo-bold.icon";
import { MatrixLogoDuotoneIcon } from "../duotone/matrix-logo-duotone.icon";
import { MatrixLogoFillIcon } from "../fill/matrix-logo-fill.icon";
import { MatrixLogoLightIcon } from "../light/matrix-logo-light.icon";
import { MatrixLogoRegularIcon } from "../regular/matrix-logo-regular.icon";
import { MatrixLogoThinIcon } from "../thin/matrix-logo-thin.icon";

export const MatrixLogoIcon = createIcon("MatrixLogo", {
  bold: MatrixLogoBoldIcon,
  duotone: MatrixLogoDuotoneIcon,
  fill: MatrixLogoFillIcon,
  light: MatrixLogoLightIcon,
  regular: MatrixLogoRegularIcon,
  thin: MatrixLogoThinIcon,
});
