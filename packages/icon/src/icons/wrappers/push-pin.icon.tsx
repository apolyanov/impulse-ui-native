import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PushPinBoldIcon } from "../bold/push-pin-bold.icon";
import { PushPinDuotoneIcon } from "../duotone/push-pin-duotone.icon";
import { PushPinFillIcon } from "../fill/push-pin-fill.icon";
import { PushPinLightIcon } from "../light/push-pin-light.icon";
import { PushPinRegularIcon } from "../regular/push-pin-regular.icon";
import { PushPinThinIcon } from "../thin/push-pin-thin.icon";

export const PushPinIcon = memo(function PushPin(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PushPinBoldIcon,
      duotone: PushPinDuotoneIcon,
      fill: PushPinFillIcon,
      light: PushPinLightIcon,
      regular: PushPinRegularIcon,
      thin: PushPinThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
