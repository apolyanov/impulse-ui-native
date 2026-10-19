import { createIcon } from "../../hocs/create-icon.hoc";
import { NotionLogoBoldIcon } from "../bold/notion-logo-bold.icon";
import { NotionLogoDuotoneIcon } from "../duotone/notion-logo-duotone.icon";
import { NotionLogoFillIcon } from "../fill/notion-logo-fill.icon";
import { NotionLogoLightIcon } from "../light/notion-logo-light.icon";
import { NotionLogoRegularIcon } from "../regular/notion-logo-regular.icon";
import { NotionLogoThinIcon } from "../thin/notion-logo-thin.icon";

export const NotionLogoIcon = createIcon("NotionLogo", {
  bold: NotionLogoBoldIcon,
  duotone: NotionLogoDuotoneIcon,
  fill: NotionLogoFillIcon,
  light: NotionLogoLightIcon,
  regular: NotionLogoRegularIcon,
  thin: NotionLogoThinIcon,
});
