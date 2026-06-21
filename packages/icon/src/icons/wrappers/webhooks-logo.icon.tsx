import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WebhooksLogoBoldIcon } from "../bold";
import { WebhooksLogoDuotoneIcon } from "../duotone";
import { WebhooksLogoFillIcon } from "../fill";
import { WebhooksLogoLightIcon } from "../light";
import { WebhooksLogoRegularIcon } from "../regular";
import { WebhooksLogoThinIcon } from "../thin";

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
