import { createIcon } from "../../hocs/create-icon.hoc";
import { SquareLogoBoldIcon } from "../bold/square-logo-bold.icon";
import { SquareLogoDuotoneIcon } from "../duotone/square-logo-duotone.icon";
import { SquareLogoFillIcon } from "../fill/square-logo-fill.icon";
import { SquareLogoLightIcon } from "../light/square-logo-light.icon";
import { SquareLogoRegularIcon } from "../regular/square-logo-regular.icon";
import { SquareLogoThinIcon } from "../thin/square-logo-thin.icon";

export const SquareLogoIcon = createIcon("SquareLogo", {
  bold: SquareLogoBoldIcon,
  duotone: SquareLogoDuotoneIcon,
  fill: SquareLogoFillIcon,
  light: SquareLogoLightIcon,
  regular: SquareLogoRegularIcon,
  thin: SquareLogoThinIcon,
});
