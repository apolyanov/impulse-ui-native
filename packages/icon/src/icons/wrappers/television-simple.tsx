import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TelevisionSimpleBold } from "../bold";
import { TelevisionSimpleDuotone } from "../duotone";
import { TelevisionSimpleFill } from "../fill";
import { TelevisionSimpleLight } from "../light";
import { TelevisionSimpleRegular } from "../regular";
import { TelevisionSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TelevisionSimple = memo(function TelevisionSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TelevisionSimpleBold,
      duotone: TelevisionSimpleDuotone,
      fill: TelevisionSimpleFill,
      light: TelevisionSimpleLight,
      regular: TelevisionSimpleRegular,
      thin: TelevisionSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
