import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneCallBold } from "../bold";
import { PhoneCallDuotone } from "../duotone";
import { PhoneCallFill } from "../fill";
import { PhoneCallLight } from "../light";
import { PhoneCallRegular } from "../regular";
import { PhoneCallThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhoneCall = memo(function PhoneCall(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneCallBold,
      duotone: PhoneCallDuotone,
      fill: PhoneCallFill,
      light: PhoneCallLight,
      regular: PhoneCallRegular,
      thin: PhoneCallThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
