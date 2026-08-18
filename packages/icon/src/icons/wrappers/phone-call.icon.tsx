import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneCallBoldIcon } from "../bold/phone-call-bold.icon";
import { PhoneCallDuotoneIcon } from "../duotone/phone-call-duotone.icon";
import { PhoneCallFillIcon } from "../fill/phone-call-fill.icon";
import { PhoneCallLightIcon } from "../light/phone-call-light.icon";
import { PhoneCallRegularIcon } from "../regular/phone-call-regular.icon";
import { PhoneCallThinIcon } from "../thin/phone-call-thin.icon";

export const PhoneCallIcon = memo(function PhoneCall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneCallBoldIcon,
      duotone: PhoneCallDuotoneIcon,
      fill: PhoneCallFillIcon,
      light: PhoneCallLightIcon,
      regular: PhoneCallRegularIcon,
      thin: PhoneCallThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
