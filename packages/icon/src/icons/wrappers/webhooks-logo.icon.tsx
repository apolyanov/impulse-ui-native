import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WebhooksLogoBoldIcon } from "../bold/webhooks-logo-bold.icon";
import { WebhooksLogoDuotoneIcon } from "../duotone/webhooks-logo-duotone.icon";
import { WebhooksLogoFillIcon } from "../fill/webhooks-logo-fill.icon";
import { WebhooksLogoLightIcon } from "../light/webhooks-logo-light.icon";
import { WebhooksLogoRegularIcon } from "../regular/webhooks-logo-regular.icon";
import { WebhooksLogoThinIcon } from "../thin/webhooks-logo-thin.icon";

export const WebhooksLogoIcon = memo(function WebhooksLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WebhooksLogoBoldIcon,
      duotone: WebhooksLogoDuotoneIcon,
      fill: WebhooksLogoFillIcon,
      light: WebhooksLogoLightIcon,
      regular: WebhooksLogoRegularIcon,
      thin: WebhooksLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
