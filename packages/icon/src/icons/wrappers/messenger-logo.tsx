import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MessengerLogoBold } from "../bold";
import { MessengerLogoDuotone } from "../duotone";
import { MessengerLogoFill } from "../fill";
import { MessengerLogoLight } from "../light";
import { MessengerLogoRegular } from "../regular";
import { MessengerLogoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MessengerLogo = memo(function MessengerLogo(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MessengerLogoBold,
      duotone: MessengerLogoDuotone,
      fill: MessengerLogoFill,
      light: MessengerLogoLight,
      regular: MessengerLogoRegular,
      thin: MessengerLogoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
