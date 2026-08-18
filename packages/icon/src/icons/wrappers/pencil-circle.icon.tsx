import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PencilCircleBoldIcon } from "../bold/pencil-circle-bold.icon";
import { PencilCircleDuotoneIcon } from "../duotone/pencil-circle-duotone.icon";
import { PencilCircleFillIcon } from "../fill/pencil-circle-fill.icon";
import { PencilCircleLightIcon } from "../light/pencil-circle-light.icon";
import { PencilCircleRegularIcon } from "../regular/pencil-circle-regular.icon";
import { PencilCircleThinIcon } from "../thin/pencil-circle-thin.icon";

export const PencilCircleIcon = memo(function PencilCircle(
  props: IconWrapperProps,
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
