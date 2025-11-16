import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CircleBold } from "../bold";
import { CircleDuotone } from "../duotone";
import { CircleFill } from "../fill";
import { CircleLight } from "../light";
import { CircleRegular } from "../regular";
import { CircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Circle = memo(function Circle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleBold,
      duotone: CircleDuotone,
      fill: CircleFill,
      light: CircleLight,
      regular: CircleRegular,
      thin: CircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
