import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChalkboardSimpleBold } from "../bold";
import { ChalkboardSimpleDuotone } from "../duotone";
import { ChalkboardSimpleFill } from "../fill";
import { ChalkboardSimpleLight } from "../light";
import { ChalkboardSimpleRegular } from "../regular";
import { ChalkboardSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChalkboardSimple = memo(function ChalkboardSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChalkboardSimpleBold,
      duotone: ChalkboardSimpleDuotone,
      fill: ChalkboardSimpleFill,
      light: ChalkboardSimpleLight,
      regular: ChalkboardSimpleRegular,
      thin: ChalkboardSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
