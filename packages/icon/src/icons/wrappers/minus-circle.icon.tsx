import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MinusCircleBoldIcon } from "../bold";
import { MinusCircleDuotoneIcon } from "../duotone";
import { MinusCircleFillIcon } from "../fill";
import { MinusCircleLightIcon } from "../light";
import { MinusCircleRegularIcon } from "../regular";
import { MinusCircleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MinusCircleIcon = memo(function MinusCircle(
  props: IconWrapperProps
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
