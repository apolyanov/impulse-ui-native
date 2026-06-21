import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneCallBoldIcon } from "../bold";
import { PhoneCallDuotoneIcon } from "../duotone";
import { PhoneCallFillIcon } from "../fill";
import { PhoneCallLightIcon } from "../light";
import { PhoneCallRegularIcon } from "../regular";
import { PhoneCallThinIcon } from "../thin";

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
