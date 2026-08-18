import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TelegramLogoBoldIcon } from "../bold/telegram-logo-bold.icon";
import { TelegramLogoDuotoneIcon } from "../duotone/telegram-logo-duotone.icon";
import { TelegramLogoFillIcon } from "../fill/telegram-logo-fill.icon";
import { TelegramLogoLightIcon } from "../light/telegram-logo-light.icon";
import { TelegramLogoRegularIcon } from "../regular/telegram-logo-regular.icon";
import { TelegramLogoThinIcon } from "../thin/telegram-logo-thin.icon";

export const TelegramLogoIcon = memo(function TelegramLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TelegramLogoBoldIcon,
      duotone: TelegramLogoDuotoneIcon,
      fill: TelegramLogoFillIcon,
      light: TelegramLogoLightIcon,
      regular: TelegramLogoRegularIcon,
      thin: TelegramLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
