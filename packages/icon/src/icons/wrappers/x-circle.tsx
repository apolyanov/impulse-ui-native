import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { XCircleBold } from "../bold";
import { XCircleDuotone } from "../duotone";
import { XCircleFill } from "../fill";
import { XCircleLight } from "../light";
import { XCircleRegular } from "../regular";
import { XCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const XCircle = memo(function XCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: XCircleBold,
      duotone: XCircleDuotone,
      fill: XCircleFill,
      light: XCircleLight,
      regular: XCircleRegular,
      thin: XCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
