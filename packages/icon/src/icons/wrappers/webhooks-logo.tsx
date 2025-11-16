import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WebhooksLogoBold } from "../bold";
import { WebhooksLogoDuotone } from "../duotone";
import { WebhooksLogoFill } from "../fill";
import { WebhooksLogoLight } from "../light";
import { WebhooksLogoRegular } from "../regular";
import { WebhooksLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WebhooksLogo = memo(function WebhooksLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WebhooksLogoBold,
      duotone: WebhooksLogoDuotone,
      fill: WebhooksLogoFill,
      light: WebhooksLogoLight,
      regular: WebhooksLogoRegular,
      thin: WebhooksLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
