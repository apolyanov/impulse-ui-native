import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PushPinBold } from "../bold";
import { PushPinDuotone } from "../duotone";
import { PushPinFill } from "../fill";
import { PushPinLight } from "../light";
import { PushPinRegular } from "../regular";
import { PushPinThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PushPin = memo(function PushPin(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PushPinBold,
      duotone: PushPinDuotone,
      fill: PushPinFill,
      light: PushPinLight,
      regular: PushPinRegular,
      thin: PushPinThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
