import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneTransferBoldIcon } from "../bold/phone-transfer-bold.icon";
import { PhoneTransferDuotoneIcon } from "../duotone/phone-transfer-duotone.icon";
import { PhoneTransferFillIcon } from "../fill/phone-transfer-fill.icon";
import { PhoneTransferLightIcon } from "../light/phone-transfer-light.icon";
import { PhoneTransferRegularIcon } from "../regular/phone-transfer-regular.icon";
import { PhoneTransferThinIcon } from "../thin/phone-transfer-thin.icon";

export const PhoneTransferIcon = memo(function PhoneTransfer(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneTransferBoldIcon,
      duotone: PhoneTransferDuotoneIcon,
      fill: PhoneTransferFillIcon,
      light: PhoneTransferLightIcon,
      regular: PhoneTransferRegularIcon,
      thin: PhoneTransferThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
