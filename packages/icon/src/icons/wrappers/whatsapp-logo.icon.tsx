import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WhatsappLogoBoldIcon } from "../bold";
import { WhatsappLogoDuotoneIcon } from "../duotone";
import { WhatsappLogoFillIcon } from "../fill";
import { WhatsappLogoLightIcon } from "../light";
import { WhatsappLogoRegularIcon } from "../regular";
import { WhatsappLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WhatsappLogoIcon = memo(function WhatsappLogo(
  props: IconWrapperProps
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
