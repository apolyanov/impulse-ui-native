import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilCircleBoldIcon } from "../bold";
import { PencilCircleDuotoneIcon } from "../duotone";
import { PencilCircleFillIcon } from "../fill";
import { PencilCircleLightIcon } from "../light";
import { PencilCircleRegularIcon } from "../regular";
import { PencilCircleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PencilCircleIcon = memo(function PencilCircle(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilCircleBoldIcon,
      duotone: PencilCircleDuotoneIcon,
      fill: PencilCircleFillIcon,
      light: PencilCircleLightIcon,
      regular: PencilCircleRegularIcon,
      thin: PencilCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
