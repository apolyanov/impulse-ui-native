import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhonePlusBoldIcon } from "../bold/phone-plus-bold.icon";
import { PhonePlusDuotoneIcon } from "../duotone/phone-plus-duotone.icon";
import { PhonePlusFillIcon } from "../fill/phone-plus-fill.icon";
import { PhonePlusLightIcon } from "../light/phone-plus-light.icon";
import { PhonePlusRegularIcon } from "../regular/phone-plus-regular.icon";
import { PhonePlusThinIcon } from "../thin/phone-plus-thin.icon";

export const PhonePlusIcon = memo(function PhonePlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhonePlusBoldIcon,
      duotone: PhonePlusDuotoneIcon,
      fill: PhonePlusFillIcon,
      light: PhonePlusLightIcon,
      regular: PhonePlusRegularIcon,
      thin: PhonePlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
