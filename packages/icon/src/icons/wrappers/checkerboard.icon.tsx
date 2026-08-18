import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CheckerboardBoldIcon } from "../bold/checkerboard-bold.icon";
import { CheckerboardDuotoneIcon } from "../duotone/checkerboard-duotone.icon";
import { CheckerboardFillIcon } from "../fill/checkerboard-fill.icon";
import { CheckerboardLightIcon } from "../light/checkerboard-light.icon";
import { CheckerboardRegularIcon } from "../regular/checkerboard-regular.icon";
import { CheckerboardThinIcon } from "../thin/checkerboard-thin.icon";

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
