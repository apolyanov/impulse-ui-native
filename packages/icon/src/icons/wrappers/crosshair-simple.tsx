import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CrosshairSimpleBold } from "../bold";
import { CrosshairSimpleDuotone } from "../duotone";
import { CrosshairSimpleFill } from "../fill";
import { CrosshairSimpleLight } from "../light";
import { CrosshairSimpleRegular } from "../regular";
import { CrosshairSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CrosshairSimple = memo(function CrosshairSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrosshairSimpleBold,
      duotone: CrosshairSimpleDuotone,
      fill: CrosshairSimpleFill,
      light: CrosshairSimpleLight,
      regular: CrosshairSimpleRegular,
      thin: CrosshairSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
