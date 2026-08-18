import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneDisconnectBoldIcon } from "../bold/phone-disconnect-bold.icon";
import { PhoneDisconnectDuotoneIcon } from "../duotone/phone-disconnect-duotone.icon";
import { PhoneDisconnectFillIcon } from "../fill/phone-disconnect-fill.icon";
import { PhoneDisconnectLightIcon } from "../light/phone-disconnect-light.icon";
import { PhoneDisconnectRegularIcon } from "../regular/phone-disconnect-regular.icon";
import { PhoneDisconnectThinIcon } from "../thin/phone-disconnect-thin.icon";

export const PhoneDisconnectIcon = memo(function PhoneDisconnect(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneDisconnectBoldIcon,
      duotone: PhoneDisconnectDuotoneIcon,
      fill: PhoneDisconnectFillIcon,
      light: PhoneDisconnectLightIcon,
      regular: PhoneDisconnectRegularIcon,
      thin: PhoneDisconnectThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
