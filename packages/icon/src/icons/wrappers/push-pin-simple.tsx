import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PushPinSimpleBold } from "../bold";
import { PushPinSimpleDuotone } from "../duotone";
import { PushPinSimpleFill } from "../fill";
import { PushPinSimpleLight } from "../light";
import { PushPinSimpleRegular } from "../regular";
import { PushPinSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PushPinSimple = memo(function PushPinSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PushPinSimpleBold,
      duotone: PushPinSimpleDuotone,
      fill: PushPinSimpleFill,
      light: PushPinSimpleLight,
      regular: PushPinSimpleRegular,
      thin: PushPinSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
