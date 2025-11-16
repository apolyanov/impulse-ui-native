import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilSimpleBold } from "../bold";
import { PencilSimpleDuotone } from "../duotone";
import { PencilSimpleFill } from "../fill";
import { PencilSimpleLight } from "../light";
import { PencilSimpleRegular } from "../regular";
import { PencilSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PencilSimple = memo(function PencilSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilSimpleBold,
      duotone: PencilSimpleDuotone,
      fill: PencilSimpleFill,
      light: PencilSimpleLight,
      regular: PencilSimpleRegular,
      thin: PencilSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
