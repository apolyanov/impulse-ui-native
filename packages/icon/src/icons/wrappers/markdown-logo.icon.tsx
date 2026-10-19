import { createIcon } from "../../hocs/create-icon.hoc";
import { MarkdownLogoBoldIcon } from "../bold/markdown-logo-bold.icon";
import { MarkdownLogoDuotoneIcon } from "../duotone/markdown-logo-duotone.icon";
import { MarkdownLogoFillIcon } from "../fill/markdown-logo-fill.icon";
import { MarkdownLogoLightIcon } from "../light/markdown-logo-light.icon";
import { MarkdownLogoRegularIcon } from "../regular/markdown-logo-regular.icon";
import { MarkdownLogoThinIcon } from "../thin/markdown-logo-thin.icon";

export const MarkdownLogoIcon = createIcon("MarkdownLogo", {
  bold: MarkdownLogoBoldIcon,
  duotone: MarkdownLogoDuotoneIcon,
  fill: MarkdownLogoFillIcon,
  light: MarkdownLogoLightIcon,
  regular: MarkdownLogoRegularIcon,
  thin: MarkdownLogoThinIcon,
});
