import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MessengerLogoBoldIcon } from "../bold/messenger-logo-bold.icon";
import { MessengerLogoDuotoneIcon } from "../duotone/messenger-logo-duotone.icon";
import { MessengerLogoFillIcon } from "../fill/messenger-logo-fill.icon";
import { MessengerLogoLightIcon } from "../light/messenger-logo-light.icon";
import { MessengerLogoRegularIcon } from "../regular/messenger-logo-regular.icon";
import { MessengerLogoThinIcon } from "../thin/messenger-logo-thin.icon";

export const MessengerLogoIcon = memo(function MessengerLogo(
  props: IconWrapperProps,
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
