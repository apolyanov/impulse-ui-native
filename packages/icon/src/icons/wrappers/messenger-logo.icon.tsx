import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MessengerLogoBoldIcon } from "../bold";
import { MessengerLogoDuotoneIcon } from "../duotone";
import { MessengerLogoFillIcon } from "../fill";
import { MessengerLogoLightIcon } from "../light";
import { MessengerLogoRegularIcon } from "../regular";
import { MessengerLogoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MessengerLogoIcon = memo(function MessengerLogo(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MessengerLogoBoldIcon,
      duotone: MessengerLogoDuotoneIcon,
      fill: MessengerLogoFillIcon,
      light: MessengerLogoLightIcon,
      regular: MessengerLogoRegularIcon,
      thin: MessengerLogoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
