import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneOutgoingBold } from "../bold";
import { PhoneOutgoingDuotone } from "../duotone";
import { PhoneOutgoingFill } from "../fill";
import { PhoneOutgoingLight } from "../light";
import { PhoneOutgoingRegular } from "../regular";
import { PhoneOutgoingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhoneOutgoing = memo(function PhoneOutgoing(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneOutgoingBold,
      duotone: PhoneOutgoingDuotone,
      fill: PhoneOutgoingFill,
      light: PhoneOutgoingLight,
      regular: PhoneOutgoingRegular,
      thin: PhoneOutgoingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
