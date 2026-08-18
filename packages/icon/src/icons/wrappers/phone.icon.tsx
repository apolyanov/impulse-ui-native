import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhoneBoldIcon } from "../bold/phone-bold.icon";
import { PhoneDuotoneIcon } from "../duotone/phone-duotone.icon";
import { PhoneFillIcon } from "../fill/phone-fill.icon";
import { PhoneLightIcon } from "../light/phone-light.icon";
import { PhoneRegularIcon } from "../regular/phone-regular.icon";
import { PhoneThinIcon } from "../thin/phone-thin.icon";

export const PhoneIcon = memo(function Phone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneBoldIcon,
      duotone: PhoneDuotoneIcon,
      fill: PhoneFillIcon,
      light: PhoneLightIcon,
      regular: PhoneRegularIcon,
      thin: PhoneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
