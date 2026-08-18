import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneXBoldIcon } from "../bold/phone-x-bold.icon";
import { PhoneXDuotoneIcon } from "../duotone/phone-x-duotone.icon";
import { PhoneXFillIcon } from "../fill/phone-x-fill.icon";
import { PhoneXLightIcon } from "../light/phone-x-light.icon";
import { PhoneXRegularIcon } from "../regular/phone-x-regular.icon";
import { PhoneXThinIcon } from "../thin/phone-x-thin.icon";

export const PhoneXIcon = memo(function PhoneX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneXBoldIcon,
      duotone: PhoneXDuotoneIcon,
      fill: PhoneXFillIcon,
      light: PhoneXLightIcon,
      regular: PhoneXRegularIcon,
      thin: PhoneXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
