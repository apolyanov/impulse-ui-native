import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheckerboardBoldIcon } from "../bold";
import { CheckerboardDuotoneIcon } from "../duotone";
import { CheckerboardFillIcon } from "../fill";
import { CheckerboardLightIcon } from "../light";
import { CheckerboardRegularIcon } from "../regular";
import { CheckerboardThinIcon } from "../thin";

export const CheckerboardIcon = memo(function Checkerboard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheckerboardBoldIcon,
      duotone: CheckerboardDuotoneIcon,
      fill: CheckerboardFillIcon,
      light: CheckerboardLightIcon,
      regular: CheckerboardRegularIcon,
      thin: CheckerboardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
