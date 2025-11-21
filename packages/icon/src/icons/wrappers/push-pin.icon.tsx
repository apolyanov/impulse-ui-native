import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PushPinBoldIcon } from "../bold";
import { PushPinDuotoneIcon } from "../duotone";
import { PushPinFillIcon } from "../fill";
import { PushPinLightIcon } from "../light";
import { PushPinRegularIcon } from "../regular";
import { PushPinThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
