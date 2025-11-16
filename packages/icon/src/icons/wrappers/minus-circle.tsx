import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MinusCircleBold } from "../bold";
import { MinusCircleDuotone } from "../duotone";
import { MinusCircleFill } from "../fill";
import { MinusCircleLight } from "../light";
import { MinusCircleRegular } from "../regular";
import { MinusCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MinusCircle = memo(function MinusCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MinusCircleBold,
      duotone: MinusCircleDuotone,
      fill: MinusCircleFill,
      light: MinusCircleLight,
      regular: MinusCircleRegular,
      thin: MinusCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
