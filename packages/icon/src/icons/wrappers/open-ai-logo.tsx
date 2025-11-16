import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OpenAiLogoBold } from "../bold";
import { OpenAiLogoDuotone } from "../duotone";
import { OpenAiLogoFill } from "../fill";
import { OpenAiLogoLight } from "../light";
import { OpenAiLogoRegular } from "../regular";
import { OpenAiLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const OpenAiLogo = memo(function OpenAiLogo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OpenAiLogoBold,
      duotone: OpenAiLogoDuotone,
      fill: OpenAiLogoFill,
      light: OpenAiLogoLight,
      regular: OpenAiLogoRegular,
      thin: OpenAiLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
