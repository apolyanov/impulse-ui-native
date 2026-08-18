import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PhonePauseBoldIcon } from "../bold/phone-pause-bold.icon";
import { PhonePauseDuotoneIcon } from "../duotone/phone-pause-duotone.icon";
import { PhonePauseFillIcon } from "../fill/phone-pause-fill.icon";
import { PhonePauseLightIcon } from "../light/phone-pause-light.icon";
import { PhonePauseRegularIcon } from "../regular/phone-pause-regular.icon";
import { PhonePauseThinIcon } from "../thin/phone-pause-thin.icon";

export const PhonePauseIcon = memo(function PhonePause(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhonePauseBoldIcon,
      duotone: PhonePauseDuotoneIcon,
      fill: PhonePauseFillIcon,
      light: PhonePauseLightIcon,
      regular: PhonePauseRegularIcon,
      thin: PhonePauseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
