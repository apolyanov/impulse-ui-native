import { createIcon } from "../../hocs/create-icon.hoc";
import { OpenAiLogoBoldIcon } from "../bold/open-ai-logo-bold.icon";
import { OpenAiLogoDuotoneIcon } from "../duotone/open-ai-logo-duotone.icon";
import { OpenAiLogoFillIcon } from "../fill/open-ai-logo-fill.icon";
import { OpenAiLogoLightIcon } from "../light/open-ai-logo-light.icon";
import { OpenAiLogoRegularIcon } from "../regular/open-ai-logo-regular.icon";
import { OpenAiLogoThinIcon } from "../thin/open-ai-logo-thin.icon";

export const OpenAiLogoIcon = createIcon("OpenAiLogo", {
  bold: OpenAiLogoBoldIcon,
  duotone: OpenAiLogoDuotoneIcon,
  fill: OpenAiLogoFillIcon,
  light: OpenAiLogoLightIcon,
  regular: OpenAiLogoRegularIcon,
  thin: OpenAiLogoThinIcon,
});
