import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BoxArrowDownBold } from "../bold";
import { BoxArrowDownDuotone } from "../duotone";
import { BoxArrowDownFill } from "../fill";
import { BoxArrowDownLight } from "../light";
import { BoxArrowDownRegular } from "../regular";
import { BoxArrowDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BoxArrowDown = memo(function BoxArrowDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoxArrowDownBold,
      duotone: BoxArrowDownDuotone,
      fill: BoxArrowDownFill,
      light: BoxArrowDownLight,
      regular: BoxArrowDownRegular,
      thin: BoxArrowDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
