import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WhatsappLogoBoldIcon } from "../bold/whatsapp-logo-bold.icon";
import { WhatsappLogoDuotoneIcon } from "../duotone/whatsapp-logo-duotone.icon";
import { WhatsappLogoFillIcon } from "../fill/whatsapp-logo-fill.icon";
import { WhatsappLogoLightIcon } from "../light/whatsapp-logo-light.icon";
import { WhatsappLogoRegularIcon } from "../regular/whatsapp-logo-regular.icon";
import { WhatsappLogoThinIcon } from "../thin/whatsapp-logo-thin.icon";

export const WhatsappLogoIcon = memo(function WhatsappLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WhatsappLogoBoldIcon,
      duotone: WhatsappLogoDuotoneIcon,
      fill: WhatsappLogoFillIcon,
      light: WhatsappLogoLightIcon,
      regular: WhatsappLogoRegularIcon,
      thin: WhatsappLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
