import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilCircleBold } from "../bold";
import { PencilCircleDuotone } from "../duotone";
import { PencilCircleFill } from "../fill";
import { PencilCircleLight } from "../light";
import { PencilCircleRegular } from "../regular";
import { PencilCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PencilCircle = memo(function PencilCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilCircleBold,
      duotone: PencilCircleDuotone,
      fill: PencilCircleFill,
      light: PencilCircleLight,
      regular: PencilCircleRegular,
      thin: PencilCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
