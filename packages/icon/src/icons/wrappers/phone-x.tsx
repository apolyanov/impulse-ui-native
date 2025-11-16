import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneXBold } from "../bold";
import { PhoneXDuotone } from "../duotone";
import { PhoneXFill } from "../fill";
import { PhoneXLight } from "../light";
import { PhoneXRegular } from "../regular";
import { PhoneXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhoneX = memo(function PhoneX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneXBold,
      duotone: PhoneXDuotone,
      fill: PhoneXFill,
      light: PhoneXLight,
      regular: PhoneXRegular,
      thin: PhoneXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
