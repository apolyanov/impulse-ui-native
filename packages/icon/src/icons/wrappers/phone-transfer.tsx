import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneTransferBold } from "../bold";
import { PhoneTransferDuotone } from "../duotone";
import { PhoneTransferFill } from "../fill";
import { PhoneTransferLight } from "../light";
import { PhoneTransferRegular } from "../regular";
import { PhoneTransferThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhoneTransfer = memo(function PhoneTransfer(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneTransferBold,
      duotone: PhoneTransferDuotone,
      fill: PhoneTransferFill,
      light: PhoneTransferLight,
      regular: PhoneTransferRegular,
      thin: PhoneTransferThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
