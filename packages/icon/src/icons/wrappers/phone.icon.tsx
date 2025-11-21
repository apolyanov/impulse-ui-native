import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneBoldIcon } from "../bold";
import { PhoneDuotoneIcon } from "../duotone";
import { PhoneFillIcon } from "../fill";
import { PhoneLightIcon } from "../light";
import { PhoneRegularIcon } from "../regular";
import { PhoneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
