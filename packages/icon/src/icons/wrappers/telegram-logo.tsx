import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TelegramLogoBold } from "../bold";
import { TelegramLogoDuotone } from "../duotone";
import { TelegramLogoFill } from "../fill";
import { TelegramLogoLight } from "../light";
import { TelegramLogoRegular } from "../regular";
import { TelegramLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TelegramLogo = memo(function TelegramLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TelegramLogoBold,
      duotone: TelegramLogoDuotone,
      fill: TelegramLogoFill,
      light: TelegramLogoLight,
      regular: TelegramLogoRegular,
      thin: TelegramLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
