import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WhatsappLogoBold } from "../bold";
import { WhatsappLogoDuotone } from "../duotone";
import { WhatsappLogoFill } from "../fill";
import { WhatsappLogoLight } from "../light";
import { WhatsappLogoRegular } from "../regular";
import { WhatsappLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WhatsappLogo = memo(function WhatsappLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WhatsappLogoBold,
      duotone: WhatsappLogoDuotone,
      fill: WhatsappLogoFill,
      light: WhatsappLogoLight,
      regular: WhatsappLogoRegular,
      thin: WhatsappLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
