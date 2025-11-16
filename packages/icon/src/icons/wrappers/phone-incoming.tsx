import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneIncomingBold } from "../bold";
import { PhoneIncomingDuotone } from "../duotone";
import { PhoneIncomingFill } from "../fill";
import { PhoneIncomingLight } from "../light";
import { PhoneIncomingRegular } from "../regular";
import { PhoneIncomingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhoneIncoming = memo(function PhoneIncoming(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneIncomingBold,
      duotone: PhoneIncomingDuotone,
      fill: PhoneIncomingFill,
      light: PhoneIncomingLight,
      regular: PhoneIncomingRegular,
      thin: PhoneIncomingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
