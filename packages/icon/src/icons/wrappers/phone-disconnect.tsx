import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneDisconnectBold } from "../bold";
import { PhoneDisconnectDuotone } from "../duotone";
import { PhoneDisconnectFill } from "../fill";
import { PhoneDisconnectLight } from "../light";
import { PhoneDisconnectRegular } from "../regular";
import { PhoneDisconnectThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhoneDisconnect = memo(function PhoneDisconnect(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneDisconnectBold,
      duotone: PhoneDisconnectDuotone,
      fill: PhoneDisconnectFill,
      light: PhoneDisconnectLight,
      regular: PhoneDisconnectRegular,
      thin: PhoneDisconnectThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
