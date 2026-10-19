import { createIcon } from "../../hocs/create-icon.hoc";
import { WebhooksLogoBoldIcon } from "../bold/webhooks-logo-bold.icon";
import { WebhooksLogoDuotoneIcon } from "../duotone/webhooks-logo-duotone.icon";
import { WebhooksLogoFillIcon } from "../fill/webhooks-logo-fill.icon";
import { WebhooksLogoLightIcon } from "../light/webhooks-logo-light.icon";
import { WebhooksLogoRegularIcon } from "../regular/webhooks-logo-regular.icon";
import { WebhooksLogoThinIcon } from "../thin/webhooks-logo-thin.icon";

export const WebhooksLogoIcon = createIcon("WebhooksLogo", {
  bold: WebhooksLogoBoldIcon,
  duotone: WebhooksLogoDuotoneIcon,
  fill: WebhooksLogoFillIcon,
  light: WebhooksLogoLightIcon,
  regular: WebhooksLogoRegularIcon,
  thin: WebhooksLogoThinIcon,
});
