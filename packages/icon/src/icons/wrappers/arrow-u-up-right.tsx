import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUUpRightBold } from "../bold";
import { ArrowUUpRightDuotone } from "../duotone";
import { ArrowUUpRightFill } from "../fill";
import { ArrowUUpRightLight } from "../light";
import { ArrowUUpRightRegular } from "../regular";
import { ArrowUUpRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUUpRight = memo(function ArrowUUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUUpRightBold,
      duotone: ArrowUUpRightDuotone,
      fill: ArrowUUpRightFill,
      light: ArrowUUpRightLight,
      regular: ArrowUUpRightRegular,
      thin: ArrowUUpRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
