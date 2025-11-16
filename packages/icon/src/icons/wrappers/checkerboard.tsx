import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CheckerboardBold } from "../bold";
import { CheckerboardDuotone } from "../duotone";
import { CheckerboardFill } from "../fill";
import { CheckerboardLight } from "../light";
import { CheckerboardRegular } from "../regular";
import { CheckerboardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Checkerboard = memo(function Checkerboard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckerboardBold,
      duotone: CheckerboardDuotone,
      fill: CheckerboardFill,
      light: CheckerboardLight,
      regular: CheckerboardRegular,
      thin: CheckerboardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
