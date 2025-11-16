import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandArrowDownBold } from "../bold";
import { HandArrowDownDuotone } from "../duotone";
import { HandArrowDownFill } from "../fill";
import { HandArrowDownLight } from "../light";
import { HandArrowDownRegular } from "../regular";
import { HandArrowDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandArrowDown = memo(function HandArrowDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandArrowDownBold,
      duotone: HandArrowDownDuotone,
      fill: HandArrowDownFill,
      light: HandArrowDownLight,
      regular: HandArrowDownRegular,
      thin: HandArrowDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
