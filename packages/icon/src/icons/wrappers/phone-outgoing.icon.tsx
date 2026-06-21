import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneOutgoingBoldIcon } from "../bold";
import { PhoneOutgoingDuotoneIcon } from "../duotone";
import { PhoneOutgoingFillIcon } from "../fill";
import { PhoneOutgoingLightIcon } from "../light";
import { PhoneOutgoingRegularIcon } from "../regular";
import { PhoneOutgoingThinIcon } from "../thin";

export const PhoneOutgoingIcon = memo(function PhoneOutgoing(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneOutgoingBoldIcon,
      duotone: PhoneOutgoingDuotoneIcon,
      fill: PhoneOutgoingFillIcon,
      light: PhoneOutgoingLightIcon,
      regular: PhoneOutgoingRegularIcon,
      thin: PhoneOutgoingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
