import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneOutgoingBoldIcon } from "../bold/phone-outgoing-bold.icon";
import { PhoneOutgoingDuotoneIcon } from "../duotone/phone-outgoing-duotone.icon";
import { PhoneOutgoingFillIcon } from "../fill/phone-outgoing-fill.icon";
import { PhoneOutgoingLightIcon } from "../light/phone-outgoing-light.icon";
import { PhoneOutgoingRegularIcon } from "../regular/phone-outgoing-regular.icon";
import { PhoneOutgoingThinIcon } from "../thin/phone-outgoing-thin.icon";

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
