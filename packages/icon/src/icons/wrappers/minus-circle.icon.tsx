import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MinusCircleBoldIcon } from "../bold/minus-circle-bold.icon";
import { MinusCircleDuotoneIcon } from "../duotone/minus-circle-duotone.icon";
import { MinusCircleFillIcon } from "../fill/minus-circle-fill.icon";
import { MinusCircleLightIcon } from "../light/minus-circle-light.icon";
import { MinusCircleRegularIcon } from "../regular/minus-circle-regular.icon";
import { MinusCircleThinIcon } from "../thin/minus-circle-thin.icon";

export const MinusCircleIcon = memo(function MinusCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MinusCircleBoldIcon,
      duotone: MinusCircleDuotoneIcon,
      fill: MinusCircleFillIcon,
      light: MinusCircleLightIcon,
      regular: MinusCircleRegularIcon,
      thin: MinusCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
