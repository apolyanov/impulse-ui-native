import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneIncomingBoldIcon } from "../bold/phone-incoming-bold.icon";
import { PhoneIncomingDuotoneIcon } from "../duotone/phone-incoming-duotone.icon";
import { PhoneIncomingFillIcon } from "../fill/phone-incoming-fill.icon";
import { PhoneIncomingLightIcon } from "../light/phone-incoming-light.icon";
import { PhoneIncomingRegularIcon } from "../regular/phone-incoming-regular.icon";
import { PhoneIncomingThinIcon } from "../thin/phone-incoming-thin.icon";

export const PhoneIncomingIcon = memo(function PhoneIncoming(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneIncomingBoldIcon,
      duotone: PhoneIncomingDuotoneIcon,
      fill: PhoneIncomingFillIcon,
      light: PhoneIncomingLightIcon,
      regular: PhoneIncomingRegularIcon,
      thin: PhoneIncomingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
