import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhoneBold } from "../bold";
import { PhoneDuotone } from "../duotone";
import { PhoneFill } from "../fill";
import { PhoneLight } from "../light";
import { PhoneRegular } from "../regular";
import { PhoneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Phone = memo(function Phone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhoneBold,
      duotone: PhoneDuotone,
      fill: PhoneFill,
      light: PhoneLight,
      regular: PhoneRegular,
      thin: PhoneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
