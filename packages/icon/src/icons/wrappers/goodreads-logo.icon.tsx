import { createIcon } from "../../hocs/create-icon.hoc";
import { GoodreadsLogoBoldIcon } from "../bold/goodreads-logo-bold.icon";
import { GoodreadsLogoDuotoneIcon } from "../duotone/goodreads-logo-duotone.icon";
import { GoodreadsLogoFillIcon } from "../fill/goodreads-logo-fill.icon";
import { GoodreadsLogoLightIcon } from "../light/goodreads-logo-light.icon";
import { GoodreadsLogoRegularIcon } from "../regular/goodreads-logo-regular.icon";
import { GoodreadsLogoThinIcon } from "../thin/goodreads-logo-thin.icon";

export const GoodreadsLogoIcon = createIcon("GoodreadsLogo", {
  bold: GoodreadsLogoBoldIcon,
  duotone: GoodreadsLogoDuotoneIcon,
  fill: GoodreadsLogoFillIcon,
  light: GoodreadsLogoLightIcon,
  regular: GoodreadsLogoRegularIcon,
  thin: GoodreadsLogoThinIcon,
});
